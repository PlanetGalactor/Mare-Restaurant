import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, GlassWater } from './Icons';
import { translations, menuData } from '../utils/translations';

const Menu = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('food');
  const t = translations[lang].menu;

  // Active categories list based on tab selection
  const categories = menuData[activeTab];
  const col1 = categories.filter((_, idx) => idx % 2 === 0);
  const col2 = categories.filter((_, idx) => idx % 2 !== 0);

  const renderCategoryCard = (cat) => {
    const catTitle = lang === 'pt' ? cat.titlePt : cat.titleEn;
    const catNote = lang === 'pt' ? cat.notePt : cat.noteEn;

    return (
      <div
        key={cat.id}
        style={{
          backgroundColor: 'var(--color-white)',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: 'var(--shadow-subtle)',
          border: '1px solid rgba(43, 42, 40, 0.04)',
          textAlign: 'left'
        }}
        className="menu-category-card"
      >
        {/* Category Header */}
        <div style={{ marginBottom: '24px', borderBottom: '2px solid rgba(59, 193, 218, 0.15)', paddingBottom: '12px' }}>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              letterSpacing: '0.5px'
            }}
          >
            {catTitle}
          </h3>
          {catNote && (
            <p
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--color-orange)',
                textTransform: 'uppercase',
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={11} /> {catNote}
            </p>
          )}
        </div>

        {/* Category Items List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cat.items.map((item, idx) => {
            const itemName = lang === 'pt' ? item.namePt : item.nameEn;
            const itemDesc = lang === 'pt' ? item.descPt : item.descEn;

            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: idx === cat.items.length - 1 ? 'none' : '1px dashed rgba(43, 42, 40, 0.08)',
                  paddingBottom: idx === cat.items.length - 1 ? 0 : '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                  <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--color-ink)' }}>
                    {itemName}
                  </span>
                  
                  {/* Structured Prices Display */}
                  {activeTab === 'wines' ? (
                    <div style={{ display: 'flex', gap: '12px', fontSize: '13.5px', fontWeight: 700, flexShrink: 0 }}>
                      {item.glass && item.glass !== '-' && (
                        <span style={{ color: '#6e6c66' }}>
                          Copo: <span style={{ color: 'var(--color-blue)' }}>{item.glass}</span>
                        </span>
                      )}
                      <span>
                        Garrafa: <span style={{ color: 'var(--color-blue)' }}>{item.bottle}</span>
                      </span>
                    </div>
                  ) : activeTab === 'drinks' && cat.id === 'sangria' ? (
                    <div style={{ display: 'flex', gap: '12px', fontSize: '13.5px', fontWeight: 700, flexShrink: 0 }}>
                      <span>
                        Copo: <span style={{ color: 'var(--color-blue)' }}>{item.glass}</span>
                      </span>
                      <span>
                        1L: <span style={{ color: 'var(--color-blue)' }}>{item.jug}</span>
                      </span>
                    </div>
                  ) : (
                    <span style={{ fontWeight: 700, color: 'var(--color-blue)', fontSize: '16px', flexShrink: 0 }}>
                      {item.price}
                    </span>
                  )}
                </div>

                {/* Description */}
                {itemDesc && (
                  <p style={{ fontSize: '13px', color: '#6e6c66', marginTop: '6px', lineHeight: 1.4, fontStyle: 'italic' }}>
                    ({itemDesc})
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="section-full" style={{ backgroundColor: 'var(--color-blue-tint)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
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
              letterSpacing: '2px',
              color: 'var(--color-ink)'
            }}
          >
            {t.title}
          </h2>
          <p style={{ color: '#656057', fontSize: '15px', marginTop: '10px' }}>
            {t.desc}
          </p>
        </div>

        {/* 21st Dev inspired Sliding / Animated Tabs */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '48px'
          }}
        >
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              gap: '6px',
              padding: '6px',
              borderRadius: '40px',
              backgroundColor: 'var(--color-white)',
              boxShadow: 'var(--shadow-subtle)',
              border: '1px solid rgba(43, 42, 40, 0.05)'
            }}
          >
            {[
              { key: 'food', label: t.tabs.food, icon: <Utensils size={14} /> },
              { key: 'drinks', label: t.tabs.drinks, icon: <GlassWater size={14} /> },
              { key: 'wines', label: t.tabs.wines, icon: <GlassWater size={14} /> }
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    position: 'relative',
                    padding: '12px 28px',
                    borderRadius: '30px',
                    border: 'none',
                    background: 'transparent',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 700,
                    fontSize: '13.5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    color: isActive ? 'var(--color-white)' : 'var(--color-ink)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMenuTabIndicator"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '30px',
                        background: 'var(--color-blue)',
                        zIndex: -1,
                        boxShadow: '0 6px 18px rgba(59, 193, 218, 0.25)'
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Content */}
        <div style={{ minHeight: '400px' }}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Desktop Layout (Two columns masonry) */}
            <div
              className="menu-grid-desktop"
              style={{
                display: 'flex',
                gap: '28px',
                alignItems: 'start'
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {col1.map(renderCategoryCard)}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {col2.map(renderCategoryCard)}
              </div>
            </div>

            {/* Mobile Layout (Single column sequential) */}
            <div
              className="menu-grid-mobile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '28px'
              }}
            >
              {categories.map(renderCategoryCard)}
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .menu-grid-desktop {
          display: flex !important;
        }
        .menu-grid-mobile {
          display: none !important;
        }
        @media (max-width: 900px) {
          .menu-grid-desktop {
            display: none !important;
          }
          .menu-grid-mobile {
            display: flex !important;
          }
        }
        @media (max-width: 600px) {
          .menu-category-card {
            padding: 20px !important;
          }
        }
      `}} />
    </section>
  );
};

export default Menu;
