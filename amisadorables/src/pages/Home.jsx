import Avisclient from "../components/Avisclient";
import Cardshop from "../components/Cardshop";
import { Link } from "react-router-dom";


export default function Home() {

  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-r from-[#F6EAD9] via-[#F9F3EB] to-[#D9E8EA] z-30">
      
      {/* Pattern (optionnel paw) */}
      <div className="absolute inset-0 opacity-20 bg-[url('/hero1.jpg')] bg-center bg-repeat"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#4B2E23] leading-tight">
            Découvrez Votre Nouveau <br />
            Compagnon à Quatre Pattes 🐾
          </h1>

          <p className="mt-6 text-lg text-[#7A523E] max-w-xl">
            Trouvez l’animal parfait pour votre famille et donnez-lui une nouvelle vie pleine d’amour.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#F07C1F] hover:bg-[#D96B14] text-white px-6 py-3 rounded-full shadow-lg transition">
              <a href="#nosanimaux">Adopter maintenant</a>
            </button>

            <button className="border border-[#4B2E23] text-[#4B2E23] px-6 py-3 rounded-full hover:bg-[#4B2E23] hover:text-white transition">
              <Link to="/about">En savoir plus</Link> 
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/logo.png"
            alt="pets"
            className="w-full max-w-xl mx-auto drop-shadow-2xl"
          />
        </div>

      </div>

      {/* Bottom fade */}
      <div className="h-16 bg-gradient-to-t from-[#F8F0E3] to-transparent"></div>
    </section>
    <Cardshop/>
    <Avisclient/>
    </>
  );
}