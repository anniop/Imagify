"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar bg-white shadow-md border-r border-gray-200 p-4">
      <div className="flex h-full flex-col justify-between">
        {/* Logo */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/assets/images/logo-text.svg"
              alt="logo"
              width={180}
              height={28}
              className="hover:opacity-90 transition"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col gap-6">
            <SignedIn>
              <ul className="flex flex-col gap-2">
                {navLinks.slice(0, 6).map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`group flex items-center gap-3 rounded-lg px-4 py-2 transition ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Link href={link.route} className="flex items-center gap-3 w-full">
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={24}
                          height={24}
                          className={`transition ${
                            isActive ? "brightness-125" : "brightness-100"
                          }`}
                        />
                        <span className="text-sm font-medium">{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="mt-4 flex flex-col gap-2">
                {navLinks.slice(6).map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`group flex items-center gap-3 rounded-lg px-4 py-2 transition ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Link href={link.route} className="flex items-center gap-3 w-full">
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={24}
                          height={24}
                          className={`transition ${
                            isActive ? "brightness-125" : "brightness-100"
                          }`}
                        />
                        <span className="text-sm font-medium">{link.label}</span>
                      </Link>
                    </li>
                  );
                })}

                {/* User Button */}
                <li className="flex items-center justify-center mt-6">
                  <UserButton afterSignOutUrl="/" showName />
                </li>
              </ul>
            </SignedIn>

            <SignedOut>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition"
              >
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
