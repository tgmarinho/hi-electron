const { app, BrowserWindow } = require("electron");

// Habilita o live reload no Electron e no Frontend da aplicação com a lib electron-reload
// Assim que alguma alteração no código é feita
require("electron-reload")(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`),
});

// Função que cria uma janela desktop
function createWindow() {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // habilita a integração do Node no Frontend
      nodeIntegration: true,
    },
  });

  // carrega a janela com o conteúdo dentro de index.html
  win.loadFile("index.html");

  // Abre o console do navegador (DevTools),
  // manter apenas quando estiver desenvolvendo a aplicação,
  // pode utilizar variáveis de ambiente do node para executar esse código apenas quando estiver em modo DEV
  // win.webContents.openDevTools();
}

// Método vai ser chamado assim que o Electron finalizar sua inicialização
// e estiver pronto para abrir manipular o nosso código.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(createWindow);

// Quando clicarmos no botão de fechar a janela no app desktop
// O evento vai ser ouvido aqui no arquivo main.js e algum procedimento pode ser realizado aqui
// tipo fechar alguma conexão de banco de dados por exemplo.
app.on("window-all-closed", () => {
  // No MacOS quando fecha uma janela, na verdade ela é "minimizada"
  // e o processo executa em segundo-plano tipo um app do celular
  // Para fechar e encerrar o app tem que teclar Cmd+Q ou no dock (barra de tarefas)
  // clicar com botão direito e encerrar o app
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // Esse evento é disparado pelo MacOS quando clica no ícone do aplicativo no Dock.
  // Basicamente cria a janela se não foi criada.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Abaixo você pode colocar seus códigos específicos do backend que precisam executar no processo principal
// pode criar pastas e arquivos separados e importar aqui (boa prática).
