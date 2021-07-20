import './src/reset/reset.css'
import './src/settings/colors.css'
import './src/base/style.css'

import './style.css'


import page_title from './src/title';
import campoEntrada from './src/camposPreencher';
import btn from './src/submit-btn';

import saidaAfazeres from './src/cardsSaida';
import { boxContent } from './src/cardsSaida';


const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend", 
`
${page_title()}
${campoEntrada("Tarefa")}
${btn()}
${boxContent()}

`);


document.querySelector("button").addEventListener("click", ()=>{
    const $value = document.querySelector(".entrada").value
    const $time = document.querySelector(".input_date").value

    const $mainContent = document.querySelector(".mainContent")
    
  $mainContent.insertAdjacentHTML("beforeend",saidaAfazeres($value, $time))
});

   
   
  
    





