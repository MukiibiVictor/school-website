import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) =>
    href === '/' ? location === '/' : location.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-foreground text-lg tracking-tight">Zeze</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">International School</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                  isActive(item.href)
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground hover:text-accent hover:bg-accent/5'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></span>
                )}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <a className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-accent to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
              Enroll Now
            </a>
          </Link>
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground hover:text-accent hover:bg-accent/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a
                className="mt-2 btn-primary text-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
