
import React from 'react';
import { ArrowRight, Shield, Wrench, Sprout } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/f7b283c8-2d5a-4cc5-b06c-e44a4c90eb36.png')" }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border border-white/30 rounded-full animate-float"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 border border-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-10 sm:w-20 h-10 sm:h-20 border border-white/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Especialistas em
                <span className="block text-white/90">Estufas Agrícolas</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Soluções eficientes, seguras e personalizadas para produtores rurais que buscam 
                maior produtividade e durabilidade em suas estruturas.
              </p>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <Shield className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Estruturas Seguras</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <Wrench className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Manutenção Completa</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <Sprout className="h-3 sm:h-4 w-3 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Alta Produtividade</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group text-sm sm:text-base"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
              >
                Nossos Serviços
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">100+</div>
                <div className="text-xs sm:text-sm text-white/80">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">24h</div>
                <div className="text-xs sm:text-sm text-white/80">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">10+</div>
                <div className="text-xs sm:text-sm text-white/80">Anos</div>
              </div>
            </div>
          </div>

          {/* Video Element */}
          <div className="relative order-first lg:order-last">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/lovable-uploads/galeria/videos/cortina.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
