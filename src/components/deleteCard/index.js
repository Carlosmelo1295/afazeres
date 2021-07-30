import "./style.css";

function delet(url) {
  window.dl = {};
  //evento para remover card desejado.
  window.dl.handleClick = (event) => {
    const $origin = event.target;
    const $box_content = $origin.closest(".box_afazeres");
    $box_content.remove();
  };

  return `
     <img onClick="dl.handleClick(event)" src="${url}">

    `;
}

export default delet;
