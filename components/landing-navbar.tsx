"use client";

import { Montserrat } from "next/font/google";
<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
=======
import Image from "next/image"
import Link from "next/link"
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

<<<<<<< HEAD
const font = Montserrat({ weight: "600", subsets: ["latin"] });
=======
const font = Montserrat({ weight: '600', subsets: ['latin'] });
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
<<<<<<< HEAD
        {/* <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div> */}
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Imagi-Sync
=======
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Genius
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
