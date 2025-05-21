"use client";

import { UserButton } from "@clerk/nextjs";
import { MessageSquare, Users, Shield, Zap } from "lucide-react";
// import Button from "@/components/ui/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
      <Link href={"/"} className="flex items-center space-x-2">
        <MessageSquare className="h-6 w-6 text-purple-600" />
        <span className="text-xl font-bold">ChatApp</span>
      </Link>
      <div className="hidden md:flex space-x-6">
        <Link
          href="#features"
          className="text-gray-600 hover:text-purple-600 transition"
        >
          Features
        </Link>
        <Link
          href="#how-it-works"
          className="text-gray-600 hover:text-purple-600 transition"
        >
          How it works
        </Link>
        <Link
          href="/forums"
          className="text-gray-600 hover:text-purple-600 transition"
        >
          Forums
        </Link>
        <Link
          href="/chat"
          className="text-gray-600 hover:text-purple-600 transition"
        >
          Chat
        </Link>
      </div>
      <div className="flex space-x-3">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
