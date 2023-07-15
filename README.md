# DualSheetFormSaver

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

![Acessar ide form](https://private-user-images.githubusercontent.com/57040825/253711666-7154211d-2ff8-47d6-a7e6-18ba4bd83a71.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODkzODkyNDUsIm5iZiI6MTY4OTM4ODk0NSwicGF0aCI6Ii81NzA0MDgyNS8yNTM3MTE2NjYtNzE1NDIxMWQtMmZmOC00N2Q2LWE3ZTYtMThiYTRiZDgzYTcxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA3MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwNzE1VDAyNDIyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJmNjY3N2RhZTI2MjNmZDQzMGJkOGUxOWZiNmVjNmNiMTRhNWRhZTUyZWRmOGY0Y2VkMDQwNzk2MmJkYzVmNzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.2jc1Vb7vonXEpuFk4nDuNHV1TGRyQbF8sxPgII7V_GQ)

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

