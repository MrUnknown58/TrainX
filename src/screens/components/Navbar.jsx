import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  return (
    <nav className="min-w-full bg-white px-6 py-4 flex justify-between items-center border border-b-2">
      <Link to={"/"}>
        <div className="text-2xl text-black font-bold cursor-pointer">
          {" "}
          Train<span className="text-[#0578FF] italic">X</span>
        </div>
      </Link>
      <div className="space-x-6 flex">
        <Link to="/myBookings" className="bold list-none text-gray-600 text-xl">
          My Bookings
        </Link>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link to="/sign-in" className="list-none text-blue-500 text-xl">
            Log In
          </Link>
          <Link to="/sign-up" className="list-none text-blue-500 text-xl">
            SignUp
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
