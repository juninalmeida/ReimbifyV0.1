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

  console.log({
    amount,
    description,
    category,
  });
});
