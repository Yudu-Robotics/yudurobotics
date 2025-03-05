// import { redirect } from "next/navigation";

export async function page() {
  return {
    redirect: {
      destination: "/home",
      permanent: true, // triggers 308
    },
  };
}
