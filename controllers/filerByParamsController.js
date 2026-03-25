import { startups } from "../data/data.js";

export const filerByParamsController = (req, res) => {
  let filteredStartups = startups;
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
};
