import { Github, Linkedin, Mail, MapPin, Phone, PenLine } from 'lucide-react';

export function Contact({ profile }) {
  const websiteHref = profile.website.startsWith('http') ? profile.website : `https://${profile.website}`;

  return (
    <footer className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build reliable AI platforms.</h2>
        <p>{profile.location}</p>
      </div>
      <div className="contact-actions">
        <a href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" /> {profile.email}</a>
        <a href={`tel:${profile.phone.replaceAll('-', '')}`}><Phone size={18} aria-hidden="true" /> {profile.phone}</a>
        <a href={profile.links.linkedin}><Linkedin size={18} aria-hidden="true" /> LinkedIn</a>
        <a href={profile.links.github}><Github size={18} aria-hidden="true" /> GitHub</a>
        <a href={profile.links.medium}><PenLine size={18} aria-hidden="true" /> Medium</a>
        <a href={websiteHref}><MapPin size={18} aria-hidden="true" /> {profile.website}</a>
      </div>
    </footer>
  );
}
