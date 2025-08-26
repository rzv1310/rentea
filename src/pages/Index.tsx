import { ServiceSection } from "@/components/ServiceSection";
import { Facebook, Instagram, Youtube } from "lucide-react";
import googleLogo from "@/assets/google-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-section-light py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#1877f2] rounded-full flex items-center justify-center mb-2">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-text-muted">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full flex items-center justify-center mb-2">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-text-muted">Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#000000] rounded-full flex items-center justify-center mb-2">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm text-text-muted">TikTok</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src={googleLogo} alt="Google" className="w-10 h-10" />
              </div>
              <span className="text-sm text-text-muted">Google</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-text-dark mb-8 leading-tight">
            Oferta Online Marketing<br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              RenteaClinique.ro
            </span>
          </h1>
          
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Soluții complete de marketing digital pentru clinici medicale private. 
            Creștem vizibilitatea și numărul de pacienți prin strategii personalizate.
          </p>
        </div>
      </section>

      {/* Social Media Section - Dark Background */}
      <ServiceSection
        title="Social Media"
        description="Creăm o prezență online puternică pentru clinica dumneavoastră prin vizualuri unice și campanii eficiente. Serviciile includ: crearea de vizualuri profesionale personalizate, creșterea organică a numărului de followeri, campanii promovate pe Facebook, Instagram și TikTok, editare video profesională pentru conținut atractiv, și ca bonus - tur virtual al clinicii pentru o experiență completă."
        price="2000 lei/lună"
        additionalInfo="+ buget Facebook recomandat: 120 lei/zi"
        isDark={true}
      />

      {/* SEO Section - Light Background */}
      <ServiceSection
        title="SEO"
        description="Optimizarea pentru motoarele de căutare vă poziționează în fruntea rezultatelor când pacienții caută serviciile medicale de care au nevoie. Oferim două pachete complementare: poziționare în Top 3 Google Maps pentru căutări locale și Top 3 rezultate organice pentru vizibilitate maximă în căutările generale."
        price="300 EUR/lună fiecare pachet"
        additionalInfo="Google Maps + Rezultate organice disponibile separat sau împreună"
        isDark={false}
      />

      {/* Google Ads Section - Dark Background */}
      <ServiceSection
        title="Google ADS"
        description="Campanii publicitare Google Ads profesionale pentru rezultate imediate și măsurabile. Serviciile includ: crearea unui cont nou optimizat, dezvoltarea a 4 campanii țintite, optimizare continuă pentru performanță maximă, tracking detaliat și raportare transparentă, analiză competitivă pentru avantaj strategic, și copywriting persuasiv pentru rate de conversie ridicate."
        price="2000 lei/lună"
        additionalInfo="+ buget Google recomandat: 200 lei/zi × 5 zile/săptămână"
        isDark={true}
      />
    </div>
  );
};

export default Index;