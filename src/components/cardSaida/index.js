import check from "../check";
import delet from "../deleteCard";
import "./style.css";

export function boxContent() {
  return /*container que recebe os cards */ ` 
    <div class="mainContent">
    
    </div>
  `;
}

function saidaAfazeres(content = "Tarefa", time = "horário") {
  return `
      <div class="box_afazeres">
       ${delet("./src/img/icons8-fechar-janela-16.svg")}
       ${check()}
       ${content} <hr> ${time}
      </div>
    `;
}

export default saidaAfazeres;
