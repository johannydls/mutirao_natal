const http = require('http');
const electron = require('electron');

//Arquivo de configuração express deve estar na raíz do projeto
const express = require('./express')();

require('./config/database.js')('mongodb://localhost:27017/corrida_mutirao_db');
    
http.createServer(express).listen(express.get('port'), () => {
    console.log(`[===SERVIDOR===] RODANDO: http://localhost:${express.get('port')}`);
});

//Módulo utilizado para controlar o ciclo de vida da aplicação
const app = electron.app;

//Módulo para criar uma janela nativa do seu sistema operacional
const BrowserWindow = electron.BrowserWindow;

//ATENÇÃO: Se não existir uma referência global para a janela da aplicação,,
//ela será fechada automaticamente quando o objeto for pego pelo Garbage COllector
let mainWindow;

app.on('ready', async () => {

    //Uma das opções que é possível definir ao criar uma janela, é o seu tamanho
    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600,
        icon: __dirname + '/public/assets/img/favicon.png'
    });

    //Depois apontamos a janela para o HTML que criamos anteriormente
    //mainWindow.loadURL('file://' + __dirname + '/public/index.html');
    mainWindow.loadURL('http://localhost:8008/');
    mainWindow.focus();

    //Escutamos para quando a janela for fechada
    mainWindow.on('closed', () => {
        //Remove a referência que criamos no começo do arquivo
        mainWindow = null;
    });
});