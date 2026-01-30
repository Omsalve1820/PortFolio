import React from 'react'

export default function App(){
  return (
    <div>
      <header className="topbar">
        <div className="container">
          <h1 className="logo">Omkar Salve</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a className="cta" href="https://www.linkedin.com/in/omkar-salve-53a2b1247" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Hi, I'm <span className="accent">Omkar</span>.</h2>
            <p className="lead">Technology-focused software developer building reliable, scalable systems.</p>
            <p className="actions">
              <a className="btn" href="#projects">View Projects</a>
              <a className="btn outline" href="#contact">Get in touch</a>
            </p>
          </div>
        </section>

        <section id="about" className="panel">
          <div className="container">
            <h3>About</h3>
            <p>Brief bio goes here. I can pull details from your LinkedIn if you confirm permission or paste the text here.</p>
          </div>
        </section>

        <section id="skills" className="panel">
          <div className="container">
            <h3>Skills</h3>
            <ul className="skills">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>Python</li>
              <li>Cloud (AWS/GCP)</li>
              <li>CI / CD</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="panel">
          <div className="container">
            <h3>Projects</h3>
            <div className="grid">
              <article className="card">
                <h4>Project A</h4>
                <p>Short description. Replace with real project details from LinkedIn (links, tech stack, role, achievements).</p>
                <p className="meta">Tech: React · Node · PostgreSQL</p>
              </article>
              <article className="card">
                <h4>Project B</h4>
                <p>Short description. Add links or screenshots in the assets/ folder and update this card.</p>
                <p className="meta">Tech: Python · Flask · Docker</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="panel">
          <div className="container">
            <h3>Contact</h3>
            <p>Prefer email? <a href="mailto:your-email@example.com">your-email@example.com</a></p>
            <p>Or connect on <a href="https://www.linkedin.com/in/omkar-salve-53a2b1247" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© <span id="year">2026</span> Omkar Salve — Built with a tech theme</div>
      </footer>
    </div>
  )
}
