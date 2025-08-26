import { ServiceSection } from "@/components/ServiceSection";
import googleLogo from "@/assets/google-logo.png";
import tiktokLogo from "@/assets/tiktok-logo.png";
import facebookLogo from "@/assets/facebook-logo-blue.png";
import instagramLogo from "@/assets/instagram-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-section-light py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src={facebookLogo} alt="Facebook" className="w-10 h-10" />
              </div>
              <span className="text-sm font-thin text-text-muted">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src={instagramLogo} alt="Instagram" className="w-10 h-10" />
              </div>
              <span className="text-sm font-thin text-text-muted">Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src={tiktokLogo} alt="TikTok" className="w-10 h-10" />
              </div>
              <span className="text-sm font-thin text-text-muted">TikTok</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src={googleLogo} alt="Google" className="w-10 h-10" />
              </div>
              <span className="text-sm font-thin text-text-muted">Google</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-thin text-text-dark mb-8 leading-tight">
            Oferta Online Marketing<br />
            <span className="text-text-dark font-thin">
              rentéaclinique.ro
            </span>
          </h1>
          
          <p className="text-xl font-thin text-text-muted max-w-3xl mx-auto leading-relaxed">
            Creștem vizibilitatea și numărul de pacienți.
          </p>
        </div>
      </section>

      {/* Social Media Section - Dark Background */}
      <ServiceSection
        title="Social Media"
        description="Creăm o prezență online puternică a brandului Rentéa prin vizualuri unice și campanii eficiente."
        services={[
          "Crearea de imagini personalizate",
          "Creșterea numărului de followeri",
          "Campanii de promovare pe Facebook, Instagram și TikTok",
          "Ședințe foto / video in clinică",
          "Bonus: tur virtual 360° al clinicii pentru o experiență inedită a pacientului"
        ]}
        price="2000 lei/lună"
        additionalInfo="+ buget Facebook recomandat: 120 lei/zi"
        isDark={true}
      />

      {/* SEO Section - Light Background */}
      <ServiceSection
        title="SEO"
        description="Optimizarea pentru motoarele de căutare vă poziționează în fruntea rezultatelor când pacienții caută serviciile medicale de care au nevoie."
        services={[
          "Poziționare în Top 3 Google Maps pentru căutări locale",
          "Top 3 rezultate Google pentru o procedură chirurgicală, la alegere"
        ]}
        price="4000 lei/lună"
        additionalInfo="Rezultat garantat până la 31 decembrie 2025. Reducere 50% până la 31 decembrie 2025."
        isDark={false}
        forceBlackText={true}
      />

      {/* Google Ads Section - Dark Background */}
      <ServiceSection
        title="Google ADS"
        description="Campanii publicitare Google Ads profesionale pentru rezultate imediate și măsurabile."
        services={[
          "Crearea unui cont nou optimizat",
          "Dezvoltarea a 4 campanii țintite",
          "Optimizare continuă pentru performanță maximă",
          "Tracking detaliat și raportare transparentă",
          "Analiză competitivă pentru avantaj strategic",
          "Copywriting persuasiv pentru rate de conversie ridicate"
        ]}
        price="2000 lei/lună"
        additionalInfo="+ buget Google recomandat: 200 lei/zi × 5 zile/săptămână"
        isDark={true}
      />
    </div>
  );
};

export default Index;