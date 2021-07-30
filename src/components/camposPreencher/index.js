import "./style.css";

function campoEntrada() {
  return /*html*/ `
    <div class="container_input">
    <label> Tarefa 
      <input  type="text" maxlength="50" class="entrada">
      </label>

      <label> Horário da tarefa 
      <input type="time" class="input_date">
      </label>
   </div>
    `;
}
export default campoEntrada;
