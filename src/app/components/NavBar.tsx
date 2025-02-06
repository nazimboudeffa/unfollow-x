import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <span className="ml-2 text-xl font-bold">Unfollow X</span>
      </div>
      <div>
        <Link href="/campaigns">
          <div className="text-lg hover:underline">Campaigns</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;