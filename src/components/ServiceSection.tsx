import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface ServiceSectionProps {
  title: string;
  description: string;
  services?: string[];
  price: string;
  additionalInfo?: string | ReactNode;
  isDark?: boolean;
  forceBlackText?: boolean;
}

export const ServiceSection = ({ 
  title, 
  description, 
  services,
  price, 
  additionalInfo, 
  isDark = false,
  forceBlackText = false
}: ServiceSectionProps) => {
  return (
    <section className={`py-20 px-6 ${isDark ? 'bg-section-dark' : 'bg-section-light'}`}>
      <div className="max-w-4xl mx-auto">
        <Card className={`p-8 border border-border-orange shadow-card ${
          isDark 
            ? 'bg-card-dark text-card-dark-foreground' 
            : 'bg-card text-card-foreground'
        }`}>
          <CardContent className="p-0">
            <h2 className={`text-3xl md:text-4xl mb-6 ${
              forceBlackText ? 'font-[150] md:font-thin text-black' : 'font-thin ' + (isDark ? 'text-text-light' : 'text-text-dark')
            }`}>
              {title}
            </h2>
            
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                forceBlackText ? 'font-[150] md:font-thin text-black' : 'font-thin ' + (isDark ? 'text-text-muted-light' : 'text-text-muted')
              }`}>
                {description}
              </p>
              
              {services && (
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className={`flex items-start text-lg leading-relaxed ${
                      forceBlackText ? 'font-[150] md:font-thin text-black' : 'font-thin ' + (isDark ? 'text-text-muted-light' : 'text-text-muted')
                    }`}>
                      <span className={`mr-3 mt-1 ${
                        forceBlackText ? 'text-black' : (isDark ? 'text-text-light' : 'text-text-dark')
                      }`}>•</span>
                      <span dangerouslySetInnerHTML={{
                        __html: service.replace(/^Bonus:/g, '<span class="text-white font-thin">Bonus:</span>')
                      }} />
                    </li>
                  ))}
                </ul>
              )}
              
              <div className={`p-6 rounded-lg border ${
                isDark ? 'border-border-dark' : 'border-border'
              }`}>
                <div className={`text-2xl ${
                  forceBlackText ? 'font-[150] md:font-thin text-black' : 'font-thin ' + (isDark ? 'text-text-light' : 'text-text-dark')
                }`}>
                  {price}
                </div>
                {additionalInfo && (
                  <div className={`text-sm mt-2 space-y-1 ${
                    forceBlackText ? 'font-[150] md:font-thin text-black' : 'font-thin ' + (isDark ? 'text-text-muted-light' : 'text-text-muted')
                  }`}>
                    {typeof additionalInfo === 'string' ? (
                      additionalInfo.split('. ').map((line, index, array) => (
                        <div key={index}>
                          {line}{index < array.length - 1 && !line.endsWith('.') ? '.' : ''}
                        </div>
                      ))
                    ) : (
                      additionalInfo
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};