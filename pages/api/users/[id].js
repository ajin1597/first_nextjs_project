import { useEffect } from "react";

export default function handler(req, res) {
  const {
    query: { api_key, lang, region, id },
  } = req;

  console.log(api_key);
  console.log(lang);
  console.log(region);
  console.log(id);

  // console.log(req.query);
  // console.log(req.query.api_key);
  // console.log(req.query.lang);
  // console.log(req.query.region);
  // console.log(req.query.id);

  res.json({ ok: true, message: "GET call" });
}
