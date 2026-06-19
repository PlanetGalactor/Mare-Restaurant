import React from 'react';

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

const Footer = () => {
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
          <h3 
            style={{
              fontFamily: 'var(--font-wordmark)',
              fontSize: '38px',
              fontWeight: 600,
              color: 'var(--color-white)',
              marginBottom: '4px',
              lineHeight: 1
            }}
          >
            Maré
          </h3>
          <p 
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '18px',
              color: 'var(--color-blue)',
              marginBottom: '16px'
            }}
          >
            food & drinks
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.6, maxWidth: '280px' }}>
            A relaxed seaside kitchen on the Algarve coast. Fresh ingredients, honest dishes, and great football matches.
          </p>
        </div>

        {/* Info Column */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: 'var(--color-white)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Find Us
          </h4>
          <p style={{ fontSize: '14px', lineHeight: 1.6, marginBottom: '8px' }}>
            Tv. do Mar 21,<br />
            8600-607 Lagos, Portugal
          </p>
          <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
            Located in the central pedestrian area
          </p>
        </div>

        {/* Social Column */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: 'var(--color-white)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Follow
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
          <p style={{ fontSize: '13px', marginTop: '12px', color: '#8a857c' }}>
            No phone number at this time. DM us on Instagram!
          </p>
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
          <span>Lagos, Portugal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
