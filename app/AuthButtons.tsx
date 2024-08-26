import React from "react";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const AuthButtons = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AuthButtons;
