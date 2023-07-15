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

