"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const SideBar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <div className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.route}
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
                <p
                  className={cn("sidebar-label ml-7 whitespace-nowrap", {
                    "!text-white": isActive,
                  })}
                >
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}
        User
      </nav>
      <Footer user={user} />
    </div>
  );
};

export default SideBar;
