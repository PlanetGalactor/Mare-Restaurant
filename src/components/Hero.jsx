import React from 'react';
import { ChevronDown } from './Icons';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-section"
      style={{
        position: 'relative',
        height: '100svh',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        backgroundImage: `linear-gradient(rgba(43, 42, 40, 0.4), rgba(43, 42, 40, 0.5)), url('/assets/photos/60303E26-56C9-4A09-808D-25266615EA8A.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'var(--color-white)',
        padding: '0 20px'
      }}
    >
      <div 
        className="hero-content animate-fade-in"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          maxWidth: '600px',
          padding: '40px 30px',
          borderRadius: '24px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Logo */}
        <img 
          src="/assets/logos/logo_transparent_dark.png" 
          alt="Maré Logo" 
          style={{
            width: '260px',
            maxWidth: '100%',
            height: 'auto',
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))'
          }}
        />

        {/* Tagline */}
        <div style={{ marginTop: '10px' }}>
          <p 
            style={{ 
              fontFamily: 'var(--font-accent)', 
              fontSize: '32px', 
              color: 'var(--color-blue)',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              lineHeight: 1.2
            }}
          >
            fresh from the tide
          </p>
          <h1 
            style={{ 
              fontSize: '42px', 
              fontWeight: 800, 
              color: 'var(--color-white)',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              marginTop: '8px',
              textShadow: '0 3px 6px rgba(0,0,0,0.6)'
            }}
          >
            Food. Drinks. Lagos.
          </h1>
        </div>

        {/* CTA Button */}
        <button 
          onClick={scrollToMenu} 
          className="btn btn-primary"
          style={{
            marginTop: '12px',
            fontSize: '15px',
            padding: '16px 40px',
            background: 'var(--color-blue)',
            border: 'none',
            color: 'var(--color-white)',
            boxShadow: '0 10px 20px rgba(59, 193, 218, 0.3)'
          }}
        >
          See the Menu
        </button>
      </div>

      {/* Down Arrow Indicator */}
      <div 
        onClick={scrollToMenu}
        style={{
          position: 'absolute',
          bottom: '30px',
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          color: 'rgba(255, 255, 255, 0.7)',
          transition: 'color var(--transition-speed)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-blue)'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
      >
        <ChevronDown size={36} />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}} />
    </section>
  );
};

export default Hero;
