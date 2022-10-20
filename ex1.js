//commonJS
//const fs = require('fs');
import fs from "fs";
const dir = './upload';

//todas as funções Sync são bloqueantes
// Prefira utilizar as funções Async
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`Criando diretório: ${dir}`);
}else{
    console.log(`Acessando o diretório: ${dir}`);
}

let msg = 'O melhor time de basquete do mundo e golden State Warriors';
let file = "golden-state-warriors.txt";
let path = `${dir}/${file}`;
if (!fs.existsSync(path)) {
    fs.writeFileSync (path, msg);
    console.log(`Arquivo ${file} criado com sucesso`);
}