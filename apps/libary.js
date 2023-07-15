function onFormSubmit(e,id,aba1,aba2) {
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
