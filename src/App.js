import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <ContactMe />
        </section>
      </main>

      <footer>
        <p>© 2024 Marc Eiron Hernandez</p>
      </footer>
    </div>
  );
}

export default App;
