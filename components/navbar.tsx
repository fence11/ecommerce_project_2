import React from "react";
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import { auth } from '@clerk/nextjs/server';
import prismadb from "@/lib/prismadb";
import { Store } from "@/lib/generated/prisma";

const Navbar = async () => {
  const { userId } = await auth();
  
  let stores: Store[] = [];
  if (userId) {
    stores = await prismadb.store.findMany({
      where: {
        userId
      }
    });
  }

  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <MainNav className="mx-6" stores={stores} />
        <div className="flex items-center ml-auto space-x-4">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
