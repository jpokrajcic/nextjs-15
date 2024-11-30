import {auth, signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  console.log("Logged user data: ", session);

  return (
    <>
      <h1 className="testKlasa1 text-2xl">Test jedan grotesq</h1>
      <form
        className="px-4 pt-20"
        action={async () => {
          "use server";

          // We do sing out on server side!
          // For server side actions we use "@/auth" and for client side we use "next-auth/react"
          await signOut({redirectTo: ROUTES.SIGN_IN});
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
