"use client";

import { useState } from 'react';

const phone = '+919523444404';
const whatsapp = '919523444404';
const whatsAppLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent('Hi The BR01 Restaurant, I would like to enquire about reserving a table. Please share the available timings.')}`;
const mapLink = 'https://www.google.com/maps/search/?api=1&query=The+BR01+Restaurant%2C+1st+Floor%2C+Shiv+Laxmi+Market%2C+Dhira+Chak+Main+Road%2C+Anisabad%2C+Patna%2C+Bihar+800014';
const googleReviewsLink = 'https://www.google.com/maps/search/?api=1&query=The+BR01+Restaurant+Anisabad+Patna';
const menuLink = 'https://www.facebook.com/TheBR01Restaurant';

type Dish = { name: string; note: string; image: string; category: 'Veg' | 'Non-veg'; };
const dishes: Dish[] = [
  { name: 'Butter Naan', note: 'A classic table favourite', image: '/images/butter-naan.webp', category: 'Veg' },
  { name: 'Egg Hakka Noodles', note: 'Indo-Chinese favourite', image: '/images/egg-hakka-noodles.webp', category: 'Non-veg' },
  { name: 'Paneer Taka Tak', note: 'Bold, spiced paneer', image: '/images/paneer-taka-tak.webp', category: 'Veg' },
  { name: 'Matar Paneer', note: 'A comforting curry classic', image: '/images/matar-paneer.webp', category: 'Veg' },
  { name: 'Chicken Manchurian', note: 'A saucy Indo-Chinese pick', image: '/images/chicken-manchurian.webp', category: 'Non-veg' },
  { name: 'Paneer Begam Bahar', note: 'Creamy, rich and aromatic', image: '/images/paneer-begam-bahar.webp', category: 'Veg' },
];
const gallery = [
  { image: '/images/restaurant-interior-2.webp', label: 'Warm dining ambience' },
  { image: '/images/restaurant-interior-3.webp', label: 'Family seating' },
  { image: '/images/hero-restaurant.webp', label: 'A cosy evening out' },
  { image: '/images/food-platter.webp', label: 'Made for sharing' },
  { image: '/images/paneer-begam-bahar.webp', label: 'A little something special' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function PhoneIcon() { return <span aria-hidden="true">☎</span>; }
function PinIcon() { return <span aria-hidden="true">⌖</span>; }

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dishFilter, setDishFilter] = useState<'All' | 'Veg' | 'Non-veg'>('All');
  const visibleDishes = dishes.filter((dish) => dishFilter === 'All' || dish.category === dishFilter);

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="The BR01 Restaurant home">
            <img className="brand-logo" src="/images/br01-logo.png" alt="The BR01 Restaurant logo" width="56" height="56" />
            <span className="brand-word"><strong>THE BR01</strong><span>RESTAURANT</span></span>
          </a>
          <nav className={`nav-links ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
            <a href="#top" onClick={() => setMobileOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#menu" onClick={() => setMobileOpen(false)}>Menu</a>
            <a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
            <a href="#reviews" onClick={() => setMobileOpen(false)}>Reviews</a>
            <a href="#visit" onClick={() => setMobileOpen(false)}>Contact</a>
            <a className="nav-cta btn btn-lime" href={whatsAppLink} target="_blank" rel="noreferrer">▦ Reserve a Table</a>
          </nav>
          <div className="header-actions">
            <a className="btn btn-outline" href={`tel:${phone}`}><PhoneIcon /> 095234 44404</a>
            <a className="btn btn-lime" href={whatsAppLink} target="_blank" rel="noreferrer">▦ Reserve a Table</a>
          </div>
          <button className="mobile-menu-button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? '×' : '☰'}</button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">Family-friendly · Anisabad, Patna</div>
            <h1 id="hero-title">The <em>BR01</em><br />Restaurant</h1>
            <p className="hero-tagline">Great food · Good ambience · For every occasion</p>
            <p>Family-friendly Indian restaurant offering flavourful cuisine and a stylish ambience in Anisabad, Patna.</p>
            <div className="hero-meta">
              <span><b className="meta-icon">✦</b> All you can eat</span>
              <span><b className="meta-icon">♨</b> Happy-hour food</span>
              <span><b className="meta-icon">♨</b> Fireplace</span>
              <span><b className="meta-icon">♧</b> Family-friendly</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-lime" href={whatsAppLink} target="_blank" rel="noreferrer">▦ Reserve a Table</a>
              <a className="btn btn-orange" href={whatsAppLink} target="_blank" rel="noreferrer">♜ Order Online</a>
              <a className="btn btn-outline" href={`tel:${phone}`}><PhoneIcon /> Call Now</a>
              <a className="btn btn-whatsapp" href={whatsAppLink} target="_blank" rel="noreferrer">◉ WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-strip" aria-label="Restaurant highlights"><div className="container feature-inner">
        <div className="feature"><span className="symbol">♜</span><span>All you can eat</span></div>
        <div className="feature"><span className="symbol">♨</span><span>Happy-hour food</span></div>
        <div className="feature"><span className="symbol">♨</span><span>Fireplace</span></div>
        <div className="feature"><span className="symbol">♧</span><span>Family-friendly</span></div>
        <div className="feature"><span className="symbol">♡</span><span>Couple & family seats</span></div>
        <div className="feature"><span className="symbol">✧</span><span>For special occasions</span></div>
      </div></section>

      <section className="section menu-section" id="menu">
        <div className="container">
          <div className="section-head">
            <div><div className="section-kicker">A few guest favourites</div><h2>Menu <span className="green">Highlights</span></h2></div>
            <div className="section-head-aside"><p>Explore a few popular dishes across Indian classics and Indo-Chinese favourites. Ask the restaurant for the current menu and prices.</p><a className="section-link" href={menuLink} target="_blank" rel="noreferrer">View Menu <Arrow /></a></div>
          </div>
          <div className="menu-filter" aria-label="Filter menu highlights">
            {(['All', 'Veg', 'Non-veg'] as const).map((filter) => <button className={`filter-btn ${dishFilter === filter ? 'active' : ''}`} key={filter} onClick={() => setDishFilter(filter)} aria-pressed={dishFilter === filter}>{filter === 'All' ? 'All highlights' : filter === 'Veg' ? 'Vegetarian' : 'Non-vegetarian'}</button>)}
          </div>
          <div className="menu-grid">{visibleDishes.map((dish) => <article className="dish-card" key={dish.name}>
            <img className="dish-image" src={dish.image} alt={`${dish.name} — illustrative food photography`} loading="lazy" width="480" height="320" />
            <div className="dish-info"><h3 className="dish-name">{dish.name}</h3><p className="dish-caption">{dish.note}</p></div>
          </article>)}</div>
          <p className="image-note">Food photographs are illustrative concepts, not confirmed photos of the restaurant’s actual dishes.</p>
        </div>
      </section>

      <section className="section ambience-section" id="gallery">
        <div className="container">
          <div className="section-head"><div><div className="section-kicker">Space to settle in</div><h2>Our <span className="green">Ambience</span></h2></div><div className="section-head-aside"><p>A warm concept for family meals, catch-ups and special moments.</p><a className="section-link" href="#about">Explore the restaurant <Arrow /></a></div></div>
          <div className="gallery-grid">{gallery.map((item) => <a className="gallery-card" href={item.image} target="_blank" rel="noreferrer" key={item.label}><img src={item.image} alt={`${item.label} — illustrative restaurant photography`} loading="lazy" width="640" height="420" /><span>{item.label}</span></a>)}</div>
          <p className="image-note dark-note">Interior images are design references. Replace them with approved BR01 Restaurant photographs before launch.</p>
        </div>
      </section>

      <section className="about-proof" id="about">
        <div className="container">
          <div className="about-row">
            <div className="about-intro"><img src="/images/br01-logo.png" alt="BR01 Restaurant logo" width="78" height="78" /><div><h3>About <span>The BR01 Restaurant</span></h3><p>A family-friendly Indian restaurant offering flavourful cuisine and a stylish ambience. A place for family gatherings, friends’ meetups, couple dining and special occasions.</p></div></div>
            <div className="proof-card"><span className="proof-icon">♧</span><strong>Family-Friendly<br />Environment</strong></div>
            <div className="proof-card"><span className="proof-icon">✦</span><strong>Delicious Food<br />& Fresh Flavours</strong></div>
            <div className="proof-card"><span className="proof-icon">♙</span><strong>Good Service<br />& Polite Staff</strong></div>
            <div className="proof-card"><span className="proof-icon">♡</span><strong>Stylish Ambience<br />& Couple Seats</strong></div>
            <div className="proof-card"><span className="proof-icon">◷</span><strong>Affordable<br />Price Range</strong></div>
          </div>

          <div className="lower-grid">
            <section className="reviews" id="reviews" aria-labelledby="reviews-title">
              <div className="reviews-head"><h3 id="reviews-title">Customer Reviews</h3><div className="rating"><span className="star">★</span> 4.5 <small>(290 Reviews)</small></div><a className="section-link" href={googleReviewsLink} target="_blank" rel="noreferrer">View on Google <Arrow /></a></div>
              <div className="review-cards">
                <article className="review-card"><div className="review-stars">★★★★★</div><p>“The quality food park with beautiful ambience, good place for parking too.”</p><small>Review excerpt from supplied listing</small></article>
                <article className="review-card"><div className="review-stars">★★★★★</div><p>“Food is very tasty, Good Service, Overall good experience.”</p><small>Review excerpt from supplied listing</small></article>
                <article className="review-card"><div className="review-stars">★★★★★</div><p>“The price is adjustable but service is not properly entertaining.”</p><small>Review excerpt from supplied listing</small></article>
              </div>
            </section>
            <section className="visit" id="visit" aria-labelledby="visit-title">
              <h3 id="visit-title">⌖ Visit Us</h3>
              <div className="visit-inner"><div><p className="address"><b>⌖</b><span>1st Floor, Shiv Laxmi Market, Dhira Chak Main Road, near Durga Mandir, Dhira Chak, Anisabad, Patna, Bihar 800014</span></p><a className="directions-link" href={mapLink} target="_blank" rel="noreferrer">Get Directions <Arrow /></a><p className="hours"><span className="open-dot" /> Open · Closes 11 pm <small>As shown on the supplied listing</small></p><p className="price-range">₹200–1,000 <small>per person, as reported on listing</small></p></div><iframe className="map-frame" title="Map to The BR01 Restaurant in Anisabad, Patna" loading="lazy" src="https://maps.google.com/maps?q=The%20BR01%20Restaurant%2C%20Anisabad%2C%20Patna&t=&z=14&ie=UTF8&iwloc=&output=embed" referrerPolicy="no-referrer-when-downgrade" /></div>
              <div className="visit-actions"><a className="btn btn-lime" href={`tel:${phone}`}><PhoneIcon /> 095234 44404</a><a className="btn btn-whatsapp" href={whatsAppLink} target="_blank" rel="noreferrer">◉ WhatsApp</a></div>
            </section>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="container">
        <div className="footer-grid">
          <div><a className="footer-brand" href="#top"><img src="/images/br01-logo.png" alt="BR01 logo" width="58" height="58" /><span><strong>THE BR01 RESTAURANT</strong><small>Good food. Good people. Great moments.</small></span></a></div>
          <div><div className="footer-title">QUICK LINKS</div><div className="footer-links"><a href="#top">Home</a><a href="#gallery">Gallery</a><a href="#about">About</a><a href="#reviews">Reviews</a><a href="#menu">Menu</a><a href="#visit">Contact</a></div></div>
          <div className="footer-contact"><div className="footer-title">CONTACT</div><a href={`tel:${phone}`}>☎ &nbsp;095234 44404</a><a href={whatsAppLink} target="_blank" rel="noreferrer">◉ &nbsp;WhatsApp enquiries</a><a href={mapLink} target="_blank" rel="noreferrer">⌖ &nbsp;Anisabad, Patna</a></div>
          <div><div className="footer-title">FOLLOW</div><div className="social-links"><a href={menuLink} target="_blank" rel="noreferrer" aria-label="Facebook page">f</a><a href={googleReviewsLink} target="_blank" rel="noreferrer" aria-label="Google listing">G</a></div></div>
          <div className="footer-cta"><a className="btn btn-outline" href={whatsAppLink} target="_blank" rel="noreferrer">Reserve a table <Arrow /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 The BR01 Restaurant · Concept preview for discussion</span><span>Made for good food and good people.</span></div>
      </div></footer>

      <div className="mobile-sticky" aria-label="Quick contact actions"><a className="btn btn-lime" href={`tel:${phone}`}><PhoneIcon /> Call</a><a className="btn btn-whatsapp" href={whatsAppLink} target="_blank" rel="noreferrer">◉ WhatsApp</a><a className="btn btn-outline" href={mapLink} target="_blank" rel="noreferrer">⌖ Directions</a></div>
    </main>
  );
}
