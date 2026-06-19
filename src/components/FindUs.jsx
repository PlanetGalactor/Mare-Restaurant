import React from 'react';
import { MapPin, Clock, Euro, Star } from './Icons';

const FindUs = () => {
  return (
    <section id="find-us" className="section" style={{ backgroundColor: 'var(--color-blue-tint)' }}>
      <div 
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
            Visit us in Lagos
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
            Where to find us
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
                  Our Location
                </h4>
                <p style={{ color: '#55524c', marginTop: '4px', fontSize: '15px' }}>
                  Tv. do Mar 21, 8600-607 Lagos, Portugal
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
                  Hours
                </h4>
                <p style={{ color: '#55524c', marginTop: '4px', fontSize: '15px' }}>
                  Daily: 12:00 PM – Midnight (12:00 AM)
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
                  Average Price
                </h4>
                <p style={{ color: '#55524c', marginTop: '4px', fontSize: '15px' }}>
                  €15 – €20 per person
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
                  Google Rating
                </h4>
                <p style={{ color: '#55524c', marginTop: '4px', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <strong>4.9⭐</strong> (66 reviews on Google Maps)
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

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          #find-us > div {
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
