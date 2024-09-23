import { Person } from "@/assets";
import Link from "next/link";
import React from "react";

const AuthSection = () => {
  return (
    <div className="px-4 py-7 text-center">
      <h3 className="pb-4">Sign in to get the best experience</h3>
      <Link
        className=" rounded-xl mb-3 py-2 items-center shadow-md bg-gradient-to-t from-[rgba(254,231,105,0.9)] via-[rgba(254,216,19,0.9)] to-transparent font-medium flex justify-center gap-x-2 "
        href="/"
      >
        Sign in <Person width="14" />
      </Link>

      <Link href={"/"}>Create an account</Link>
    </div>
  );
};

export default AuthSection;
