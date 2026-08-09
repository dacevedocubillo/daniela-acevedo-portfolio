import { useDarkMode } from '../../contexts/DarkModeContext';

import purplePixelBadgeFrame from '../../assets/badges/purple-pixel-badge-frame.png';
import codeMark from '../../assets/magic-shop/code-mark.svg';

import './Certifications.css';

interface CertificationBadge {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  credentialUrl?: string;
}


const BADGES: CertificationBadge[] = [
  {
    id: 'computer-engineering',
    image: codeMark,
    alt: 'Computer Engineering education badge',
    title: 'Computer Engineering',
    subtitle:
      'Universidad Metropolitana Castro Carazo · May 2016 – May 2026 · 180+ academic credits completed',
    credentialUrl: '',
  },
  {
    id: 'utn-web-developer',
    image: codeMark,
    alt: 'Web Developer education badge',
    title: 'Web Developer',
    subtitle:
      'Universidad Técnica Nacional · April 2021 – August 2022 · Front-end and back-end fundamentals',
    credentialUrl: '',
  },
  {
    id: 'utn-english-customer-service',
    image: codeMark,
    alt: 'English and Customer Service education badge',
    title: 'English & Customer Service',
    subtitle:
      'Universidad Técnica Nacional · April 2021 – August 2022 · Professional English, administrative processes and customer service',
    credentialUrl: '',
  },
  {
    id: 'alura-front-end',
    image: codeMark,
    alt: 'Front-end Web Developer education badge',
    title: 'Front-end Web Developer',
    subtitle:
      'Alura · November 2022 – June 2023 · HTML, CSS and JavaScript',
    credentialUrl: '',
  },
];

const Certifications = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      id="certifications"
      className={`magic-badges ${
        isDarkMode ? 'is-dark' : 'is-light'
      }`}
    >
      <div className="magic-badges__shell">
        <header className="magic-badges__heading">
          <span>MAGIC_SHOP.PROFILE</span>

          <h2>Education &amp; Languages</h2>

          <p>
           Academic training, technical certifications and communication skills that support my growth as a software developer. Native Spanish speaker with professional working proficiency in English.
          </p>
        </header>

        <div className="magic-badges__grid">
          {BADGES.map((badge, index) => {
            const badgeContent = (
              <article className="magic-badge">
                <div className="magic-badge__emblem">
                  <img
                    src={purplePixelBadgeFrame}
                    alt=""
                    aria-hidden="true"
                    className="magic-badge__frame"
                    draggable={false}
                  />

                  <div className="magic-badge__credential">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="magic-badge__credential-image"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>

                <span className="magic-badge__number">
                  BADGE {String(index + 1).padStart(2, '0')} · UNLOCKED
                </span>

                <h3>{badge.title}</h3>

                <p>{badge.subtitle}</p>
              </article>
            );

            if (badge.credentialUrl) {
              return (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magic-badge__link"
                  aria-label={`View ${badge.title} credential`}
                >
                  {badgeContent}
                </a>
              );
            }

            return (
              <div key={badge.id}>
                {badgeContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
