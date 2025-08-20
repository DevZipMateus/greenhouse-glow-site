
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
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-heading font-bold text-primary">
              RC Montagem
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">
              Estufas Agrícolas
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:19998167642"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(19) 99816-7642</span>
            </a>
            <a
              href="mailto:contato.rcmontagens@gmail.com"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/30 transition-colors rounded"
              >
                Contato
              </button>
              
              {/* Mobile Contact Info */}
              <div className="px-4 pt-4 border-t border-border space-y-2">
                <a
                  href="tel:19998167642"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  <span>(19) 99816-7642</span>
                </a>
                <a
                  href="mailto:contato.rcmontagens@gmail.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  <span>contato.rcmontagens@gmail.com</span>
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
