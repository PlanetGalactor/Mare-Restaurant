import React from 'react';
import BrushDivider from './BrushDivider';

const About = () => {
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
            Welcome to Maré
          </span>
          <h2 
            style={{
              fontSize: '36px',
              fontWeight: 800,
              color: 'var(--color-ink)',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Good Food. Good Drinks. Great Atmosphere.
          </h2>

          <p 
            style={{
              fontSize: '17px',
              color: '#55524c',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}
          >
            Nestled in the middle of Lagos’ lively walking streets, Maré is your perfect sunny retreat. 
            Enjoy our fresh, honest dishes and refreshing drinks in a warm, laid-back atmosphere.
          </p>

          <p 
            style={{
              fontSize: '17px',
              color: '#55524c',
              lineHeight: '1.8',
              marginBottom: '24px'
            }}
          >
            We are centrally located in the heart of town, making it easy to pull up a chair, relax, and soak up the Algarve summer. 
            Sports fans, pull up a seat—we always show the best <strong>Brazil and Portugal football matches</strong> live!
          </p>

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
            src="/assets/photos/36E7C77C-53CF-46ED-8188-991BC5B34670.JPG" 
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
