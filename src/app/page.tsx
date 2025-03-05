// import { redirect } from "next/navigation";

export default async function Page() {
  return {
    redirect: {
      destination: "/home",
      permanent: true, // triggers 308
    },
  };
}
