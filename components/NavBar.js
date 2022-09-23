import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <nav>
      <ul className="flex justify-around bg-red-200">
        <li>
          <Link href="/">
            <a className={cls(router.pathname === "/" ? "bg-red-500" : "")}>
              {" "}
              홈
            </a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a
              className={cls(
                router.pathname === "/counter" ? "bg-blue-500" : ""
              )}
            >
              {" "}
              카운터
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={cls(router.pathname === "/about" ? "bg-pink-500" : "")}
            >
              {" "}
              개발자소개
            </a>
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <a
              className={cls(router.pathname === "/todo" ? "bg-amber-500" : "")}
            >
              {" "}
              ToDo리스트
            </a>
          </Link>
        </li>

        <li>
          <Link href="/users">
            <a
              className={cls(
                router.pathname === "/users" ? "bg-purple-500" : ""
              )}
            >
              {" "}
              사용자목록
            </a>
          </Link>
        </li>

        <li>
          <Link href="/users/ssr">
            <a
              className={cls(
                router.pathname === "/users/ssr" ? "bg-cyan-500" : ""
              )}
            >
              {" "}
              사용자목록(ssr)
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
