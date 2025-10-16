"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl text-foreground">MotivateMe</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-8">
              <NavigationMenuItem>
                <Link 
                  href="/"
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/quotes"
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Quotes
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/content"
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Content
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/relief"
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Stress Relief
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/quotes"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Quotes
              </Link>
              <Link
                href="/content"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Content
              </Link>
              <Link
                href="/relief"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Stress Relief
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}