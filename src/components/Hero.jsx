import React from 'react';
import { ChevronDown } from './Icons';
import { translations } from '../utils/translations';

const Hero = ({ lang }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = translations[lang].hero;
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Tv.+do+Mar+21,+8600-607+Lagos,+Portugal";

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url('/assets/photos/60303E26-56C9-4A09-808D-25266615EA8A.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'var(--color-white)',
        padding: '120px 20px 80px 20px',
        overflow: 'hidden'
      }}
    >
      {/* Floating Refraction Glass Strips */}
      <div className="glass-strip float-strip-1" />
      <div className="glass-strip float-strip-2" />
      <div className="glass-strip float-strip-3" />

      {/* Main Content Layout */}
      <div 
        className="hero-content animate-fade-in"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          maxWidth: '750px',
          zIndex: 5,
          marginBottom: '50px'
        }}
      >
        {/* Original Logo in Center - filter applied to invert to white on dark background */}
        <img 
          src="/assets/logos/logo_transparent_dark.png" 
          alt="Maré Logo" 
          style={{
            width: '340px',
            maxWidth: '90%',
            height: 'auto',
            filter: 'brightness(0) invert(1) drop-shadow(0 10px 25px rgba(255,255,255,0.15))',
            margin: '8px 0'
          }}
        />

        {/* Subtitle/Description Copy */}
        <p 
          style={{ 
            fontSize: '17px', 
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.7',
            maxWidth: '650px',
            margin: '0 auto 8px auto',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            fontWeight: 500
          }}
        >
          {t.desc}
        </p>

        {/* Mockup CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
          {/* Primary Ver Menu Button (Solid Brand Blue) */}
          <button 
            onClick={() => scrollToSection('menu')} 
            style={{
              fontSize: '13.5px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              padding: '16px 36px',
              backgroundColor: 'var(--color-blue)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(59, 193, 218, 0.3)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 193, 218, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 193, 218, 0.3)';
            }}
          >
            {t.ctaMenu}
          </button>
          
          {/* Secondary Contacto Button (Outlined Glass) */}
          <button 
            onClick={() => scrollToSection('find-us')} 
            style={{
              fontSize: '13.5px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              padding: '16px 36px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: 'var(--color-white)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '50px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            }}
          >
            {t.ctaContact}
          </button>
        </div>
      </div>

      {/* Align-items stretch + equal height stats row */}
      <div 
        style={{
          display: 'flex',
          gap: '20px',
          width: '100%',
          maxWidth: '900px',
          zIndex: 5,
          marginTop: 'auto',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'center'
        }}
        className="hero-stats-row animate-fade-in"
      >
        {/* Card 1: Google Rating */}
        <div
          style={{
            flex: '1 1 250px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease'
          }}
          className="hero-stat-card"
        >
          <h4 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-white)', margin: 0, letterSpacing: '-0.5px' }}>
            {t.statRating}
          </h4>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '8px', marginBottom: 0, fontWeight: 700 }}>
            {t.statRatingLabel}
          </p>
        </div>

        {/* Card 2: Lagos Centro (Tappable Link to Google Maps) */}
        <div
          onClick={() => window.open(mapsUrl, '_blank')}
          style={{
            flex: '1 1 250px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease'
          }}
          className="hero-stat-card clickable-card"
        >
          <h4 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-white)', margin: 0, letterSpacing: '-0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            {t.statLocation}
          </h4>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-blue)', marginTop: '8px', marginBottom: 0, fontWeight: 700 }}>
            {t.statLocationLabel}
          </p>
        </div>

        {/* Card 3: Hours (Centered on same baseline) */}
        <div
          style={{
            flex: '1 1 250px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease'
          }}
          className="hero-stat-card"
        >
          <h4 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-white)', margin: 0, letterSpacing: '-0.5px' }}>
            {t.statHours}
          </h4>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '8px', marginBottom: 0, fontWeight: 700 }}>
            {t.statHoursLabel}
          </p>
        </div>
      </div>

      {/* Local styles and parallax glass strip swaying animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .glass-strip {
          position: absolute;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          border-radius: 60px;
          pointer-events: none;
          z-index: 1;
        }
        .float-strip-1 {
          width: 320px;
          height: 100px;
          top: 15%;
          left: -80px;
          transform: rotate(-30deg);
          animation: floatSway1 8s ease-in-out infinite alternate;
        }
        .float-strip-2 {
          width: 360px;
          height: 120px;
          bottom: 12%;
          right: -100px;
          transform: rotate(-30deg);
          animation: floatSway2 10s ease-in-out infinite alternate;
        }
        .float-strip-3 {
          width: 220px;
          height: 70px;
          top: 35%;
          right: 12%;
          transform: rotate(-30deg);
          animation: floatSway3 7s ease-in-out infinite alternate;
        }

        @keyframes floatSway1 {
          0% { transform: translateY(0) rotate(-30deg); }
          100% { transform: translateY(-20px) rotate(-28deg); }
        }
        @keyframes floatSway2 {
          0% { transform: translateY(0) rotate(-30deg); }
          100% { transform: translateY(-25px) rotate(-32deg); }
        }
        @keyframes floatSway3 {
          0% { transform: translateY(0) rotate(-30deg); }
          100% { transform: translateY(-15px) rotate(-29deg); }
        }
        
        .hero-stat-card:hover {
          transform: translateY(-4px);
          background-color: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.18) !important;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3) !important;
        }
        .clickable-card:hover h4 {
          color: var(--color-blue) !important;
        }
        .clickable-card:hover p {
          color: var(--color-white) !important;
        }
      `}} />
    </section>
  );
};

export default Hero;
