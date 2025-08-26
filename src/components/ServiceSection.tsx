import { Card, CardContent } from "@/components/ui/card";

interface ServiceSectionProps {
  title: string;
  description: string;
  price: string;
  additionalInfo?: string;
  isDark?: boolean;
}

export const ServiceSection = ({ 
  title, 
  description, 
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
                    {additionalInfo}
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