// import { redirect } from "next/navigation";

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/home",
      permanent: true, // triggers 308
    },
  };
}
