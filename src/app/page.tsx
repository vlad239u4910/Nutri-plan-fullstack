import { auth } from "@/lib/auth";
import { Role } from "$/generated/prisma";
import { redirect } from "next/navigation";

import { Home } from "./_components/home";

const Page = async () => {
  const session = await auth();

  if (session?.user?.role === Role.ADMIN)
    redirect("/admin/foods-management/foods");

  if (session?.user?.role === Role.USER) redirect("/client");

  return <Home />;
};
export default Page;
