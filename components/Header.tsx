"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row p-5 items-center bg-gray-500/10 rounded-b-2xl">
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={200}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex space-x-4 w-full flex-1 justify-end">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <Search className="text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none"
            ></input>
            <button type="submit" hidden>
              search
            </button>
          </form>

          <Avatar
            name="Dhananjaya Madhusankha"
            round
            color="#0055d1"
            size="50"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
