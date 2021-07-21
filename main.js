import './style.css'
import './src/styles/reset/reset.css'
import './src/styles/settings/colors.css'
import './src/components/base/style.css'



import page_title from './src/components/title';
import campoEntrada from './src/components/camposPreencher';
import btn from './src/components/submit-btn';

import saidaAfazeres from './src/components/cardsSaida';
import {
  boxContent
} from './src/components/cardsSaida';



const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend",
  `
${page_title()}
${campoEntrada("Tarefa")}
${btn()}
${boxContent()}
`);


document.querySelector("button").addEventListener("click", () => {
  const $value = document.querySelector(".entrada").value
  let $time = document.querySelector(".input_date").value

  const $mainContent = document.querySelector(".mainContent")

  if ($time == "") {
    $time = "Sem horário".fontcolor("red")
  }

  $mainContent.insertAdjacentHTML("beforeend", saidaAfazeres($value, $time))

});