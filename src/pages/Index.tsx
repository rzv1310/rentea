import { ServiceSection } from "@/components/ServiceSection";
import { Phone } from "lucide-react";
import googleLogo from "@/assets/google-logo.png";
import facebookLogo from "@/assets/facebook-logo-blue.png";
import instagramLogo from "@/assets/instagram-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-section-dark py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-end">
          <div className="border border-border-orange px-4 py-2 rounded">
            <a 
              href="tel:0742702982" 
              className="text-text-light font-light hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <Phone size={18} className="text-text-light" />
              0742 702 982
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-section-light py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 flex justify-center items-center space-x-8">
            <a 
              href="https://www.facebook.com/people/RenteaClinique/61577687972178/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src={facebookLogo} alt="Facebook" className="w-10 h-10" />
              </div>
              <span className="text-sm font-thin text-text-dark md:text-text-muted">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/dr.rentea?igsh=MXVianRsemRxcXUxOA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src={instagramLogo} alt="Instagram" className="w-10 h-10" />
              </div>
              <span className="text-sm font-thin text-text-dark md:text-text-muted">Instagram</span>
            </a>
            <a 
              href="https://www.tiktok.com/@renteaclinique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src="/lovable-uploads/7201f28d-0d62-46d7-8efd-3ea2bad73d01.png" alt="TikTok" className="w-10 h-10" />
              </div>
              <span className="text-sm font-thin text-text-dark md:text-text-muted">TikTok</span>
            </a>
            <a 
              href="https://maps.app.goo.gl/Fr8iZEoNxUnxxWKU8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img src={googleLogo} alt="Google" className="w-10 h-10" />
              </div>
              <span className="text-sm font-thin text-text-dark md:text-text-muted">Google</span>
            </a>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-thin text-text-dark mb-8 leading-tight">
            Online Marketing<br />
            <a 
              href="https://rentéaclinique.ro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-border-orange font-thin hover:opacity-80 transition-opacity"
            >
              rentéaclinique.ro
            </a>
          </h1>
          
          <p className="text-xl font-[200] md:font-thin text-text-dark md:text-text-muted max-w-3xl mx-auto leading-relaxed">
            Marketing digital pentru clinici medicale. Creștem vizibilitatea și numărul de pacienți.
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
        additionalInfo={
          <>
            + buget Facebook recomandat: <br className="md:hidden" />120 lei/zi
          </>
        }
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
        additionalInfo={
          <div className="space-y-1">
            <div>Rezultat garantat până la 31 decembrie 2025.</div>
            <div className="text-border-orange font-[300] md:font-[200]">Reducere 50% până la 31 decembrie 2025.</div>
          </div>
        }
        isDark={false}
        forceBlackText={true}
      />

      {/* Google Ads Section - Dark Background */}
      <ServiceSection
        title="Google ADS"
        description="Campanii publicitare Google Ads cu rezultate imediate și măsurabile."
        services={[
          "Crearea unui cont nou optimizat",
          "4 campanii țintite pentru 4 proceduri chirurgicale",
          "Optimizare continuă pentru performanță maximă",
          "Tracking detaliat și raportare transparentă",
          "Analiza competiției",
          "Copywriting pentru rate de conversie ridicate"
        ]}
        price="2000 lei/lună"
        additionalInfo={
          <>
            + buget Google recomandat: <br className="md:hidden" />200 lei/zi × 5 zile/săptămână
          </>
        }
        isDark={true}
      />

      {/* Summary Section - Orange Border */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-orange-500 rounded-lg p-8 shadow-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-[200] md:font-thin text-black mb-4">Costuri totale:</h3>
                <p className="text-lg font-[200] md:font-thin text-black">aprox. 2500 eur/lună.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-[200] md:font-thin text-black mb-4">Target:</h3>
                <p className="text-lg font-[200] md:font-thin text-black">Obiectivul este ca începând din luna 2 să aducem pacienți de minim 5-6000 euro în clinică, astfel încât marketingul să se plătească singur.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-[200] md:font-thin text-black mb-4">Garanție:</h3>
                <p className="text-lg font-[200] md:font-thin text-black">Returnăm toate fee-urile noastre înapoi (6000 lei/lună x 4 luni = 24.000 lei) dacă până la 31 decembrie 2025 nu am produs încasări care să acopere costurile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="bg-section-dark py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="border border-border-orange px-6 py-3 rounded">
            <a 
              href="tel:0742702982" 
              className="text-text-light font-light hover:opacity-80 transition-opacity flex items-center gap-2 text-lg"
            >
              <Phone size={20} className="text-text-light" />
              0742 702 982
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;