import "./App.css";

function App() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Python", level: "75%" },
    { name: "PHP", level: "70%" },
  ];

  const projects = [
    {
      number: "01",
      title: "Employee Management",
      description:
        "A modern employee management system designed to manage employee information, records and daily operations.",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      number: "02",
      title: "Hostel Management",
      description:
        "A complete hostel management application for students, payments, records and administrative operations.",
      tags: ["React", "Python", "Database"],
    },
    {
      number: "03",
      title: "AI Chat Platform",
      description:
        "A modern AI chat interface with a clean conversational experience and responsive design.",
      tags: ["React", "API", "AI"],
    },
  ];

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="logo">
          A<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

      </header>


      {/* ================= HERO ================= */}

      <main id="home">

        <section className="hero">

          <div className="hero-content">

            <div className="available">
              <span></span>
              Available for opportunities
            </div>

            <p className="eyebrow">
              BCA STUDENT • WEB DEVELOPER
            </p>

            <h1>
              Building digital
              <br />
              <span>experiences</span> that matter.
            </h1>

            <p className="hero-description">
              I'm Ashok, a passionate developer focused on creating
              modern, responsive and user-friendly web applications
              with clean code and thoughtful design.
            </p>

            <div className="hero-actions">

              <a href="#projects" className="primary-button">
                Explore My Work
                <span>↗</span>
              </a>

              <a href="#about" className="outline-button">
                More About Me
              </a>

            </div>


            <div className="hero-meta">

              <div>
                <strong>10+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>6+</strong>
                <span>Technologies</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Learning</span>
              </div>

            </div>

          </div>


          <div className="hero-visual">

            <div className="visual-circle"></div>

            <div className="code-card">

              <div className="window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code">

                <p>
                  <span className="purple">const</span>{" "}
                  developer = {"{"}
                </p>

                <p className="indent">
                  name: <span className="green">"Ashok"</span>,
                </p>

                <p className="indent">
                  role: <span className="green">"Developer"</span>,
                </p>

                <p className="indent">
                  passion: <span className="green">"Web"</span>,
                </p>

                <p className="indent">
                  learning: <span className="green">true</span>
                </p>

                <p>{"}"}</p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="section about">

          <div className="section-heading">

            <p>01 — ABOUT</p>

            <h2>
              Turning ideas into <span>digital reality.</span>
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-text">

              <p className="large-text">
                I'm a BCA student and aspiring full-stack developer
                who enjoys transforming ideas into functional and
                visually engaging web experiences.
              </p>

              <p>
                My journey started with the fundamentals of programming
                and gradually moved toward web development. Today,
                I'm continuously learning React, backend technologies,
                databases and modern development practices.
              </p>

              <p>
                I believe great websites are not only about how they
                look. They should also be fast, responsive, accessible
                and easy to use.
              </p>

              <a href="#contact" className="text-link">
                Let's create something together →
              </a>

            </div>


            <div className="about-card">

              <div className="profile-placeholder">
                <span>A</span>
              </div>

              <h3>Ashok</h3>

              <p>
                Developer & Learner
              </p>

              <div className="card-line"></div>


              <div className="info-row">
                <span>Focus</span>
                <strong>Web Development</strong>
              </div>


              <div className="info-row">
                <span>Stack</span>
                <strong>React / Python</strong>
              </div>


              <div className="info-row">
                <span>Status</span>
                <strong>Learning & Building</strong>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-heading">

            <p>02 — SKILLS</p>

            <h2>
              Tools I use to <span>build.</span>
            </h2>

          </div>


          <div className="skills-grid">

            {skills.map((skill) => (

              <div
                className="skill-card"
                key={skill.name}
              >

                <div className="skill-top">

                  <h3>
                    {skill.name}
                  </h3>

                  <span>
                    {skill.level}
                  </span>

                </div>


                <div className="progress">

                  <div
                    style={{
                      width: skill.level,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= SERVICES ================= */}

        <section
          id="services"
          className="section services"
        >

          <div className="section-heading">

            <p>03 — SERVICES</p>

            <h2>
              What I can <span>build.</span>
            </h2>

          </div>


          <div className="services-grid">


            <div className="service-card">

              <div className="service-number">
                01
              </div>

              <h3>
                Web Development
              </h3>

              <p>
                Responsive and modern websites built with clean,
                maintainable code.
              </p>

              <span>
                ↗
              </span>

            </div>


            <div className="service-card">

              <div className="service-number">
                02
              </div>

              <h3>
                React Applications
              </h3>

              <p>
                Interactive web applications using React and
                modern frontend development techniques.
              </p>

              <span>
                ↗
              </span>

            </div>


            <div className="service-card">

              <div className="service-number">
                03
              </div>

              <h3>
                UI Development
              </h3>

              <p>
                Clean interfaces with responsive layouts,
                animations and thoughtful user experience.
              </p>

              <span>
                ↗
              </span>

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-heading project-heading">

            <p>
              04 — SELECTED WORK
            </p>

            <h2>
              Things I've <span>built.</span>
            </h2>

          </div>


          <div className="projects-list">

            {projects.map((project) => (

              <article
                className="project"
                key={project.number}
              >

                <div className="project-number">
                  {project.number}
                </div>


                <div className="project-main">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="tags">

                    {project.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>


                <div className="project-arrow">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

        <section className="section experience">

          <div className="section-heading">

            <p>
              05 — JOURNEY
            </p>

            <h2>
              My <span>learning path.</span>
            </h2>

          </div>


          <div className="timeline">


            <div className="timeline-item">

              <div className="timeline-date">
                2026
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>
                  React & Modern Web Development
                </h3>

                <p>
                  Building responsive applications and learning
                  component-based development with React.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-date">
                2025
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>
                  Programming Fundamentals
                </h3>

                <p>
                  Learning programming concepts, algorithms,
                  databases and web technologies.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SOCIAL MEDIA ================= */}

        <section className="social-connect">

          <div className="social-header">

            <span>
              LET'S CONNECT
            </span>

            <h2>
              Find me <strong>online.</strong>
            </h2>

            <p>
              Follow my work, projects and latest updates
              across social platforms.
            </p>

          </div>


          <div className="social-grid">


            {/* GITHUB */}

            <a
              className="social-box"
              href="https://github.com/ashokjangidsuthar5555-hub"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-box-top">

                <div className="social-logo github-logo">
                  GH
                </div>

                <span className="social-arrow">
                  ↗
                </span>

              </div>

              <div className="social-box-content">

                <h3>
                  GitHub
                </h3>

                <p>
                  Projects & source code
                </p>

              </div>

              <div className="social-line"></div>

              <span className="social-handle">
                @ashokjangidsuthar5555
              </span>

            </a>


            {/* INSTAGRAM */}

            <a
              className="social-box"
              href="https://www.instagram.com/ashokjangid.07?igsh=MXhhdnliZWNibXN6Ng=="
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-box-top">

                <div className="social-logo instagram-logo">
                  IG
                </div>

                <span className="social-arrow">
                  ↗
                </span>

              </div>

              <div className="social-box-content">

                <h3>
                  Instagram
                </h3>

                <p>
                  Photos & daily updates
                </p>

              </div>

              <div className="social-line"></div>

              <span className="social-handle">
                @ashokjangid.07
              </span>

            </a>


            {/* X */}

            <a
              className="social-box"
              href="https://x.com/ashoksutha38560"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-box-top">

                <div className="social-logo x-logo">
                  𝕏
                </div>

                <span className="social-arrow">
                  ↗
                </span>

              </div>

              <div className="social-box-content">

                <h3>
                  X
                </h3>

                <p>
                  Thoughts & updates
                </p>

              </div>

              <div className="social-line"></div>

              <span className="social-handle">
                @ashoksutha38560
              </span>

            </a>


            {/* SNAPCHAT */}

            <a
              className="social-box"
              href="https://www.snapchat.com/add/ashoksuthar3147"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-box-top">

                <div className="social-logo snapchat-logo">
                  SC
                </div>

                <span className="social-arrow">
                  ↗
                </span>

              </div>

              <div className="social-box-content">

                <h3>
                  Snapchat
                </h3>

                <p>
                  Connect & chat
                </p>

              </div>

              <div className="social-line"></div>

              <span className="social-handle">
                @ashoksuthar3147
              </span>

            </a>
          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="cta">

          <p>
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's make something
            <br />
            <span>
              great together.
            </span>
          </h2>

          <a
            href="#contact"
            className="primary-button"
          >
            Start a Conversation
            <span>↗</span>
          </a>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact"
        >

          <div className="section-heading">

            <p>
              06 — CONTACT
            </p>

            <h2>
              Let's <span>connect.</span>
            </h2>

          </div>


          <div className="contact-grid">


            <div className="contact-info">

              <p>
                Whether you have a project idea, a question,
                or just want to say hello, my inbox is always open.
              </p>

              <a
                href="ashokjangidsuthar5555@email.com"
                className="email"
              >
                ashokjangidsuthar5555
              </a>

            </div>


            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >

              <label>

                Your Name

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </label>


              <label>

                Email Address

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </label>


              <label>

                Message

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>

              </label>


              <button type="submit">
                Send Message ↗
              </button>

            </form>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          A<span>.</span>
        </div>

        <p>
          Designed & built with React by Ashok.
        </p>

        <p>
          © 2026 Ashok
        </p>

      </footer>

    </div>
  );
}

export default App;