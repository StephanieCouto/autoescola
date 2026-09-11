'use client';

import { useState } from 'react';
import { testimonials } from '../data/site';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <div className="testimonial-box">
      <article key={active} className="testimonial">
        <div className="quote-icon">“</div>
        <div className="stars">★★★★★</div>
        <p>{item.text}</p>
        <strong>{item.name}</strong>
        <span>{item.type}</span>
        <img src={item.image} alt={item.name} loading="lazy" />
      </article>
      <div className="dots">
        {testimonials.map((_, i) => <button key={i} className={i === active ? 'active' : ''} onClick={() => setActive(i)} aria-label={`Depoimento ${i + 1}`} />)}
      </div>
    </div>
  );
}
