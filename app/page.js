import Link from "next/link";
import Image from "next/image";

import bg from "@/public/bg.png";

export default function Page() {
  return (
    <div className={"mt-24"}>
      <Image
        src={bg}
        alt={"background"}
        fill={true}
        quality={96}
        placeholder={"blur"}
        className={"object-cover"}
      />
      <div className={"z-10 relative text-center"}>
        <h1
          className={
            "text-8xl mb-10 text-primary-50 tracking-tight font-normal"
          }
        >
          Welcome to paradise.
        </h1>
        <Link
          href={"/cabins"}
          className={
            "bg-accent-600 px-5 py-4 text-xl font-semibold hover:bg-accent-700 transition-colors rounded-xl"
          }
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
