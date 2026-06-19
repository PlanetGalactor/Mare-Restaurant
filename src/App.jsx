import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Instagram from './components/Instagram';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import { translations } from './utils/translations';

function App() {
  const [lang, setLang] = useState('pt');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: translations[lang].nav.about },
    { id: 'menu', label: translations[lang].nav.menu },
    { id: 'instagram', label: translations[lang].nav.instagram },
    { id: 'find-us', label: translations[lang].nav.findUs }
  ];

  return (
    <>
      {/* Floating Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: isScrolled ? '70px' : '90px',
          backgroundColor: isScrolled ? 'rgba(250, 247, 242, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? 'var(--shadow-subtle)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(43, 42, 40, 0.08)' : 'none',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* Dynamic Logo Image */}
          <div 
            onClick={() => scrollToSection('hero')} 
            style={{ 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              height: isScrolled ? '40px' : '50px',
              transition: 'all 0.3s ease'
            }}
          >
            <img
              src={isScrolled ? '/assets/logos/logo_transparent_light.png' : '/assets/logos/logo_transparent_dark.png'}
              alt="Maré Logo"
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Navigation & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <nav 
              style={{ 
                display: 'flex', 
                gap: '24px',
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              className="header-nav"
            >
              {navItems.map((item) => (
                <span
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    cursor: 'pointer',
                    color: isScrolled ? 'var(--color-ink)' : 'var(--color-white)',
                    transition: 'color 0.25s ease',
                    padding: '6px 0',
                    position: 'relative'
                  }}
                  className="nav-link"
                >
                  {item.label}
                </span>
              ))}
            </nav>

            {/* Language Toggle PT/EN */}
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              style={{
                background: 'none',
                color: isScrolled ? 'var(--color-ink)' : 'var(--color-white)',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '12px',
                padding: '6px 12px',
                borderRadius: '20px',
                border: `1.5px solid ${isScrolled ? 'rgba(43, 42, 40, 0.15)' : 'rgba(255, 255, 255, 0.25)'}`,
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(43, 42, 40, 0.05)' : 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>

            {/* CTA Button "Ver Menu / View Menu" */}
            <button
              onClick={() => scrollToSection('menu')}
              style={{
                backgroundColor: 'var(--color-blue)',
                color: 'var(--color-white)',
                border: 'none',
                borderRadius: '30px',
                padding: '10px 24px',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(59, 193, 218, 0.25)',
                transition: 'all 0.25s ease'
              }}
              className="cta-pill"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(59, 193, 218, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 193, 218, 0.25)';
              }}
            >
              {translations[lang].nav.cta}
            </button>
          </div>
        </div>
      </header>

      {/* Main Single Page Sections */}
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Menu lang={lang} />
        <Instagram lang={lang} />
        <FindUs lang={lang} />
      </main>

      <Footer lang={lang} />

      <style dangerouslySetInnerHTML={{__html: `
        .nav-link:hover {
          color: var(--color-blue) !important;
        }
        @media (max-width: 768px) {
          header .header-nav {
            display: none !important;
          }
          header {
            height: 70px !important;
          }
        }
      `}} />
    </>
  );
}

export default App;
