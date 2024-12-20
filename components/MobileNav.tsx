"use client";
import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="Hamburger"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-white border-none">
          <Link href="/" className="flex cursor-pointer items-center gap-2">
            <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
            <h1
              className="text-26 font-ibm-plex-serif font-bold
           text-black-1"
            >
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav>
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathName === item.route ||
                    pathName.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <div className="relative size-6 flex whitespace-nowrap gap-2">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                          <p
                            className={cn(
                              "text-16 font-semibold text-black-2",
                              {
                                "text-white": isActive,
                              }
                            )}
                          >
                            {item.label}
                          </p>
                        </div>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
