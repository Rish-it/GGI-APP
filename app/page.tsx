"use client";

import { ProfileForm } from "@/components/gg_form";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Ripple } from "@/components/ui/ripple";
import { DarkModeToggle } from "@/components/dark_toggle";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen relative flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Ripple />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow relative z-10">
      <Card className="w-[400px] p-6 shadow-lg relative overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-gray-100">
  <h1 className="text-3xl font-bold text-center mb-4">GGI</h1>
  <ProfileForm />
  <DarkModeToggle />
  <BorderBeam
    duration={4}
    size={350}
    reverse
    className="from-transparent via-red-500 to-transparent"
  />
</Card>
      </div>

      <footer className="relative z-10 py-4 bg-transparent">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm font-light text-gray-600 dark:text-gray-300">
            Designed by <span className="font-medium">Rishit Sharma</span>
          </p>
          <div className="flex space-x-6 mt-2 text-xl">
            <a
              href="https://github.com/rish-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/irishit_sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
