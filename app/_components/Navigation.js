import Link from "next/link";
import { auth } from "@/app/_lib/auth";

export default async function Navigation() {
  const session = await auth(); // this makes the entire route dynamic

  return (
    <nav className={"z-10 text-xl"}>
      <ul className={"flex gap-16 items-center"}>
        <li>
          <Link
            href={"/cabins"}
            className={"hover:text-accent-400 transition-colors"}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className={"hover:text-accent-400 transition-colors"}
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href={"/account"}
              className={
                "hover:text-accent-400 transition-colors flex items-center gap-4"
              }
            >
              <span>Guest area</span>
              <img
                className={"h-9 rounded-full"}
                src={session.user.image}
                alt="user avatar"
                referrerPolicy={"no-referrer"}
              />
            </Link>
          ) : (
            <Link
              href={"/account"}
              className={"hover:text-accent-400 transition-colors"}
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
