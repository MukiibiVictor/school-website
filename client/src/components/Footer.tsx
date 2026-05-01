import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

/* Design Philosophy: Modern Minimalist with Warm Accents
   - Clean footer with organized information
   - Sage green accent for visual interest
   - Social media links with hover effects
*/

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">ZIS</span>
              </div>
              <h3 className="font-bold text-foreground">Zeze International School</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering students to achieve excellence through quality education and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Academics', href: '/academics' },
                { label: 'Gallery', href: '/gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Mbale Street, Mbale, Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+256751768901" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  +256 751 768 901
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:info@zis.edu" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  info@zis.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; 2026 Zeze International School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
