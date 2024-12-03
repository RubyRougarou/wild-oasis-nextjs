import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Guests area",
};

async function Page() {
  const session = await auth();
  // to get the first name:
  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className={"font-semibold text-2xl text-accent-400 mb-7"}>
      Welcome, {session.user.name}
    </h2>
  );
}

export default Page;
