"use client";

import React, { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { Logo } from "@/components/icons";

// --- LINKS FOR NAVIGATION ---
const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Programs", href: "/#programs" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About Us", href: "/#about" },
  { label: "Admissions", href: "/#admissions" },
];

export const Mainnavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Custom Smooth Scroll Handler
  const handleScroll = (e: React.MouseEvent<any>, href: string) => {
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);

      if (element) {
        e.preventDefault();
        const offset = 80; 
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        setIsMenuOpen(false);
      } else if (window.location.pathname !== "/") {
        return;
      }
    }
  };

  return (
    <HeroUINavbar
      isBordered
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      // FIX 1: MOBILE LAYOUT
      // - "inset-x-4": Forces 1rem margin on Left AND Right. Matches mobile width perfectly.
      // - "md:inset-x-0 md:w-fit md:mx-auto": On desktop, reset to centered fit-content.
      className="fixed top-4 inset-x-4 md:inset-x-0 md:w-fit md:mx-auto rounded-full bg-background/70 backdrop-blur-md border-small border-default-200/50 shadow-medium z-[50]"
      classNames={{
        wrapper: "px-4 h-12 sm:h-[var(--navbar-height)]", 
        item: [
          "flex", "relative", "h-full", "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      {/* 1. BRAND / LOGO SECTION */}
      {/* FIX 2: min-w-0 ensures the flex container can shrink if needed */}
      <NavbarContent className="flex-1 min-w-0" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-full">
          <NextLink
            className="flex justify-start items-center gap-2 min-w-0"
            href="/"
            onClick={() => {
              if (typeof window !== 'undefined' && window.location.pathname === '/') {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <Logo />
            {/* FIX 3: Added truncate to text so it doesn't push the menu off screen on tiny phones */}
            <p className="font-bold text-inherit text-lg tracking-tight truncate">
              Minerva
            </p>
          </NextLink>
        </NavbarBrand>

        {/* DESKTOP MENU LINKS (Hidden on Mobile) */}
        <ul className="hidden lg:flex gap-6 justify-start ml-4">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-sm font-medium transition-opacity hover:opacity-80 data-[active=true]:text-primary data-[active=true]:font-bold"
                )}
                href={item.href}
                onClick={(e: any) => handleScroll(e, item.href)}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* 2. DESKTOP CONTACT BUTTON (Hidden on Mobile) */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            as={NextLink}
            className="text-sm font-semibold bg-primary text-white shadow-lg rounded-full px-6"
            href="/#contact" 
            variant="flat"
            onClick={(e: any) => handleScroll(e, "/#contact")}
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* 3. MOBILE HAMBURGER MENU */}
      {/* FIX 4: flex-none prevents the toggle from being squished */}
      <NavbarContent className="lg:hidden flex-none pl-2" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* 4. MOBILE MENU OVERLAY */}
      <NavbarMenu className="mt-4 rounded-3xl pt-8 pb-10 bg-background/90 backdrop-blur-xl mx-4 top-[calc(var(--navbar-height)_+_1rem)] border-small border-default-200/50 shadow-2xl flex flex-col items-center justify-center gap-6 z-[49]">
        
        {/* Navigation Links */}
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              as={NextLink}
              color="foreground"
              className="w-full text-2xl font-semibold tracking-wide hover:text-primary transition-colors text-center"
              href={item.href}
              onPress={(e: any) => handleScroll(e, item.href)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}

        <div className="w-12 h-[1px] bg-default-300 my-2 opacity-50"></div>

        {/* Mobile Contact Button */}
        <NavbarMenuItem>
          <Button
            as={NextLink}
            className="w-[200px] text-lg font-bold bg-primary text-white shadow-lg rounded-xl py-6"
            href="/#contact"
            variant="shadow"
            onPress={(e: any) => {
              handleScroll(e, "/#contact"); 
              setIsMenuOpen(false);
            }}
          >
            Contact Us
          </Button>
        </NavbarMenuItem>
        
      </NavbarMenu>
    </HeroUINavbar>
  );
};