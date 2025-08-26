import { Card, CardContent } from "@/components/ui/card";

interface ServiceSectionProps {
  title: string;
  description: string;
  services?: string[];
  price: string;
  additionalInfo?: string;
  isDark?: boolean;
}

export const ServiceSection = ({ 
  title, 
  description, 
  services,
  price, 
  additionalInfo, 
  isDark = false 
}: ServiceSectionProps) => {
  return (
    <section className={`py-20 px-6 ${isDark ? 'bg-section-dark' : 'bg-section-light'}`}>
      <div className="max-w-4xl mx-auto">
        <Card className={`p-8 border-0 shadow-card ${
          isDark 
            ? 'bg-card-dark text-card-dark-foreground' 
            : 'bg-card text-card-foreground'
        }`}>
          <CardContent className="p-0">
            <h2 className={`text-3xl md:text-4xl font-thin mb-6 ${
              isDark ? 'text-text-light' : 'text-text-dark'
            }`}>
              {title}
            </h2>
            
            <div className="space-y-6">
              <p className={`text-lg font-thin leading-relaxed ${
                isDark ? 'text-text-muted-light' : 'text-text-muted'
              }`}>
                {description}
              </p>
              
              {services && (
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className={`flex items-start text-lg font-thin leading-relaxed ${
                      isDark ? 'text-text-muted-light' : 'text-text-muted'
                    }`}>
                      <span className={`mr-3 mt-1 ${
                        isDark ? 'text-text-light' : 'text-text-dark'
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
                <div className={`text-2xl font-thin ${
                  isDark ? 'text-text-light' : 'text-text-dark'
                }`}>
                  {price}
                </div>
                {additionalInfo && (
                  <div className={`text-sm font-thin mt-2 ${
                    isDark ? 'text-text-muted-light' : 'text-text-muted'
                  }`}>
                    {additionalInfo.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
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