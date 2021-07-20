import './src/reset/reset.css'
import './src/settings/colors.css'
import './src/base/style.css'

import './style.css'


import campoEntrada from './src/camposPreencher';
import btn from './src/submit-btn';
import page_title from './src/title';

const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend", 
`
${page_title()}
${campoEntrada("Tarefa")}
${btn()}

`);





