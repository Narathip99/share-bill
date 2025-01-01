import React from "react";
import Link from "next/link";

// components
import { Button } from "./ui/button";

// icons
import { LogInIcon } from "lucide-react";

const Header = () => {
  const isLoggedIn = false;

  return (
    <header className="w-full h-[64px] px-4 sm:px-0 container mx-auto flex justify-between items-center bg-background">
      <h1 className="text-xl font-bold">
        <Link href="/">SplitBill</Link>
      </h1>

      {isLoggedIn ? (
        <div>
          <Button variant={"ghost"}>Profile</Button>
        </div>
      ) : (
        <div>
          <Button variant={"ghost"}>
            <LogInIcon />
            <Link href="/login">Login</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
