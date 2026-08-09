import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  Code,
  ExternalLink,
  FolderOpen,
  X,
} from 'lucide-react';
import './Projects.css';

type FolderColour =
  | 'orange'
  | 'sage'
  | 'forest'
  | 'blue'
  | 'lilac'
  | 'cream';

interface Project {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  technologies: string[];
  detailsUrl?: string;
  githubUrl?: string;
  folderColour: FolderColour;
  fileCount: string;
  category: string;
}

const PROJECTS: Project[] = [
  {
    id: 'project-one',
    title: 'Administrative Website for a Family Business - Academic Project',
    shortLabel: 'FAMILY_BUSINESS_01',
    description:
      'Built a business management web app using C#, ASP.NET Core/MVC, SQL Server, Entity Framework, and JavaScript. Focused on scalability, secure data handling, and maintainable architecture.',
    technologies: ['C#', 'ASP.NET MVC', '.NET', 'SQL Server'],
    detailsUrl: '',
    githubUrl: 'https://github.com/dacevedocubillo/WebAdminSystem',
    folderColour: 'orange',
    fileCount: '04 FILES',
    category: 'FULL-STACK BUILD',
  },
  {
    id: 'project-two',
    title: 'Vacation Management System — Academic Project',
    shortLabel: 'UNIVERSITY_02',
    description:
      'Developed a vacation management system for a university using C#, ASP.NET MVC, and SQL Server. Implemented features for employee leave requests, approvals, and reporting, ensuring data integrity and user-friendly interfaces.',
    technologies: ['C#', '.NET', 'ASP.NET MVC', 'SQL Server'],
    detailsUrl: '',
    githubUrl: 'https://github.com/dacevedocubillo/VAP-Manager',
    folderColour: 'sage',
    fileCount: '06 FILES',
    category: 'ACADEMIC SYSTEM',
  },
  {
    id: 'project-three',
    title: 'Alura Geek E-commerce Website',
    shortLabel: 'MUSIC_STORE_03',
    description:
      'Responsive e-commerce interface with category navigation, dynamic album cards and an accessible experience across screen sizes.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    detailsUrl: '',
    githubUrl: 'https://github.com/dacevedocubillo/Alura-Geek',
    folderColour: 'forest',
    fileCount: '05 FILES',
    category: 'FRONT-END BUILD',
  },
  {
    id: 'project-four',
    title: 'University Academic Management System',
    shortLabel: 'PORTFOLIO_04',
    description:
      'A web-based academic management system for managing students, courses, enrollment, grades, campuses, academic terms, user roles, and reports.',
    technologies: ['C#', '.NET', 'ASP.NET MVC', 'SQL Server'],
    detailsUrl: '',
    githubUrl: 'https://github.com/dacevedocubillo/portafolio',
    folderColour: 'blue',
    fileCount: '03 FILES',
    category: 'INTERACTIVE WEB',
  },
];

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const openProject =
    PROJECTS.find((project) => project.id === openProjectId) ?? null;

  useEffect(() => {
    if (!openProject) {
      return;
    }

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - html.clientWidth;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenProjectId(null);
      }
    };

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [openProject]);

  const projectModal =
    openProject && typeof document !== 'undefined'
      ? createPortal(
          <div
            className="pixel-project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pixel-project-dialog-title"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setOpenProjectId(null);
              }
            }}
          >
            <article
              className={`pixel-project-window pixel-window-${openProject.folderColour}`}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="pixel-project-window-header">
                <div>
                  <FolderOpen size={16} aria-hidden="true" />

                  <span>
                    {openProject.shortLabel}/{openProject.id}.folder
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenProjectId(null)}
                  aria-label="Close project folder"
                  autoFocus
                >
                  <X size={17} aria-hidden="true" />
                </button>
              </header>

              <div className="pixel-project-window-body">
                <div className="pixel-project-preview">
                  <div
                    className="pixel-project-preview-grid"
                    aria-hidden="true"
                  />

                  <span
                    className="pixel-project-preview-folder"
                    aria-hidden="true"
                  >
                    <i />
                    <b />
                  </span>

                  <span className="pixel-project-preview-label">
                    {openProject.category}
                  </span>

                  <strong>{openProject.title}</strong>

                  <small>Daniela's software development project archive</small>
                </div>

                <div className="pixel-project-information">
                  <span className="pixel-project-information-label">
                    PROJECT_INFO.TXT
                  </span>

                  <h3 id="pixel-project-dialog-title">
                    {openProject.title}
                  </h3>

                  <p>{openProject.description}</p>

                  <div className="pixel-project-tech">
                    <span>TOOLS + STACK</span>

                    <div>
                      {openProject.technologies.map((technology) => (
                        <i key={technology}>{technology}</i>
                      ))}
                    </div>
                  </div>

                  <div className="pixel-project-actions">
                    {openProject.detailsUrl && (
                      <Link
                        to={openProject.detailsUrl}
                        onClick={() => setOpenProjectId(null)}
                      >
                        <ExternalLink size={15} aria-hidden="true" />
                        Open case study
                      </Link>
                    )}

                    {openProject.githubUrl && (
                      <a
                        href={openProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code size={15} aria-hidden="true" />
                        View code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <footer className="pixel-project-window-footer">
                <span>{openProject.fileCount}</span>
                <span>DANIELA'S PROJECT ARCHIVE</span>
              </footer>
            </article>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <section id="projects" className="pixel-projects-section">
        <div className="pixel-projects-background" aria-hidden="true">
          <span className="pixel-project-leaf pixel-project-leaf-one" />
          <span className="pixel-project-leaf pixel-project-leaf-two" />
          <span className="pixel-project-flower pixel-project-flower-one" />
          <span className="pixel-project-flower pixel-project-flower-two" />
        </div>

        <div className="pixel-projects-shell">
          <header className="pixel-projects-header">
            <div>
              <span className="pixel-projects-kicker">
                PROJECT_ARCHIVE.EXE
              </span>

              <h2>Projects</h2>

              <p>
                Open a folder to explore the story, tools and code behind each
                build.
              </p>
            </div>

            <div className="pixel-projects-status" aria-hidden="true">
              <span>ARCHIVE STATUS</span>
              <strong>{PROJECTS.length} FOLDERS FOUND</strong>
            </div>
          </header>

          <div className="pixel-folder-grid">
            {PROJECTS.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={`pixel-project-folder pixel-folder-${project.folderColour}`}
                onClick={() => setOpenProjectId(project.id)}
                aria-label={`Open ${project.title} project folder`}
                style={
                  {
                    '--folder-delay': `${index * 80}ms`,
                  } as CSSProperties
                }
              >
                <span className="pixel-folder-stack" aria-hidden="true">
                  <span className="pixel-folder-paper pixel-folder-paper-back">
                    <i />
                    <i />
                    <i />
                  </span>

                  <span className="pixel-folder-back">
                    <span className="pixel-folder-tab">
                      {project.shortLabel}
                    </span>
                  </span>

                  <span className="pixel-folder-paper pixel-folder-paper-front">
                    <span>{project.category}</span>
                    <strong>{project.title}</strong>

                    <div>
                      {project.technologies.slice(0, 3).map((technology) => (
                        <i key={technology}>{technology}</i>
                      ))}
                    </div>
                  </span>

                  <span className="pixel-folder-front">
                    <span className="pixel-folder-flower">
                      <i />
                      <i />
                      <i />
                      <i />
                      <b />
                    </span>

                    <span className="pixel-folder-sticker">OPEN</span>
                  </span>
                </span>

                <span className="pixel-folder-caption">
                  <span>
                    <strong>{project.title}</strong>
                    <small>{project.category}</small>
                  </span>

                  <span>
                    <FolderOpen size={16} aria-hidden="true" />
                    {project.fileCount}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="pixel-projects-footer">
            <span>SELECT FOLDER</span>
            <span>CLICK TO OPEN // ESC TO CLOSE</span>
          </div>
        </div>
      </section>

      {projectModal}
    </>
  );
};

export default Projects;
