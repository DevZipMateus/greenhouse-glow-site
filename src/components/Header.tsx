
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink-0">
            <img 
              src="/lovable-uploads/8e7e669f-38c9-463d-b0e5-2cd2ca2e4a86.png" 
              alt="RC Montagem e Manutenção de Estufas Agrícolas"
              className="h-7 sm:h-8 md:h-10 w-auto flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg md:text-xl font-heading font-bold text-primary truncate">
                RC Montagem
              </h1>
              <p className="text-xs text-muted-foreground -mt-1 truncate hidden xs:block">
                Estufas Agrícolas
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors duration-200 px-2 py-1"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors duration-200 px-2 py-1"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors duration-200 px-2 py-1"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors duration-200 px-2 py-1"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors duration-200 px-2 py-1"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-3 2xl:space-x-4">
            <a
              href="tel:19998167642"
              className="flex items-center space-x-2 text-xs 2xl:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-3 2xl:h-4 w-3 2xl:w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">(19) 99816-7642</span>
            </a>
            <a
              href="mailto:contato.rcmontagens@gmail.com"
              className="flex items-center space-x-2 text-xs 2xl:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-3 2xl:h-4 w-3 2xl:w-4 flex-shrink-0" />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded text-base"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded text-base"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded text-base"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded text-base"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded text-base"
              >
                Contato
              </button>
              
              {/* Mobile Contact Info */}
              <div className="px-4 pt-4 border-t border-border space-y-3">
                <a
                  href="tel:19998167642"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary py-2"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(19) 99816-7642</span>
                </a>
                <a
                  href="mailto:contato.rcmontagens@gmail.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary py-2"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">contato.rcmontagens@gmail.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
