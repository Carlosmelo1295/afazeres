import saidaAfazeres from "../cardSaida";
import campoEntrada from "../camposPreencher";
import "./style.css";

function btn(text) {
  window.btnClick = {};
  window.btnClick.handleClick = () => {
    const $value = document.querySelector(".entrada").value;
    const $time = document.querySelector(".input_date").value;

    const $mainContent = document.querySelector(".mainContent");

    if ($time == "" && $value == "") {
      alert(
        "Se você tem uma tarefa que precisa ser lembrada, preencha os campos."
      );
    } else {
      $mainContent.insertAdjacentHTML(
        "beforeend",
        saidaAfazeres("Tarefa✏️: " + $value, "Horário📌: " + $time)
      );
    }
  };

  return `
     <button class="btn" onClick="btnClick.handleClick()"> ${text} </button>
     
    `;
}

export default btn;
