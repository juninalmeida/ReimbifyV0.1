(function () {
  const loadingOverlay = document.getElementById("loading-overlay");
  const progressBar = document.getElementById("progress-bar");
  const progressPercent = document.getElementById("progress-percent");

  const LOADING_DURATION = 1500;

  function updateProgress(percent) {
    const value = Math.min(percent, 100);
    progressBar.style.width = `${value}%`;
    progressPercent.textContent = `${Math.round(value)}%`;
  }

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function startLoading() {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress =
        easeOutQuad(Math.min(elapsed / LOADING_DURATION, 1)) * 100;

      updateProgress(progress);

      if (elapsed >= LOADING_DURATION) {
        clearInterval(interval);
        updateProgress(100);

        setTimeout(() => {
          loadingOverlay.classList.add("hidden");
        }, 300);
      }
    }, 50);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startLoading);
  } else {
    startLoading();
  }
})();

const form = document.getElementById("reimb-form");
const selectDetails = document.querySelector(".select");
const categoryOptions = document.querySelectorAll('input[name="category"]');
const transactionList = document.getElementById("tx-list");
const tabButtons = document.querySelectorAll(".tabs__tab");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const amount = document.getElementById("amount").value.trim();
  const description = document.getElementById("description").value.trim();

  const categoryElement = document.querySelector(
    'input[name="category"]:checked'
  );
  let category = "";
  if (categoryElement) {
    category = categoryElement.value;
  }

  if (amount === "" || category === "" || description === "") {
    alert("Por favor, preencha todos os campos da despesa!");
    return;
  }

  addTransactionToDOM({
    amount,
    description,
    category,
  });

  form.reset();
});

categoryOptions.forEach(function (radio) {
  radio.addEventListener("click", function () {
    selectDetails.removeAttribute("open");
  });
});

function addTransactionToDOM(transactionData) {
  const li = document.createElement("li");
  li.classList.add("tx-list__item");

  li.innerHTML = `
    <article class="tx-row tx-row--pending">
      <h3 class="tx-row__desc"></h3>
      <time class="tx-row__date"></time>
      <p class="tx-row__category"></p>
      <p class="tx-row__amount"></p>
      <div class="tx-row__status">
        <span class="badge badge--pending">Pendente</span>
      </div>
    </article>
  `;

  li.querySelector(".tx-row__desc").textContent = transactionData.description;

  li.querySelector(".tx-row__category").textContent = transactionData.category;

  const formattedAmount = formatCurrencyBRL(transactionData.amount);
  li.querySelector(".tx-row__amount").textContent = formattedAmount;

  const today = new Date().toLocaleDateString("pt-BR");

  li.querySelector(".tx-row__date").textContent = today;

  transactionList.prepend(li);
}

tabButtons.forEach(function (btn) {
  btn.addEventListener("click", function (ev) {
    tabButtons.forEach(function (t) {
      t.classList.remove("tabs__tab--active");
      t.setAttribute("aria-pressed", "false");
    });

    const clickedBtn = ev.currentTarget;

    clickedBtn.classList.add("tabs__tab--active");
    clickedBtn.setAttribute("aria-pressed", "true");
  });
});

function formatCurrencyBRL(value) {
  const number = Number(value);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}