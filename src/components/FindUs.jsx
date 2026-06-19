import React from 'react';
import { MapPin, Clock, Euro, Star } from './Icons';
import { translations } from '../utils/translations';

const FindUs = ({ lang }) => {
  const t = translations[lang].findUs;

  return (
    <section id="find-us" className="section-full" style={{ backgroundColor: 'var(--color-blue-tint)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          className="find-us-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '48px',
            alignItems: 'center'
          }}
        >
        {/* Info Column */}
        <div style={{ textAlign: 'left' }}>
          <span 
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '28px',
              color: 'var(--color-orange)',
              display: 'block',
              marginBottom: '8px'
            }}
          >
            {t.subtitle}
          </span>
          <h2 
            style={{
              fontSize: '36px',
              fontWeight: 800,
              color: 'var(--color-ink)',
              marginBottom: '32px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            {t.title}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Address */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div 
                style={{
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-blue)',
                  padding: '12px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ink)' }}>
                  {t.locationLabel}
                </h4>
                <p style={{ color: '#55524c', marginTop: '4px', fontSize: '15px' }}>
                  {t.locationValue}
                </p>
                <p style={{ color: '#88857e', fontSize: '13px', marginTop: '2px', fontStyle: 'italic' }}>
                  {t.locationDesc}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div 
                style={{
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-blue)',
                  padding: '12px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ink)' }}>
                  {t.hoursLabel}
                </h4>
                <p style={{ color: '#55524c', marginTop: '4px', fontSize: '15px' }}>
                  {t.hoursValue}
                </p>
              </div>
            </div>

            {/* Price Range */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div 
                style={{
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-blue)',
                  padding: '12px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <Euro size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ink)' }}>
                  {t.priceLabel}
                </h4>
                <p style={{ color: '#55524c', marginTop: '4px', fontSize: '15px' }}>
                  {t.priceValue}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div 
                style={{
                  backgroundColor: 'var(--color-white)',
                  color: 'var(--color-orange)',
                  padding: '12px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <Star size={22} fill="var(--color-orange)" />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ink)' }}>
                  {t.ratingLabel}
                </h4>
                <p style={{ color: '#55524c', marginTop: '4px', fontSize: '15px' }}>
                  <strong>4.9⭐</strong> {t.ratingValue}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div 
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-subtle)',
            height: '420px',
            border: '8px solid var(--color-white)'
          }}
        >
          <iframe 
            title="Maré Location Map"
            src="https://maps.google.com/maps?q=Tv.%20do%20Mar%2021,%208600-607%20Lagos,%20Portugal&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .find-us-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #find-us iframe {
            height: 350px !important;
          }
        }
      `}} />
    </section>
  );
};

export default FindUs;
