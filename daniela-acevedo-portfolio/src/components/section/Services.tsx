import { Code2, Globe2, Wrench } from 'lucide-react';

const services = [
  { icon: Globe2, title: 'Business Websites', text: 'Responsive and professional websites for small businesses and independent professionals, designed to work beautifully across desktop and mobile.' },
  { icon: Code2, title: 'Web Development', text: 'Custom web solutions using React, TypeScript, JavaScript, HTML, CSS and modern development practices.' },
  { icon: Wrench, title: 'Website Maintenance', text: 'Content updates, responsive improvements, bug fixes and ongoing improvements for existing websites.' },
];

const Services = () => (
  <section id="services" className="portfolio-services" aria-labelledby="services-title">
    <div className="portfolio-services-inner">
      <p className="portfolio-services-eyebrow">FREELANCE SERVICES</p>
      <h2 id="services-title">How I Can Help</h2>
      <p className="portfolio-services-lead">I build practical, user-friendly web experiences for small businesses and professionals.</p>
      <div className="portfolio-services-grid">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="portfolio-service-card" key={title}>
            <span className="portfolio-service-icon"><Icon aria-hidden="true" /></span>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
      <a className="portfolio-services-cta" href="#contact">Work With Me</a>
    </div>
  </section>
);

export default Services;
