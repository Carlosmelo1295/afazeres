import "./src/styles/reset/reset.css";
import "./src/styles/settings/colors.css";
import "./src/components/base/style.css";

import page_title from "./src/components/title";
import campoEntrada from "./src/components/camposPreencher";
import btn from "./src/components/submit-btn";

import saidaAfazeres from "./src/components/cardSaida";
import { boxContent } from "./src/components/cardSaida";

document.querySelector("#app").insertAdjacentHTML(
  "beforeend",
  `
${page_title("Lista de tarefas do tklao")}
${campoEntrada("Tarefa")}
${btn("Adicionar tarefa")}
${boxContent()}
`
);

// ----------btn event--------------------

const btnClick = document.querySelector("button");
btnClick.onclick = ($value, $time) => {
  $value = document.querySelector(".entrada").value;
  $time = document.querySelector(".input_date").value;

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

  //remover divs
  let closeImg = document.querySelectorAll("img");
  for (let i = 0; i < closeImg.length; i++) {
    //pegar todas as imagens de " X " de suas respectivas divs
    closeImg[i].onclick = () => {
      //adicionando evento para cada img
      console.log(i);
      document.querySelector(".box_afazeres").remove();
    };
  }

  //funcionalidade checkbox
  let cheked = document.querySelectorAll(".check");
  let x = document.querySelectorAll(".box_afazeres");
  for (let i = 0; i < cheked.length; i++) {
    cheked[i].onclick = () => {
      if (cheked[i].checked) {
        console.log("Marcado");
        x[i].style.backgroundColor = "#1e272e";
        x[i].style.color = "white";
      } else {
        console.log("Desmarcado");
        x[i].style.backgroundColor = null;
        x[i].style.color = null;
      }
    };
  }
};
