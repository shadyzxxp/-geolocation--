
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const stores = [
  { id: 1, name: "Zara", category: "Одежда", floor: 1 },
  { id: 2, name: "KFC", category: "Еда", floor: 2 },
  { id: 3, name: "Cinema", category: "Развлечения", floor: 3 },
];

const promotions = [
  { id: 1, title: "Скидка 30% на обувь", storeId: 1 },
  { id: 2, title: "2 по цене 1", storeId: 2 },
];

const routes = [
];


app.get("/api/stores", (req, res) => {
  res.json(stores);
});

app.get("/api/promotions", (req, res) => {
  res.json(promotions);
});

app.get("/api/routes", (req, res) => {
  res.json({
    message: "Черновик API для маршрутов внутри ТЦ",
    routesCount: routes.length,
  });
});

app.get("/", (req, res) => {
  res.send("Навигатор по ТЦ backend is running");
});

const PORT = process.env.PORT || 4000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
  });
}

module.exports = app;
