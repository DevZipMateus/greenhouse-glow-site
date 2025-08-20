
import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">
                RC Montagem e Manutenção de Estufas Agrícolas
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Somos especialistas em montagem e manutenção de estufas agrícolas, entregando 
                soluções eficientes, seguras e personalizadas para produtores rurais que buscam 
                maior produtividade e durabilidade em suas estruturas.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">Experiência Comprovada</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Anos de experiência no mercado agrícola com centenas de projetos realizados.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">Soluções Personalizadas</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Cada projeto é único e desenvolvido de acordo com suas necessidades específicas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">Garantia de Qualidade</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Utilizamos materiais de alta qualidade e técnicas modernas de construção.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">500+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Clientes Satisfeitos</p>
            </div>

            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">100%</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Qualidade Garantida</p>
            </div>

            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">24/7</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Suporte Técnico</p>
            </div>

            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">10+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
