import React, { useState } from 'react';

import { Sparkles, Utensils, GlassWater } from './Icons';

const menuData = {
  starters: {
    title: "Starters",
    items: [
      { name: "Vegetable Soup", price: "3.50 €" },
      { name: "Fish Soup", price: "4.50 €" },
      { name: "Stick Mozzarella", price: "7.50 €" },
      { name: "French Fries", price: "6.50 €" },
      { name: "Sautéed Mushrooms", price: "6.00 €" }
    ]
  },
  salads: {
    title: "Salads",
    items: [
      { name: "Mixed", price: "4.50 €" },
      { name: "Caprese", price: "13.00 €" },
      { name: "Tuna", price: "14.50 €" },
      { name: "Caesar", price: "12.00 €" },
      { name: "Tropical with Shrimp", price: "14.50 €" },
      { name: "Chicken and Pineapple", price: "14.50 €" }
    ]
  },
  pastas: {
    title: "Pastas",
    items: [
      { name: "Linguine Carbonara", price: "10.50 €" },
      { name: "Spaghetti Bolognese", price: "10.50 €" },
      { name: "Linguine with Shrimp", price: "11.50 €" },
      { name: "Vegetarian Linguine", price: "9.50 €" }
    ]
  },
  omelets: {
    title: "Omelets",
    note: "Served with French Fries and Salad",
    items: [
      { name: "Simple", price: "8.50 €" },
      { name: "Cheese", price: "10.00 €" },
      { name: "Cheese and Ham", price: "11.50 €" },
      { name: "Mushrooms", price: "12.50 €" },
      { name: "Shrimp", price: "13.50 €" }
    ]
  },
  meat: {
    title: "Meat",
    note: "Served with French Fries, Beans and Rice",
    items: [
      { name: "Rump Steak América do Sul", price: "19.00 €" },
      { name: "Chicken Steak (Breast)", price: "13.50 €" },
      { name: "Black Pig Secrets", price: "15.90 €" },
      { name: "Beef Steak", price: "14.50 €" },
      { name: "Homemade Sausage (Black Pig)", price: "17.50 €" }
    ]
  },
  baguettes: {
    title: "Baguettes",
    items: [
      { name: "Cheese and Ham", price: "5.50 €" },
      { name: "Tuna", description: "Lettuce, Tomato, Boiled Egg", price: "8.50 €" },
      { name: "Chicken", description: "Lettuce, Tomato, Boiled Egg", price: "8.50 €" },
      { name: "Vegetarian", description: "Fresh Mozzarella, Arugula, Dried Tomato and Pesto", price: "9.00 €" }
    ]
  },
  special_baguettes: {
    title: "Special Baguettes",
    note: "Served with French Fries",
    items: [
      { name: "Shredded Beef Rib (5h Oven)", price: "14.00 €" },
      { name: "Homemade Sausage (Black Pig)", price: "11.90 €" }
    ]
  },
  burgers: {
    title: "Burgers",
    note: "Served with French Fries",
    items: [
      { name: "Simple", price: "10.50 €" },
      { name: "Double", price: "12.50 €" },
      { name: "Salad", price: "12.00 €" },
      { name: "Bacon", price: "13.00 €" },
      { name: "Egg", price: "12.00 €" },
      { name: "Chicken", price: "13.00 €" },
      { name: "Vegetarian", price: "10.50 €" }
    ]
  },
  tapas: {
    title: "Tapas",
    items: [
      { name: "Steak on Bread", price: "6.00 €" },
      { name: '"À Guilho" Shrimp', price: "16.00 €" },
      { name: '"Panceta" (Crackling)', price: "9.50 €" },
      { name: "French Fries with Cheese and Bacon", price: "8.50 €" },
      { name: "Octopus Salad", price: "10.50 €" },
      { name: '"Pica-Pau" Portuguese Beef Snack', price: "10.50 €" },
      { name: "Fried Tilapia Strips", price: "14.50 €" }
    ]
  },
  children: {
    title: "Children's Menu",
    note: "Served with French Fries",
    items: [
      { name: "Nuggets, Fish Fingers, or Stick Mozzarella", price: "9.00 €" }
    ]
  },
  desserts: {
    title: "Desserts",
    items: [
      { name: "Petit Gâteau with Ice Cream", price: "6.50 €" },
      { name: "Nutella Crepe with Ice Cream", price: "7.50 €" },
      { name: "Almond Pie", price: "4.50 €" }
    ]
  },
  wines: {
    title: "Wines",
    isWines: true,
    categories: [
      {
        subTitle: "From HOUSE",
        items: [
          { name: "Vale do Cesto | Red", description: "Smooth. Fruity and Easy to Drink. Goes down Beautifully", glass: "3.50 €", bottle: "14.50 €" },
          { name: "Vale do Cesto | White", description: "Light, Fresh and Super Pleasant. Perfect for Relaxing", glass: "3.50 €", bottle: "14.50 €" },
          { name: "Aviz | Red", description: "Full-bodied, Warm and Full of Fruit. Pure Comfort", glass: "3.75 €", bottle: "15.00 €" },
          { name: "Aviz | White", description: "Aromatic, Balanced and Refreshing. Too Tasty", glass: "3.75 €", bottle: "15.00 €" },
          { name: "Vilacetinho DOC", description: "Light, Youthful and Fruity. Refreshing before you know it. It's good", glass: "3.75 €", bottle: "15.00 €" }
        ]
      },
      {
        subTitle: "ALGARVE SUN in a GLASS",
        items: [
          { name: "Barranco Longo Private Selection | Red", description: "Full-bodied, Elegant and Striking. Strong Presence", glass: "-", bottle: "18.00 €" },
          { name: "Barranco Longo Grande Escolha | White", description: "Fresh, Balanced and Vibrant. Show de Bola", glass: "-", bottle: "18.00 €" }
        ]
      },
      {
        subTitle: "ELEGANCE of the DÃO",
        items: [
          { name: "Alva Magna | Red", description: "Intense and with Live Fruit. To Enjoy Without Haste", glass: "-", bottle: "15.00 €" }
        ]
      },
      {
        subTitle: "DOURO that ENCHANTS",
        items: [
          { name: "Quinta da Pedra Alta Pedra a Pedra | White", description: "Fresh, Mineral and Elegant. Surpreende no Gole", glass: "5.90 €", bottle: "21.00 €" },
          { name: "Quinta da Pedra Alta Pedra a Pedra | Red", description: "Fruity, Balanced and Smooth. Round", glass: "5.90 €", bottle: "21.00 €" },
          { name: "Q.P.A. | Rosé", description: "Light, Fresh and Full of Charm. The Face of Summer", glass: "6.90 €", bottle: "26.00 €" },
          { name: "Quinta da Pedra Alta Reserva | Red", description: "Full-bodied, Intense and Long. For Those who Really Like", glass: "-", bottle: "49.00 €" }
        ]
      },
      {
        subTitle: "TOURIST",
        items: [
          { name: "Bodega Garzón Tannat de Corte (Uruguay)", description: "Powerful, Intense and Striking. Strong Grip", glass: "-", bottle: "29.00 €" },
          { name: "Romance Château de Berne (France)", description: "Delicate, Fresh and Elegant. Light and Chic", glass: "7.50 €", bottle: "24.00 €" },
          { name: "Inspiration Côtes de Provence (France)", description: "Light, Thin and Refreshing. Pure Elegance", glass: "-", bottle: "35.00 €" }
        ]
      },
      {
        subTitle: "For TOASTING and CONVERSATION",
        items: [
          { name: "Prosecco Ruggeri Argeo (Italy)", description: "Light, Fresh and Vibrant. Fun Bubbles", glass: "4.90 €", bottle: "19.00 €" }
        ]
      }
    ]
  }
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('starters');

  const categoryKeys = Object.keys(menuData);

  return (
    <section id="menu" className="section" style={{ backgroundColor: 'var(--color-blue-tint)' }}>
      {/* Title */}
      <div className="text-center" style={{ marginBottom: '40px' }}>
        <span 
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '32px',
            color: 'var(--color-orange)',
            display: 'block',
            marginBottom: '4px'
          }}
        >
          fresh from the Algarve
        </span>
        <h2 
          style={{
            fontSize: '38px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--color-ink)'
          }}
        >
          Our Menu
        </h2>
        <p style={{ color: '#656057', fontSize: '15px', marginTop: '10px' }}>
          Explore our locally-sourced food, tapas, and carefully curated Portuguese wines.
        </p>
      </div>

      {/* Tabs Container */}
      <div 
        className="tabs-nav-container"
        style={{
          display: 'flex',
          overflowX: 'auto',
          paddingBottom: '16px',
          gap: '12px',
          justifyContent: 'flex-start',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          marginBottom: '40px'
        }}
      >
        {categoryKeys.map((key) => {
          const isActive = activeTab === key;
          const isWineTab = key === 'wines';
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                flex: '0 0 auto',
                padding: '12px 24px',
                borderRadius: '30px',
                border: 'none',
                fontFamily: 'var(--font-primary)',
                fontWeight: 700,
                fontSize: '13.5px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                backgroundColor: isActive ? 'var(--color-blue)' : 'var(--color-white)',
                color: isActive ? 'var(--color-white)' : 'var(--color-ink)',
                boxShadow: isActive ? 'var(--shadow-medium)' : 'var(--shadow-subtle)',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {isWineTab ? <GlassWater size={15} /> : <Utensils size={15} />}
              {menuData[key].title}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div style={{ minHeight: '350px' }}>
        <div className="menu-tab-content animate-fade-in" key={activeTab}>
            {/* Category Note */}
            {menuData[activeTab].note && (
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(230, 163, 74, 0.12)',
                  color: 'var(--color-orange)',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  marginBottom: '32px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                <Sparkles size={14} />
                {menuData[activeTab].note}
              </div>
            )}

            {/* Standard Menu Layout */}
            {!menuData[activeTab].isWines ? (
              <div 
                className="menu-items-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '24px 48px',
                  textAlign: 'left'
                }}
              >
                {menuData[activeTab].items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="menu-item-row"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderBottom: '1px dashed rgba(43, 42, 40, 0.12)',
                      paddingBottom: '14px',
                      transition: 'transform var(--transition-speed)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontWeight: 700, fontSize: '17px', color: 'var(--color-ink)' }}>
                        {item.name}
                      </span>
                      <span style={{ fontWeight: 700, fontStyle: 'italic', color: 'var(--color-blue)', fontSize: '17px' }}>
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <span style={{ fontSize: '13px', color: '#6e6c66', marginTop: '4px', fontStyle: 'italic' }}>
                        ({item.description})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* Wine Menu Layout */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', textAlign: 'left' }}>
                {menuData.wines.categories.map((subCat, sIdx) => (
                  <div key={sIdx} className="wine-subcat-section">
                    <h3 
                      style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: 'var(--color-orange)',
                        borderBottom: '2px solid var(--color-orange)',
                        paddingBottom: '8px',
                        marginBottom: '20px'
                      }}
                    >
                      {subCat.subTitle}
                    </h3>
                    <div 
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '24px 48px'
                      }}
                      className="wine-items-grid"
                    >
                      {subCat.items.map((item, idx) => (
                        <div 
                          key={idx}
                          className="menu-item-row"
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderBottom: '1px dashed rgba(43, 42, 40, 0.12)',
                            paddingBottom: '14px'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <span style={{ fontWeight: 700, fontSize: '16.5px', color: 'var(--color-ink)' }}>
                              {item.name}
                            </span>
                            <div style={{ display: 'flex', gap: '16px', fontWeight: 700, fontSize: '14.5px' }}>
                              {item.glass && item.glass !== '-' && (
                                <span style={{ color: 'var(--color-ink)' }}>
                                  Glass: <span style={{ color: 'var(--color-blue)' }}>{item.glass}</span>
                                </span>
                              )}
                              <span>
                                Bottle: <span style={{ color: 'var(--color-blue)' }}>{item.bottle}</span>
                              </span>
                            </div>
                          </div>
                          {item.description && (
                            <span style={{ fontSize: '13px', color: '#6e6c66', marginTop: '6px', lineHeight: '1.4' }}>
                              {item.description}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .tabs-nav-container::-webkit-scrollbar {
          display: none !important;
        }
        @media (max-width: 800px) {
          .menu-items-grid, .wine-items-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}} />
    </section>
  );
};

export default Menu;
