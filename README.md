# DualSheetFormSaver

# Para usar como biblioteca 
id é 1jlOXSrvBRql86Xo8vENKyDgJq8BDOfSWdSc3lBFLrVjn8aeJQuwnxCCu  , onFormSubmit(e,id,aba1,aba2) 
## Descrição

O DualSheetFormSaver é um script do Google Apps Script que permite salvar os valores enviados de um formulário em duas abas diferentes de uma planilha.

## Utilização

A função `onFormSubmit` é acionada automaticamente quando um formulário é enviado. Ela recebe os seguintes parâmetros:

- `e`: O objeto de evento contendo informações sobre o envio do formulário.
- `id`: O ID da planilha onde os valores serão salvos.
- `aba1`: O nome da primeira aba onde os valores serão salvos.
- `aba2`: O nome da segunda aba onde os valores serão salvos.

A função `onFormSubmit` obtém as respostas do formulário usando `e.response.getItemResponses()`. Em seguida, ela abre a planilha usando o ID fornecido e obtém as abas correspondentes usando os nomes fornecidos. As respostas são então salvas nas duas abas usando a função `saveFormResponses`.

## Criando um Gatilho na IDE do Google Apps Script

1. Abra a IDE do Google Apps Script.

2. No menu superior, clique em "Editar" e selecione "Gatilhos do projeto".

3. Na nova janela "Gatilhos do projeto", clique no botão "Adicionar gatilho".

4. Na próxima janela, configure as seguintes opções:

   - Escolha a função a ser executada: `onFormSubmit`

   - Escolha qual evento acionará a função: "Do aplicativo Google"

   - Selecione o tipo de evento: "Ao enviar o formulário"

5. Clique em "Salvar".

Agora, sempre que um formulário for enviado, a função `onFormSubmit` será acionada automaticamente.

Certifique-se de salvar o projeto do Google Apps Script e ativar as permissões necessárias para o script acessar o formulário e a planilha.

Depois e só enviar um formulário.

## Prints ajuda.

![Acessar ide formulário](https://user-images.githubusercontent.com/57040825/253761870-2060f02c-4c7c-4869-941c-0fc949bfddb1.png)

![Acessar ide codigo](https://user-images.githubusercontent.com/57040825/253761908-edf4c98c-c1a6-4281-97c4-daddf2c886f0.png)

![Permissão 1](https://user-images.githubusercontent.com/57040825/253761938-8a7da172-4b8a-44d4-b315-62a024b6074e.png)

![Permissão 2](https://user-images.githubusercontent.com/57040825/253762010-3603d66e-2204-415a-984a-a57813558f38.png)

![Permissão 3](https://user-images.githubusercontent.com/57040825/253762038-36a76a7a-e90b-4f2d-aec0-6d767bfbe1a7.png)

![Permissão 4](https://user-images.githubusercontent.com/57040825/253762059-a3d3a6bb-6adf-48e5-a3e6-905ca49beed3.png)
## Exemplo de Uso

```javascript
function onFormSubmit(e, id, aba1, aba2) {
  const formResponses = e.response.getItemResponses();
  const spreadsheetId = id;
  const sheet1Name = aba1;
  const sheet2Name = aba2;

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet1 = spreadsheet.getSheetByName(sheet1Name);
  const sheet2 = spreadsheet.getSheetByName(sheet2Name);

  saveFormResponses(formResponses, sheet1);
  saveFormResponses(formResponses, sheet2);
}

function saveFormResponses(formResponses, sheet) {
  const row = formResponses.map(response => [new Date(), response.getItem().getTitle(), response.getResponse()]);
  const lastRow = sheet.getLastRow();
  const targetRange = sheet.getRange(lastRow + 1, 1, row.length, row[0].length);

  targetRange.setValues(row);
}

