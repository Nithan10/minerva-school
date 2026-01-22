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
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-4 inset-x-4 md:inset-x-0 md:w-fit md:mx-auto rounded-full bg-background/80 backdrop-blur-lg border-small border-default-200/30 shadow-lg z-[1000]"
      classNames={{
        wrapper: "px-4 h-12 sm:h-[60px]", 
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
      {/* BRAND / LOGO SECTION */}
      <NavbarContent className="flex-1 min-w-0" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-full">
          <NextLink
            className="flex justify-start items-center gap-2 min-w-0"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo />
            <p className="font-bold text-inherit text-lg tracking-tight truncate sm:text-xl">
              Minerva Academy
            </p>
          </NextLink>
        </NavbarBrand>

        {/* DESKTOP MENU LINKS */}
        <ul className="hidden lg:flex gap-6 justify-start ml-4">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-sm font-medium transition-colors hover:text-primary hover:font-semibold px-2 py-1 rounded-lg hover:bg-primary/10"
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

      {/* DESKTOP CONTACT BUTTON (Now the only Contact element) */}
      <NavbarContent className="lg:flex" justify="end">
        <NavbarItem>
          <Button
            as={NextLink}
            className="text-sm font-semibold bg-primary text-white shadow-md hover:shadow-lg rounded-full px-6 py-2 transition-all hover:scale-105 active:scale-95"
            href="/#contact" 
            variant="flat"
            onClick={(e: any) => handleScroll(e, "/#contact")}
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* MOBILE HAMBURGER MENU */}
      <NavbarContent className="lg:hidden flex-none" justify="end">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
          className="text-foreground"
        />
      </NavbarContent>

      {/* MOBILE MENU OVERLAY */}
      <NavbarMenu className="mt-4 rounded-3xl pt-8 pb-10 bg-background/95 backdrop-blur-xl mx-4 top-[calc(60px_+_1rem)] border border-default-200/50 shadow-2xl">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="w-full">
              <Link
                as={NextLink}
                color="foreground"
                className="w-full text-xl font-medium hover:text-primary transition-colors text-center py-3 px-4 rounded-xl hover:bg-primary/10"
                href={item.href}
                onClick={(e: any) => handleScroll(e, item.href)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <div className="w-16 h-[1px] bg-default-300 my-2"></div>

          {/* Mobile Contact Button (Now the only Contact in mobile menu) */}
          <NavbarMenuItem className="w-full">
            <Button
              as={NextLink}
              className="w-full text-lg font-semibold bg-primary text-white shadow-lg rounded-xl py-4 hover:scale-105 active:scale-95 transition-transform"
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