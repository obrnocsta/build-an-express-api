import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;
const app = express();

let filteredStartups = startups;

app.get("/api", (req, res) => {
  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;

  if (industry) {
    filteredStartups = filteredStartups.filter(
      (startup) => startup.industry.toLowerCase() === industry.toLowerCase(),
    );
  }

  if (country) {
    filteredStartups = filteredStartups.filter(
      (startup) => startup.country.toLowerCase() === country.toLowerCase(),
    );
  }

  if (continent) {
    filteredStartups = filteredStartups.filter(
      (startup) => startup.continent.toLowerCase() === continent.toLowerCase(),
    );
  }

  if (is_seeking_funding) {
    filteredStartups = filteredStartups.filter(
      (startup) =>
        startup.is_seeking_funding ===
        JSON.parse(is_seeking_funding.toLowerCase()),
    );
  }

  if (has_mvp) {
    filteredStartups = filteredStartups.filter(
      (startup) => startup.has_mvp === JSON.parse(has_mvp.toLowerCase()),
    );
  }

  res.json(filteredStartups);
});

app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];

  if (!allowedFields.includes(field)) {
    res.status(400).json({
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    });
  }

  filteredStartups = filteredStartups.filter(
    (startup) => startup[field].toLowerCase() === term.toLowerCase(),
  );

  res.json(filteredStartups);
});

app.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}`);
});
