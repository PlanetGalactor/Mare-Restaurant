import React from 'react';
import BrushDivider from './BrushDivider';
import { translations } from '../utils/translations';

const About = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }}
      >
        {/* Text Column */}
        <div style={{ textAlign: 'left' }}>
          <span 
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '28px',
              color: 'var(--color-blue)',
              display: 'block',
              marginBottom: '8px'
            }}
          >
            {t.subtitle}
          </span>
          <h2 
            style={{
              fontSize: '32px',
              fontWeight: 800,
              color: 'var(--color-ink)',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              lineHeight: 1.3
            }}
          >
            {t.title}
          </h2>

          <p 
            style={{
              fontSize: '16px',
              color: '#55524c',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}
          >
            {t.p1}
          </p>

          <p 
            style={{
              fontSize: '16px',
              color: '#55524c',
              lineHeight: '1.8',
              marginBottom: '24px'
            }}
          >
            {t.p2}
          </p>

          {/* Football Promo Box */}
          <div
            style={{
              backgroundColor: 'var(--color-blue-tint)',
              borderLeft: '4px solid var(--color-orange)',
              padding: '16px 20px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '24px'
            }}
          >
            <h4
              style={{
                fontSize: '15px',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: 'var(--color-ink)',
                marginBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              ⚽ {t.footballTitle}
            </h4>
            <p style={{ fontSize: '14.5px', color: '#55524c', lineHeight: 1.6 }}>
              {t.footballText}
            </p>
          </div>

          {/* Accent Divider */}
          <div style={{ margin: '32px 0 0 0' }}>
            <BrushDivider height="80px" className="about-divider" />
          </div>
        </div>

        {/* Image Column */}
        <div 
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-subtle)',
            height: '450px'
          }}
        >
          <img 
            src="/assets/photos/60303E26-56C9-4A09-808D-25266615EA8A.JPG" 
            alt="Maré table setup" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          {/* Subtle overlay accent */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(59, 193, 218, 0.15), transparent)'
            }}
          />
        </div>
      </div>

      {/* Responsive adjustments block */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          #about > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          #about img {
            height: 350px !important;
          }
        }
      `}} />
    </section>
  );
};

export default About;
