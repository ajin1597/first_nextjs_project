import { useEffect } from "react";

export default function handler(req, res) {
  console.log(req.query);
  res.json({ ok: true, message: "1" });
}
