// source chat gpt
const progressiveInputs = document.querySelectorAll(
  'input[type="radio"][name]'
);

progressiveInputs.forEach((input) => {
  input.addEventListener("change", (event) => {

    const container = event.target.closest(".isProgressive");

    // 1. RESET everything
    const allInputs = container.querySelectorAll("input, select, textarea");
    allInputs.forEach((input) => {
      input.disabled = false;
    });

    // 2. Get the checked radio in this group
    const name = event.target.name;
    const checked = container.querySelector(`input[name="${name}"]:checked`);

    // 3. ONLY disable if it's a progressiveRequirement
    if (checked && checked.classList.contains("progressiveRequirement")) {

      const currentFieldset = checked.closest("fieldset");

      let next = currentFieldset.nextElementSibling;

      while (next) {
        const inputs = next.querySelectorAll("input, select, textarea");

        inputs.forEach((input) => {
          input.disabled = true;

          if (input.type === "radio" || input.type === "checkbox") {
            input.checked = false;
          } else {
            input.value = "";
          }

        //   input.removeAttribute("aria-describedby");
        });

        next = next.nextElementSibling;
      }
    }

  });
});