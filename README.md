# DualSheetFormSaver

# Para usar como biblioteca o id é 1jlOXSrvBRql86Xo8vENKyDgJq8BDOfSWdSc3lBFLrVjn8aeJQuwnxCCu  , onFormSubmit(e,id,aba1,aba2) 
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

![Acessar ide formulário](https://private-user-images.githubusercontent.com/57040825/253711666-7154211d-2ff8-47d6-a7e6-18ba4bd83a71.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODkzODkyNDUsIm5iZiI6MTY4OTM4ODk0NSwicGF0aCI6Ii81NzA0MDgyNS8yNTM3MTE2NjYtNzE1NDIxMWQtMmZmOC00N2Q2LWE3ZTYtMThiYTRiZDgzYTcxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA3MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwNzE1VDAyNDIyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJmNjY3N2RhZTI2MjNmZDQzMGJkOGUxOWZiNmVjNmNiMTRhNWRhZTUyZWRmOGY0Y2VkMDQwNzk2MmJkYzVmNzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.2jc1Vb7vonXEpuFk4nDuNHV1TGRyQbF8sxPgII7V_GQ)

![Acessar ide codigo](https://private-user-images.githubusercontent.com/57040825/253711966-737b89ca-07ae-44c6-9c7b-3b3e7dac21fc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODkzODkzODgsIm5iZiI6MTY4OTM4OTA4OCwicGF0aCI6Ii81NzA0MDgyNS8yNTM3MTE5NjYtNzM3Yjg5Y2EtMDdhZS00NGM2LTljN2ItM2IzZTdkYWMyMWZjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA3MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwNzE1VDAyNDQ0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVlNTMwMmUwNDYxYmEwYmM3NzI3MmU1NWVkMmZmZGQxOGU2YjNjMzJkZWY5NDljYjZmZmE4NDM3MWVhNmVhNDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.t_mDz66uXE7z4kNY8aEq-b_8UQJ01Lp_DZXG02mw6c4)

![Permissão 1](https://private-user-images.githubusercontent.com/57040825/253712051-293f8da5-7546-440a-b0e4-e6acbc4247fc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODkzODk0NTQsIm5iZiI6MTY4OTM4OTE1NCwicGF0aCI6Ii81NzA0MDgyNS8yNTM3MTIwNTEtMjkzZjhkYTUtNzU0Ni00NDBhLWIwZTQtZTZhY2JjNDI0N2ZjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA3MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwNzE1VDAyNDU1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM1ZmRmY2ZlNzljMTYzNzA0MDI2NGY4YjIzNmE0ZTgxMzQyYTM5MjU2ZjNjODkzYjA3MWM0OGU0MDE4YzA5ODgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.wbaf8jbJcKuj3zDgFRMRrUcXfowUufW78F5-twwTM38)

![Permissão 2](https://private-user-images.githubusercontent.com/57040825/253712079-5094241c-a9d9-4fde-a400-9a6be8b9fac6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODkzODk1NTQsIm5iZiI6MTY4OTM4OTI1NCwicGF0aCI6Ii81NzA0MDgyNS8yNTM3MTIwNzktNTA5NDI0MWMtYTlkOS00ZmRlLWE0MDAtOWE2YmU4YjlmYWM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA3MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwNzE1VDAyNDczNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFhMWQyMTIwMzZjNWIyMmY0MWY5MTYxN2NhZTEzMTYwMmFiNzQzOWM3MzUyMWNlYWM2OTBhOTE0M2QxNTc3NzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.sNLqyLmAR0bljNxMyOvaJUnJO29qjHGTF6JmY09frt4)

![Permissão 3](https://private-user-images.githubusercontent.com/57040825/253712091-6ea5d321-b523-4600-9452-672be06d326d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODkzODk1NjgsIm5iZiI6MTY4OTM4OTI2OCwicGF0aCI6Ii81NzA0MDgyNS8yNTM3MTIwOTEtNmVhNWQzMjEtYjUyMy00NjAwLTk0NTItNjcyYmUwNmQzMjZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA3MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwNzE1VDAyNDc0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQyZTNkOTRlZWU1MDU4NTU2YjQ4ZmQ1M2E3MGY0MTUyODQ3MDliYzg2ZDE4MzVhZjhlNjNhMTQxYzljMmY0ZjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.KujUt3C3qWJQt0FHdmfAfpPzfdybM0FIkr94JXQzFgM)

![Permissão 4](https://private-user-images.githubusercontent.com/57040825/253712101-8cc8024b-f8af-4c8d-a617-3b07aa3fa631.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODkzODk1OTMsIm5iZiI6MTY4OTM4OTI5MywicGF0aCI6Ii81NzA0MDgyNS8yNTM3MTIxMDEtOGNjODAyNGItZjhhZi00YzhkLWE2MTctM2IwN2FhM2ZhNjMxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA3MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwNzE1VDAyNDgxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNlZWUzNzQ2OTczOThlZTA1MDgyYjJlNGQ5MWZjYjA0OGJhNGVkNjJjMjJjZGNjMjRmZTQ3MzFmNzI2ZTZlZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Rc5PoofjFJIKcKIteGmqryGehCZgmL4flNAFX4KD5gM)
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

