import './style.css'

function campoEntrada(text) {
    return `
    <div class="container_input">
      <input value="Preencha sua tarefa..." placeholder=${text} type="text" class="entrada">
      <input type="time" class="input_date">
   </div>
    `;
}
export default campoEntrada;