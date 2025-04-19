export function stagesInit() {
  const stages = document.querySelectorAll(".stage");

  stages.forEach((stage) => {
    stage.addEventListener("click", () => {
      const activeStage = document.querySelector(".stage--active");

      if (activeStage && activeStage !== stage) {
        activeStage.classList.remove("stage--active");

        const delay = window.matchMedia("(min-width: 520px)").matches ? 800 : 0;

        setTimeout(() => {
          stage.classList.add("stage--active");
        }, delay);
      } else if (!activeStage) {
        stage.classList.add("stage--active");
      }
    });
  });
}
