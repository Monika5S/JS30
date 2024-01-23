function Customize(event) {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function handleInput(inputElement) {
  inputElement.addEventListener("change", Customize);
  inputElement.addEventListener("mousemove", Customize);
}

document.querySelectorAll("input").forEach((input) => handleInput(input));
