import React from 'react';

// Common SVG props helper
const svgProps = (size, color = 'currentColor', strokeWidth = 2) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: size || 24,
  height: size || 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  strokeWidth: strokeWidth,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});

export const ChevronDown = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Sparkles = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
  </svg>
);

export const Utensils = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

export const GlassWater = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
    <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
  </svg>
);

export const Heart = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const MessageCircle = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export const MapPin = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Euro = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <path d="M4 10h12" />
    <path d="M4 14h9" />
    <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12a7.9 7.9 0 0 0 7.8 8 7.7 7.7 0 0 0 5.2-2" />
  </svg>
);

export const Star = ({ size, color, strokeWidth, ...props }) => (
  <svg {...svgProps(size, color, strokeWidth)} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
