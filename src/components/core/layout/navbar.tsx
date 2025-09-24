"use client";

import { ModeToggle } from "@/components/themes/toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVIGATION_LINKS, type NavbarNavLink } from "@/consts/links";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logoHref = "#",
      navigationLinks: providedNavigationLinks,
      signInText = "Sign In",
      signInHref = "#signin",
      ctaText = "Get Started",
      ctaHref = "#get-started",
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);
    const pathname = usePathname();

    // Set hydrated state after component mounts to avoid hydration mismatch
    useEffect(() => {
      setIsHydrated(true);
    }, []);

    // Merge provided navigation links with active state based on current pathname
    const navigationLinks = useMemo(() => {
      const linksToUse = providedNavigationLinks || NAVIGATION_LINKS;
      return linksToUse.map((link) => ({
        ...link,
        active: isHydrated ? pathname === link.href : false,
      }));
    }, [providedNavigationLinks, pathname, isHydrated]);

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className,
        )}
        {...props}
      >
        <div className='container mx-auto flex h-16 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8'>
          {/* Left side - Logo and Navigation */}
          <div className='flex flex-1 items-center gap-8'>
            {/* Logo */}
            <a
              href={logoHref}
              className='flex items-center space-x-2 text-primary transition-colors hover:text-primary/90'
            >
              <span className='font-bold text-xl'>rustroam</span>
            </a>

            {/* Desktop Navigation */}
            <NavigationMenu className='hidden md:flex'>
              <NavigationMenuList className='gap-1'>
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        link.active
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground/80",
                      )}
                    >
                      {link.label}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side - Actions */}
          <div className='flex items-center gap-2'>
            <ModeToggle />

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-9 w-9 md:hidden'
                  aria-label='Toggle menu'
                >
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-full p-0 sm:w-80'>
                <div className='flex h-full flex-col'>
                  {/* Header */}
                  <SheetHeader className='flex h-16 items-center justify-between border-b px-6'>
                    <SheetTitle className='font-semibold text-lg'>
                      Menu
                    </SheetTitle>
                    <SheetDescription className='sr-only'>
                      Mobile navigation menu with links and actions
                    </SheetDescription>
                  </SheetHeader>

                  {/* Navigation Links */}
                  <div className='flex-1 overflow-y-auto px-6 py-6'>
                    <nav className='space-y-2'>
                      {navigationLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center rounded-lg px-4 py-3 font-medium text-sm transition-all duration-200 hover:translate-x-1 hover:bg-accent hover:text-accent-foreground",
                            link.active
                              ? "bg-accent text-accent-foreground shadow-sm"
                              : "text-foreground/80",
                          )}
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    );
  },
);

Navbar.displayName = "Navbar";
