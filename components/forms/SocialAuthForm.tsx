"use client";

import Image from "next/image";
import {signIn} from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import {toast} from "@/hooks/use-toast";

import {Button} from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const signInHandler = async (provider: "github" | "google") => {
    try {
      console.log("Sign in with: ", provider);

      await signIn(provider, {
        callback: ROUTES.HOME,
        redirect: false,
        redirectTo: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Sign In error",
        description:
          error instanceof Error
            ? error.message
            : "Error occured during sing in process!",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => signInHandler("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => signInHandler("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
