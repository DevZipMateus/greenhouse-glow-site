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
    <section id="inicio" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-white/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Especialistas em
                <span className="block text-white/90">Estufas Agrícolas</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Soluções eficientes, seguras e personalizadas para produtores rurais que buscam 
                maior produtividade e durabilidade em suas estruturas.
              </p>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Estruturas Seguras</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Wrench className="h-4 w-4" />
                <span className="text-sm font-medium">Manutenção Completa</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Sprout className="h-4 w-4" />
                <span className="text-sm font-medium">Alta Produtividade</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-hero group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="btn-hero"
              >
                Nossos Serviços
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-white/80">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm text-white/80">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-white/80">Anos</div>
              </div>
            </div>
          </div>

          {/* Video Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover rounded-xl"
                  controls
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
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
