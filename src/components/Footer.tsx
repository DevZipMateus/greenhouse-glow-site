
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-bold">RC Montagem</h3>
              <p className="text-sm text-background/80">Estufas Agrícolas</p>
            </div>
            <p className="text-background/70 leading-relaxed">
              Especialistas em montagem e manutenção de estufas agrícolas, 
              entregando soluções eficientes e personalizadas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navegação</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block text-background/70 hover:text-background transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block text-background/70 hover:text-background transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block text-background/70 hover:text-background transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block text-background/70 hover:text-background transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Serviços</h4>
            <div className="space-y-2 text-background/70">
              <div>Montagem Completa</div>
              <div>Manutenção Preventiva</div>
              <div>Reformas e Adaptações</div>
              <div>Instalação de Sistemas</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5519998167642"
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(19) 99816-7642</span>
              </a>
              <a
                href="mailto:contato.rcmontagens@gmail.com"
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contato.rcmontagens@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Casemiro Comisso<br />São Paulo - SP</span>
              </div>
              <a
                href="https://www.instagram.com/rcmontagem_manutencao?igsh=b3RsMnZ4cDV0ZWE="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@rcmontagem_manutencao</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 RC Montagem e Manutenção de Estufas Agrícolas. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <span>Desenvolvido com ❤️ para o agronegócio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
