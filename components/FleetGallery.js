'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FleetGallery({ fleet }) {
  const [selectedFleet, setSelectedFleet] = useState(null);

  useEffect(() => {
    if (!selectedFleet) return undefined;

    const closeOnEscape = event => {
      if (event.key === 'Escape') setSelectedFleet(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedFleet]);

  return (
    <>
      <div className="fleet-grid">
        {fleet.map(number => (
          <button
            key={number}
            className="fleet-photo"
            type="button"
            onClick={() => setSelectedFleet(number)}
            aria-label={`Abrir foto da frota ${number}`}
          >
            <Image
              src={`https://www.autoescolacatarina.com.br/img/fotos/frota-${number}-g.jpg`}
              alt={`Auto Escola Catarina - Frota ${number}`}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              quality={90}
              className="fleet-image"
            />
          </button>
        ))}
      </div>

      {selectedFleet && (
        <div
          className="fleet-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada da frota ${selectedFleet}`}
          onClick={() => setSelectedFleet(null)}
        >
          <div className="fleet-lightbox-content" onClick={event => event.stopPropagation()}>
            <button
              className="fleet-lightbox-close"
              type="button"
              onClick={() => setSelectedFleet(null)}
              aria-label="Fechar imagem"
            >
              ×
            </button>
            <Image
              src={`https://www.autoescolacatarina.com.br/img/fotos/frota-${selectedFleet}-g.jpg`}
              alt={`Auto Escola Catarina - Frota ${selectedFleet}`}
              width={1000}
              height={650}
              sizes="(max-width: 700px) calc(100vw - 32px), 900px"
              quality={90}
              className="fleet-lightbox-image"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
