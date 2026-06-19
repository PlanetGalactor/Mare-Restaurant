import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Instagram from './components/Instagram';
import FindUs from './components/FindUs';
import Footer from './components/Footer';

function App() {
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
          {/* Logo / Brand Name */}
          <div 
            onClick={() => scrollToSection('hero')} 
            style={{ 
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <span 
              style={{ 
                fontFamily: 'var(--font-wordmark)', 
                fontSize: isScrolled ? '24px' : '30px', 
                fontWeight: 600,
                color: isScrolled ? 'var(--color-ink)' : 'var(--color-white)',
                transition: 'all 0.3s ease',
                lineHeight: 1
              }}
            >
              Maré
            </span>
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: isScrolled ? '12px' : '15px',
                color: 'var(--color-blue)',
                transition: 'all 0.3s ease',
                marginTop: '-2px'
              }}
            >
              food & drinks
            </span>
          </div>

          {/* Navigation Links */}
          <nav 
            style={{ 
              display: 'flex', 
              gap: '28px',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            {['about', 'menu', 'instagram', 'find-us'].map((sectionId) => (
              <span
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                style={{
                  cursor: 'pointer',
                  color: isScrolled ? 'var(--color-ink)' : 'var(--color-white)',
                  transition: 'color 0.25s ease',
                  padding: '6px 0',
                  position: 'relative'
                }}
                className="nav-link"
              >
                {sectionId.replace('-', ' ')}
              </span>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Menu />
        <Instagram />
        <FindUs />
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .nav-link:hover {
          color: var(--color-blue) !important;
        }
        @media (max-width: 600px) {
          header nav {
            gap: 16px !important;
            font-size: 11px !important;
          }
          header {
            height: 60px !important;
          }
          header .nav-link {
            padding: 4px 0 !important;
          }
        }
      `}} />
    </>
  );
}

export default App;
