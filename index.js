//o index conterá o processo principal do electron.

const electron = require('electron');

/*Atribuição via desestruturação. 
 * app é o processo principal da aplicação electron.
 * BrowserWindow é necessário para a criação da janela de interação com o usuário.
 * 
 */
const {app, BrowserWindow} = electron;


app.on('ready', ()=>{
    console.log('Electron iniciado e pronto(ready)');
    new BrowserWindow({});//criará a janela de interação.
});