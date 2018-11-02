//o index conterá o processo principal do electron.

const electron = require('electron');

/*Atribuição via desestruturação. 
 * app é o processo principal da aplicação electron. usado para Controlar os eventos do 
 * ciclo de vida da sua aplicação.
 * BrowserWindow é necessário para a criação da janela de interação com o usuário.
 * 
 */
const {app, BrowserWindow} = electron;


//Evento do tipo ready emitido quando Electron tiver concluído a inicialização.
app.on('ready', ()=>{
    console.log('Electron iniciado e pronto(ready)');
    const janela = new BrowserWindow({});//criará a janela de interação.
    janela.loadURL(`file://${__dirname}/index.html`);//carregará o arquivo html na janela criada
    //janela.loadURL("http://www.google.com"); //um exemplo maluco
});

