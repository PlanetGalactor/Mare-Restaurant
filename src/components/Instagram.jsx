import React from 'react';
import { Heart, MessageCircle } from './Icons';
import { translations } from '../utils/translations';

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instagramPhotos = [
  { src: '/assets/photos/8BD88F31-A523-4AE5-9862-990698073211.JPG', likes: '124', comments: '12' },
  { src: '/assets/photos/9F913858-C20E-48AA-9A80-C6B5818346C6.JPG', likes: '98', comments: '8' },
  { src: '/assets/photos/CE6131E7-1CB2-4F0A-88A2-73804FDDC926.JPG', likes: '156', comments: '21' },
  { src: '/assets/photos/5D824CEA-B89C-4DF7-8A20-8EC950C6508C.JPG', likes: '112', comments: '15' }
];

const Instagram = ({ lang }) => {
  const t = translations[lang].instagram;

  return (
    <section id="instagram" className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
      {/* Title */}
      <div className="text-center" style={{ marginBottom: '40px' }}>
        <InstagramIcon size={32} style={{ color: 'var(--color-blue)', marginBottom: '12px' }} />
        <span 
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '30px',
            color: 'var(--color-orange)',
            display: 'block',
            marginBottom: '4px'
          }}
        >
          {t.subtitle}
        </span>
        <h2 
          style={{
            fontSize: '36px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--color-ink)'
          }}
        >
          {t.title}
        </h2>
        <a 
          href="https://www.instagram.com/marefooddrinks" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--color-blue)',
            marginTop: '10px',
            display: 'inline-block'
          }}
        >
          {t.handle}
        </a>
      </div>

      {/* Grid */}
      <div 
        className="insta-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }}
      >
        {instagramPhotos.map((photo, idx) => (
          <a 
            key={idx}
            href="https://www.instagram.com/marefooddrinks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="insta-item"
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'block',
              aspectRatio: '1',
              boxShadow: 'var(--shadow-subtle)',
              cursor: 'pointer'
            }}
          >
            {/* Image */}
            <img 
              src={photo.src} 
              alt={`Instagram post ${idx + 1}`} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform var(--transition-speed)'
              }}
            />

            {/* Hover overlay */}
            <div 
              className="insta-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(43, 42, 40, 0.65)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                opacity: 0,
                transition: 'opacity var(--transition-speed)',
                color: 'var(--color-white)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
                <Heart size={20} fill="var(--color-white)" /> {photo.likes}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
                <MessageCircle size={20} fill="var(--color-white)" /> {photo.comments}
              </span>
            </div>
          </a>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .insta-item:hover img {
          transform: scale(1.05);
        }
        .insta-item:hover .insta-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 900px) {
          .insta-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}} />
    </section>
  );
};

export default Instagram;
