import { ArrowDown, BriefcaseBusiness, Code2, GraduationCap, Mail } from 'lucide-react';

import { portfolio } from '../../config/portfolio';
import './SimpleHero.css';

const scrollTo = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const About = () => (
  <section id="about" className="simple-hero" aria-labelledby="hero-title">
    <div className="simple-hero-glow simple-hero-glow-one" aria-hidden="true" />
    <div className="simple-hero-glow simple-hero-glow-two" aria-hidden="true" />
    <div className="purple-sky" aria-hidden="true">
      <i className="purple-star star-one">✦</i>
      <i className="purple-star star-two">✧</i>
      <i className="purple-star star-three">✦</i>
      <i className="purple-star star-four">✧</i>
      <span className="pixel-orbit orbit-one" />
      <span className="pixel-orbit orbit-two" />
    </div>

    <div className="simple-hero-shell">
      <div className="simple-hero-copy">
        <span className="chapter-label">CHAPTER 01 · MY PORTFOLIO</span>
        <span className="simple-hero-status">
          <span aria-hidden="true" /> Available for junior developer opportunities
        </span>

        <p className="simple-hero-kicker">Hello, I'm</p>
        <h1 id="hero-title">{portfolio.name}</h1>
        <h2>{portfolio.role}</h2>

        <p className="simple-hero-lead">
          I build clear, reliable web applications with C#, .NET, SQL Server and React.
          I combine software development skills with hands-on experience solving real user problems.
        </p>

        <div className="simple-hero-actions">
          <button type="button" className="simple-primary-action" onClick={() => scrollTo('projects')}>
            View my projects <ArrowDown size={17} aria-hidden="true" />
          </button>
          <button type="button" className="simple-secondary-action" onClick={() => scrollTo('contact')}>
            Contact me <Mail size={17} aria-hidden="true" />
          </button>
        </div>

        <p className="simple-hero-note">Based in Costa Rica · Graduating in October 2026</p>
      </div>

      <aside className="simple-profile-card" aria-label="Professional summary">
        <div className="simple-card-toolbar">
          <span /><span /><span />
          <small>daniela.profile</small>
        </div>

        <div className="simple-card-content">
          <div className="magic-card-stamp" aria-hidden="true">
            <span>✦</span>
            <small>BUILD<br />CREATE<br />GROW</small>
          </div>
          <div className="simple-avatar" aria-hidden="true">DA</div>
          <div>
            <p className="simple-card-label">CURRENT FOCUS</p>
            <h3>Building useful software</h3>
            <p>From database-backed systems to responsive interfaces.</p>
          </div>

          <ul className="simple-highlight-list">
            <li><Code2 size={18} /><span><strong>Development</strong>C# · .NET · React · SQL</span></li>
            <li><BriefcaseBusiness size={18} /><span><strong>Experience</strong>2+ years in technical support</span></li>
            <li><GraduationCap size={18} /><span><strong>Education</strong>Computer Engineering student</span></li>
          </ul>

          <div className="purple-progress" aria-label="Current journey: developer in progress">
            <span><b>DEVELOPER JOURNEY</b><small>IN PROGRESS</small></span>
            <div><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
        </div>
      </aside>
    </div>

    <button type="button" className="simple-scroll-cue" onClick={() => scrollTo('projects')}>
      Explore portfolio <ArrowDown size={15} aria-hidden="true" />
    </button>
  </section>
);

export default About;
