import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gold-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-cormorant text-2xl mb-6 gold-gradient">
              Tableau de Katia
            </h3>
            <p className="text-gray-400 text-sm">
              Luxury hair salon offering premium services in an elegant setting.
            </p>
          </div>

          <div>
            <h4 className="font-cormorant text-xl mb-6">Contact</h4>
            <div className="space-y-4">
              <p className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2 text-gold-400" />
                +1 (956) 867-0023
              </p>
              <a
                href="mailto:tableaudekatia23@gmail.com"
                className="flex items-center text-gray-400 text-sm hover:text-gold-400 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2 text-gold-400" />
                tableaudekatia23@gmail.com
              </a>
              <a 
                href="https://www.google.com/maps?q=6421+North+10th+Street,+Suite+140,+McAllen,+TX+78504"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 text-sm hover:text-gold-400 transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2 text-gold-400" />
                6421 North 10th Street, Suite 140, McAllen, TX 78504
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-cormorant text-xl mb-6">Hours</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 9am - 8pm</p>
              <p>Sunday: Booking Only</p>
            </div>
          </div>

          <div>
            <h4 className="font-cormorant text-xl mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/stories/tableaudekatia/"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gold-400 hover:text-gold-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100063527921379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold-500/20 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Tableau de Katia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
