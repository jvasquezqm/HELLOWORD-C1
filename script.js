const button = document.getElementById("btnCambiarColor");
let isColor = true;

button.addEventListener("click", () => {
  document.body.style.backgroundColor = isColor ? "#FF32447" : "#33FF57";
  isColor = !isColor;
});
