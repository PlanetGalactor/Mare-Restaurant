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
      {/* Floating Capsule Header (Mockup Design) */}
      <header
        style={{
          position: 'fixed',
          top: isScrolled ? '16px' : '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '850px',
          height: '60px',
          backgroundColor: isScrolled ? 'rgba(250, 247, 242, 0.92)' : 'rgba(20, 20, 20, 0.45)',
          backdropFilter: 'blur(16px) saturate(120%)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
          border: isScrolled ? '1px solid rgba(43, 42, 40, 0.08)' : '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '50px',
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
            padding: '0 16px 0 20px',
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
              height: '34px',
              transition: 'all 0.3s ease'
            }}
          >
            <img
              src={isScrolled ? '/assets/logos/logo_transparent_light.png' : '/assets/logos/logo_transparent_dark.png'}
              alt="Maré Logo"
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Navigation & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <nav 
              style={{ 
                display: 'flex', 
                gap: '20px',
                fontWeight: 700,
                fontSize: '12px',
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
                fontSize: '11px',
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

            {/* CTA Button "Ver Menu" */}
            <button
              onClick={() => scrollToSection('menu')}
              style={{
                backgroundColor: 'var(--color-blue)',
                color: 'var(--color-white)',
                border: 'none',
                borderRadius: '30px',
                padding: '8px 20px',
                fontSize: '11.5px',
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
            height: 56px !important;
            top: 12px !important;
          }
        }
      `}} />
    </>
  );
}

export default App;
