"use client";

import React, { useCallback, useState } from "react";
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
  // Removed "Contact" from here - it's now only a button
];

export const Mainnavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enhanced Smooth Scroll Handler
  const handleScroll = useCallback((e: React.MouseEvent<any>, href: string) => {
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
      }
    }
  }, []);

  return (
    <HeroUINavbar
      isBordered
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 left-0 right-0 md:top-4 md:left-4 md:right-4 lg:top-4 lg:left-8 lg:right-8 xl:top-4 xl:left-12 xl:right-12 w-full md:w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] mx-auto rounded-none md:rounded-full bg-background/95 backdrop-blur-xl border-small border-default-200/40 shadow-xl z-[1000]"
      classNames={{
        wrapper: "px-4 h-16 sm:h-[68px] md:h-[62px] md:px-6", 
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
      {/* LEFT SECTION: LOGO */}
      <NavbarContent className="basis-1/3 md:basis-1/5" justify="start">
        <NavbarBrand as="li" className="max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-2"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo />
            <p className="font-bold text-inherit text-lg tracking-tight sm:text-xl">
              Minerva Vidhya
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* CENTER SECTION: DESKTOP NAV LINKS */}
      <NavbarContent className="hidden lg:flex basis-1/3 md:basis-3/5" justify="center">
        <ul className="flex gap-4 justify-center items-center">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-sm font-medium transition-all duration-200 hover:text-primary hover:font-semibold px-3 py-2 rounded-lg hover:bg-primary/10 active:bg-primary/20"
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

      {/* RIGHT SECTION: CONTACT BUTTON & MENU TOGGLE */}
      <NavbarContent className="basis-1/3 md:basis-1/5" justify="end">
        {/* DESKTOP CONTACT BUTTON */}
        <NavbarItem className="hidden lg:flex">
          <Button
            as={NextLink}
            className="text-sm font-semibold bg-primary text-white shadow-md hover:shadow-lg rounded-full px-6 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95"
            href="/#contact" 
            variant="flat"
            onClick={(e: any) => handleScroll(e, "/#contact")}
          >
            Contact Us
          </Button>
        </NavbarItem>

        {/* MOBILE MENU TOGGLE - MUST BE INSIDE NavbarContent FOR HeroUI */}
        <NavbarItem className="lg:hidden">
          <NavbarMenuToggle 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
            className="text-foreground"
          />
        </NavbarItem>
      </NavbarContent>

      {/* MOBILE MENU OVERLAY */}
      <NavbarMenu className="pt-16 pb-8 bg-background/95 backdrop-blur-xl border-t border-default-200/50 shadow-2xl">
        <div className="flex flex-col items-center justify-center gap-3 px-4">
          {/* Mobile Navigation Links */}
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="w-full">
              <Link
                as={NextLink}
                color="foreground"
                className="w-full text-base font-medium hover:text-primary transition-all duration-200 text-center py-3 px-4 rounded-xl hover:bg-primary/10 active:bg-primary/20"
                href={item.href}
                onClick={(e: any) => handleScroll(e, item.href)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <div className="w-16 h-[1px] bg-default-300 my-2"></div>

          {/* Mobile Contact Button */}
          <NavbarMenuItem className="w-full">
            <Button
              as={NextLink}
              className="w-full text-base font-semibold bg-primary text-white shadow-lg rounded-xl py-3.5 hover:scale-105 active:scale-95 transition-all duration-200"
              href="/#contact"
              variant="shadow"
              onClick={(e: any) => {
                handleScroll(e, "/#contact"); 
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};