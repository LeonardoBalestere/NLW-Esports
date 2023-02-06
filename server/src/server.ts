import express from 'express';

const app = express()

app.get("/ads", (request, response) => {
  console.log("entrou ads")
  return response.json([
    {
      "id": 1,
      "title": "Anúncio 1",
      "description": "Descrição do anúncio 1"
    },
    {
      "id": 2,
      "title": "Anúncio 2",
      "description": "Descrição do anúncio 2"
    },
    {
      "id": 3,
      "title": "Anúncio 3",
      "description": "Descrição do anúncio 3"
    },
    {
      "id": 4,
      "title": "Anúncio 4",
      "description": "Descrição do anúncio 4"
    }
  ])
});

app.listen(3333)