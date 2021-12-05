const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors({
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});