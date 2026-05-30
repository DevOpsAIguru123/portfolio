import { profile } from './data/profile.js';

export default function App() {
  return (
    <main className="app-shell">
      <h1>{profile.name}</h1>
      <p>{profile.title}</p>
      <p>{profile.summary}</p>
    </main>
  );
}
