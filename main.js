import "./src/styles/reset/reset.css";
import "./src/styles/settings/colors.css";
import "./src/components/base/style.css";

import page_title from "./src/components/title";
import campoEntrada from "./src/components/camposPreencher";
import btn from "./src/components/submit-btn";
import { boxContent } from "./src/components/cardSaida";

document.querySelector("#app").insertAdjacentHTML(
  "beforeend",
  `
${page_title("Lista de tarefas do tklao")}
${campoEntrada()}
${btn("Adicionar tarefa")}
${boxContent()}
`
);
