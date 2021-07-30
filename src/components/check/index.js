import "./style.css";

function check() {
  window.check = {};
  window.check.handleClick = (event) => {
    const $origin = event.target;
    const $cheked = $origin.closest(".check");

    const $box_afazeres = $origin.closest(".box_afazeres");

    //se o btn de check estiver ativado, a div será pintada de preto, caso contrário, será pintada de branco
    if ($cheked.checked) {
      $box_afazeres.style.backgroundColor = "#1e272e";
      $box_afazeres.style.color = "white";
    } else {
      $box_afazeres.style.backgroundColor = null;
      $box_afazeres.style.color = null;
    }
  };

  return `
     <input class="check" onClick="check.handleClick(event)" type="checkbox">
    `;
}

export default check;

//esse elemento só é inserido após...
