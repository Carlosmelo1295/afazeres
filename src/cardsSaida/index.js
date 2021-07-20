import './style.css'

function saidaAfazeres(content="Tarefa", time="horário") {
    return `
      <div class="box_afazeres">
        ${content} : ${time}
      </div>
    `;
}

export function boxContent(){
  return ` 
    <div class="mainContent">

    </div>
  `
}
export default saidaAfazeres;