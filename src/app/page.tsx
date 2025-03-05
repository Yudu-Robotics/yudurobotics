import { redirect } from "next/navigation";

export default async function Page() {
  // Trigger the redirect
  redirect("/home");
  return null; // Ensure the function returns null after the redirect
}

// export async function Page() {
//   return {
//     redirect: {
//       destination: "/home",
//       permanent: true, // triggers 308
//     },
//   };
// }
