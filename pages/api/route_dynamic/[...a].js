import { useEffect } from "react";

export default function handler(req, res) {
  console.log(req.query);
  console.log(req.query.a[0]);
  console.log(req.query.a[1]);
  console.log(req.query.a[2]);
  console.log(req.query.a[3]);
  res.json({ ok: true, message: "2" });
}
