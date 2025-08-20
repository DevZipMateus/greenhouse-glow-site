
import React from 'react';
import { Construction, Wrench, Settings, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Construction,
      title: 'Montagem Completa',
      description: 'Montagem completa de estufas de diversos modelos e tamanhos, adequadas às suas necessidades específicas.',
      features: ['Projeto personalizado', 'Estruturas robustas', 'Instalação profissional']
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva e Corretiva',
      description: 'Serviços completos de manutenção para garantir o funcionamento perfeito de suas estruturas.',
      features: ['Inspeções regulares', 'Reparos especializados', 'Peças originais']
    },
    {
      icon: Settings,
      title: 'Reformas e Adaptações',
      description: 'Reformas e adaptações para otimizar a produção e modernizar estruturas existentes.',
      features: ['Modernização', 'Expansão de capacidade', 'Melhorias tecnológicas']
    },
    {
      icon: Shield,
      title: 'Instalação de Sistemas',
      description: 'Instalação de sistemas e acabamentos de alta qualidade para máxima eficiência.',
      features: ['Sistemas de irrigação', 'Controle climático', 'Acabamentos premium']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para estufas agrícolas, desde o projeto inicial 
            até a manutenção contínua de suas estruturas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Precisa de um orçamento personalizado?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para avaliar seu projeto e oferecer a melhor solução 
            para suas necessidades específicas.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary group"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
