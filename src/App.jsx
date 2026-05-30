import { Certifications } from './components/Certifications.jsx';
import { Contact } from './components/Contact.jsx';
import { Experience } from './components/Experience.jsx';
import { Expertise } from './components/Expertise.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Metrics } from './components/Metrics.jsx';
import { PlatformStories } from './components/PlatformStories.jsx';
import { profile } from './data/profile.js';

export default function App() {
  return (
    <>
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <Metrics stats={profile.stats} />
        <Expertise expertise={profile.expertise} />
        <Experience experience={profile.experience} />
        <PlatformStories stories={profile.stories} />
        <Certifications certifications={profile.certifications} />
      </main>
      <Contact profile={profile} />
    </>
  );
}
