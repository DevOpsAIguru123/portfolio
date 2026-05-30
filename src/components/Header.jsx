import { Github, Linkedin, Mail, PenLine } from 'lucide-react';

export function Header({ profile }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Vinod Vulavakayala home">
        <span>VV</span>
        <strong>{profile.name}</strong>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#expertise">Expertise</a>
        <a href="#experience">Experience</a>
        <a href="#stories">Stories</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <a href={profile.links.linkedin} aria-label="LinkedIn">
          <Linkedin size={18} aria-hidden="true" />
        </a>
        <a href={profile.links.github} aria-label="GitHub">
          <Github size={18} aria-hidden="true" />
        </a>
        <a href={profile.links.medium} aria-label="Medium">
          <PenLine size={18} aria-hidden="true" />
        </a>
        <a className="button button--small" href={`mailto:${profile.email}`}>
          <Mail size={16} aria-hidden="true" />
          Contact
        </a>
      </div>
    </header>
  );
}
