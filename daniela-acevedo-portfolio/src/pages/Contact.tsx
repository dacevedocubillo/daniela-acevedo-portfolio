import { Mail, Github, Linkedin } from 'lucide-react';
import { useThemeColors } from '../hooks/useThemeColors';
import { socialLinks } from '../config/socialLinks';
import './Contact.css';

const Contact = () => {
  const themeColors = useThemeColors();

  return (
    <section id="contact" aria-label="Contact section" className="contact-page contact-page--light transition-colors duration-300 relative overflow-hidden">
      <div className="contact-page__stars" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span></div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10 contact-page__content">
        {/* Contact Header */}
        <header className="text-center contact-page__header">
          <span className="contact-page__eyebrow">OPEN TO OPPORTUNITIES · COSTA RICA</span>
          <h1>Let's Connect!</h1>
          <p>
            I am open to Junior Software Developer opportunities where I can contribute, learn and grow with a collaborative team.
          </p>
        </header>

        {/* Contact Cards */}
        <section className="contact-page__grid" aria-label="Contact methods">
          
          {/* Email Card */}
          <article className="contact-method" aria-labelledby="email-heading">
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
            </div>
            <h3 id="email-heading" className="text-xl font-semibold mb-2" style={{ color: themeColors.text.primary }}>Email</h3>
            {socialLinks.email ? <>
              <a href={`mailto:${socialLinks.email}`} aria-label={`Send email to ${socialLinks.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80" style={{ backgroundColor: themeColors.interactive.primary, color: themeColors.text.pink }}>Send Email</a>
              <p className="text-xs mt-3" style={{ color: themeColors.text.tertiary }}>{socialLinks.display.email}</p>
            </> : <p className="contact-method__pending"><span /> Available on request</p>}
          </article>

          {/* GitHub Card */}
          <article className="contact-method" aria-labelledby="github-heading">
            <div className="flex justify-center mb-4">
              <Github className="h-12 w-12" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
            </div>
            <h3 id="github-heading" className="text-xl font-semibold mb-2" style={{ color: themeColors.text.primary }}>GitHub</h3>
            {socialLinks.github ? <><a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub profile at ${socialLinks.display.github} (opens in new tab)`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80"
              style={{
                backgroundColor: themeColors.interactive.primary,
                color: themeColors.text.pink
              }}
            >
              View Profile
            </a>
            <p className="text-xs mt-3" style={{ color: themeColors.text.tertiary }}>{socialLinks.display.github}</p></> : <p className="contact-method__pending"><span /> Profile available soon</p>}
          </article>

          {/* LinkedIn Card */}
          <article className="contact-method" aria-labelledby="linkedin-heading">
            <div className="flex justify-center mb-4">
              <Linkedin className="h-12 w-12" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
            </div>
            <h3 id="linkedin-heading" className="text-xl font-semibold mb-2" style={{ color: themeColors.text.primary }}>LinkedIn</h3>
            {socialLinks.linkedin ? <><a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect on LinkedIn at ${socialLinks.display.linkedin} (opens in new tab)`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80"
              style={{
                backgroundColor: themeColors.interactive.primary,
                color: themeColors.text.pink
              }}
            >
              Connect
            </a>
            <p className="text-xs mt-3" style={{ color: themeColors.text.tertiary }}>{socialLinks.display.linkedin}</p></> : <p className="contact-method__pending"><span /> Profile available soon</p>}
          </article>

        </section>
      </div>
    </section>
  );
};

export default Contact;
