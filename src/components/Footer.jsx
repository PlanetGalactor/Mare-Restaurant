import React from 'react';
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

const Footer = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-ink)',
        color: '#a8a49c',
        padding: '60px 24px 30px 24px',
        textAlign: 'left',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '32px'
        }}
      >
        {/* Brand Column */}
        <div style={{ flex: '1 1 300px' }}>
          {/* Logo PNG image in footer */}
          <div style={{ height: '55px', marginBottom: '16px' }}>
            <img 
              src="/assets/logos/logo_white_text_colored_strokes.png" 
              alt="Maré Logo" 
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
          <p style={{ fontSize: '14.5px', lineHeight: 1.6, maxWidth: '280px', color: '#8e8a82' }}>
            {t.desc}
          </p>
        </div>

        {/* Info Column */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: 'var(--color-white)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            {t.findUs}
          </h4>
          <p style={{ fontSize: '14.5px', lineHeight: 1.6, marginBottom: '8px', color: '#e8e5df' }}>
            Tv. do Mar 21,<br />
            8600-607 Lagos, Portugal
          </p>
          
          {/* Flags side by side */}
          <div style={{ display: 'flex', gap: '8px', fontSize: '22px', marginTop: '12px' }} title="Portugal & Brazil Live Matches">
            <span>🇵🇹</span>
            <span>🇧🇷</span>
          </div>
        </div>

        {/* Social Column */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: 'var(--color-white)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            {t.follow}
          </h4>
          <a 
            href="https://www.instagram.com/marefooddrinks" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-blue)',
              fontWeight: 700,
              fontSize: '15px'
            }}
          >
            <InstagramIcon size={18} />
            @marefooddrinks
          </a>
          

        </div>
      </div>

      {/* Signature Tapered Footer Rule */}
      <div 
        style={{
          maxWidth: '1200px',
          margin: '50px auto 0 auto'
        }}
      >
        <div 
          style={{
            height: '8px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, var(--color-blue) 0, var(--color-blue) 55%, var(--color-orange) 55%, var(--color-orange) 82%, var(--color-green) 82%)'
          }}
        />
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '14px',
            fontSize: '11px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#8a857c'
          }}
        >
          <span>Maré · food & drinks</span>
          <span>Lagos, Portugal © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
