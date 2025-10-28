import React from 'react';
import crea from '../imagesadjusted/crea.png';
import seloQuality from '../imagesadjusted/seloQuality.png';
import seloQualityInstitute from '../imagesadjusted/seloQualityInstitute.png';
import resportagem from '../imagesadjusted/REPORTAGEM.png';

export function CertificationsSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Registros, Certificações e Reconhecimentos
          <div className="w-16 h-1 bg-red-600 mx-auto mt-2" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-2 gap-6 md:gap-10 place-items-center">
            <div className="flex items-center justify-center">
              <img
                src={crea}
                alt="Certificação CREA"
                className="w-36 md:w-64 lg:w-72 h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={seloQuality}
                alt="Selo Quality"
                className="w-36 md:w-64 lg:w-72 h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={seloQualityInstitute}
                alt="Latin American Quality Institute"
                className="w-36 md:w-64 lg:w-72 h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://www.laqi.org/magazine/236/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
                aria-label="Abrir reportagem LAQI em nova guia"
              >
                <img
                  src={resportagem}
                  alt="Reportagem Quality Magazine"
                  className="w-36 md:w-64 lg:w-72 h-auto object-contain"
                />
              </a>
            </div>
          </div>

          <div className="w-full min-h-[300px] bg-gray-100 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-4 text-center md:text-left">
              Entrevista com CEO Idealizador da Engetrainer
            </h3>
            <div className="w-full aspect-video bg-black/5 rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/h9l6e6eMjXg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
