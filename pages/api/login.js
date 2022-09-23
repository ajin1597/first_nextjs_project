const 원본id = "ksw";
const 원본pw = "1234";

export default function handler(req, res) {
  console.log(req.body);
  const { id, pw } = req.body;

  if ("POST" !== req.method) {
    return res
      .status(405)
      .json({ ok: false, message: "지원하지 않는 메서드 입니다." });
  }

  if (!id) return res.json({ ok: false, message: "아이디를 입력하세요" });
  if (!pw) return res.json({ ok: false, message: "비밀번호를 입력하세요" });

  if (id === 원본id && pw === 원본pw) {
    res.json({ ok: true, message: "로그인 성공" });
  } else {
    res.json({ ok: false, message: "아이디와 비밀번호가 일치하지 않습니다" });
  }

  console.log(id, pw);
}
