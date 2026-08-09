import { type CSSProperties } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import './Experience.css';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const experiences = [
    {
      title: 'Service Desk Engineer',
      company: 'IT Support Experience',
      location: 'Costa Rica',
      period: '2 years 8 months',
      description: [
        'Diagnosed and resolved hardware, software, Windows, Microsoft 365 and connectivity incidents.',
        'Managed and prioritized support tickets while working within service-level expectations.',
        'Provided clear, customer-focused technical support in a bilingual professional environment.',
        'Built transferable strengths in analytical thinking, troubleshooting, teamwork and incident ownership.',
      ],
    },
  ];

  const sectionVariables = {
    '--experience-heading': isDarkMode
      ? themeColors.colors.white
      : themeColors.colors.pink[500],

    '--experience-title': isDarkMode
      ? themeColors.colors.pink[300]
      : themeColors.colors.pink[400],

    '--experience-text': isDarkMode
      ? themeColors.colors.dark[200]
      : themeColors.colors.dark[600],

    '--experience-accent': themeColors.primary,
  } as CSSProperties;

  return (
    <section
      id="experience"
      className={`experience-section ${
        isDarkMode
          ? 'experience-section--dark'
          : 'experience-section--light'
      }`}
      style={sectionVariables}
    >
      <div className="experience-section__ambient" aria-hidden="true" />

      <div className="container mx-auto px-6 experience-section__content">
        <h2 className="experience-section__title">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((experience, index) => (
            <Card
              key={`${experience.title}-${index}`}
              className="experience-card"
            >
              <CardHeader className="pb-2">
                <div className="experience-card__header">
                  <div>
                    <CardTitle className="experience-card__title">
                      {experience.title}
                    </CardTitle>

                    <p className="experience-card__company">
                      {experience.company}
                    </p>
                  </div>

                  <div className="experience-card__meta">
                    <div>
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>

                    <div>
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-2">
                <ul className="experience-card__list">
                  {experience.description.map((item, itemIndex) => (
                    <li key={`${item}-${itemIndex}`}>
                      <span
                        className="experience-card__bullet"
                        aria-hidden="true"
                      >
                        •
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
