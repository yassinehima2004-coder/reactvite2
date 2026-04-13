import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#b06f3c] text-white py-10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl mb-3">Amis Adorables</h3>
              <p className="text-white/80">Un espace chaleureux pour trouver votre compagnon idéal.</p>
            </div>

            <div>
              <Link to="/contact" className="font-semibold mb-3">Contact</Link>
              <p className="text-white/80">email@example.com</p>
              <p className="text-white/80">+212 6 12 34 56 78</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Suivez-nous</h4>
              <p className="text-white/80">Facebook • Instagram • TikTok</p>
            </div>
          </div>
        </footer>
    )
}
export default Footer;