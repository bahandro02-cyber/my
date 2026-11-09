import "./App.css";

const projects = [
  {
    number: "01",
    name: "My First Project",
    description: "Мой первый веб-проект, созданный с помощью React.",
    url: "https://1vohv0v9l-lffqap7p4-baha25.vercel.app",
    tech: ["React", "CSS", "JavaScript"],
    icon: "🚀",
  },
  {
    number: "02",
    name: "Weather App",
    description: "Приложение погоды с удобным интерфейсом.",
    url: "https://pogoda-alpha.vercel.app",
    tech: ["React", "API", "CSS"],
    icon: "🌤️",
  },
  {
    number: "03",
    name: "Wiki Project",
    description: "Веб-проект с современным дизайном.",
    url: "https://wik-zeta.vercel.app",
    tech: ["React", "JavaScript", "CSS"],
    icon: "🌐",
  },
  {
    number: "04",
    name: "Calculator",
    description: "Калькулятор с интерактивными элементами.",
    url: "https://calculator-ar-phi.vercel.app/",
    tech: ["React", "CSS", "JavaScript"],
    icon: "🧮",
  },
  {
    number: "05",
    name: "URA Project",
    description: "Мой веб-проект, опубликованный на Vercel.",
    url: "https://ura-lyart.vercel.app",
    tech: ["React", "CSS", "JavaScript"],
    icon: "💻",
  },
];

function App() {
  return (
    <div className="app">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <header className="navbar">
        <a href="#home" className="logo">
          B<span>.</span>
        </a>

        <nav>
          <a href="#home">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>

        <a href="#contact" className="nav-button">
          Связаться ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="status">
              <span className="status-dot"></span>
              ОТКРЫТ К НОВЫМ ВОЗМОЖНОСТЯМ
            </div>

            <p className="hello">ПРИВЕТ, МИР! Я</p>

            <h1>
              БАЙМЫРЗА<span>.</span>
            </h1>

            <h2>
              Frontend <span>Developer</span>
            </h2>

            <p className="hero-description">
              Я изучаю Frontend-разработку и создаю современные,
              красивые и удобные веб-сайты с помощью React.
              Каждый новый проект — это новый шаг к моей цели.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Мои проекты ↗
              </a>
              <a href="#contact" className="secondary-button">
                Связаться
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>05+</strong>
                <small>ПРОЕКТОВ</small>
              </div>
              <div>
                <strong>React</strong>
                <small>ОБУЧЕНИЕ</small>
              </div>
              <div>
                <strong>100%</strong>
                <small>МОТИВАЦИЯ</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-ring">
              <div className="avatar">🐈‍⬛</div>
            </div>

            <div className="floating-card card-top">
              <span>⚡</span> React Developer
            </div>

            <div className="floating-card card-bottom">
              <span className="green-dot"></span> Learning every day
            </div>

            <div className="visual-circle"></div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-label">01 / ОБО МНЕ</div>
          <h2 className="section-title">
            Создаю. <span>Изучаю.</span> Развиваюсь.
          </h2>

          <div className="about-grid">
            <div className="about-text">
              <h3>Привет! Я Баймырза 👋</h3>
              <p>
                Я начинающий Frontend-разработчик.
                Изучаю программирование, работаю с React
                и создаю собственные проекты.
              </p>
              <p>
                Мне нравится превращать идеи в реальные
                сайты, экспериментировать с дизайном
                и постоянно улучшать свои навыки.
              </p>
            </div>

            <div className="skills">
              <h3>МОЙ СТЕК</h3>
              {["HTML", "CSS", "JavaScript", "React", "GitHub", "Vercel"].map(
                (skill) => (
                  <span className="skill" key={skill}>
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-label">02 / МОИ РАБОТЫ</div>

          <div className="projects-heading">
            <h2 className="section-title">
              Избранные <span>проекты.</span>
            </h2>
            <p>Мои реальные работы, опубликованные онлайн.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    PROJECT / {project.number}
                  </span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Смотреть проект <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-label">03 / КОНТАКТЫ</div>

          <h2 className="section-title">
            Давайте создадим <span>что-то крутое.</span>
          </h2>

          <p>
            Есть идея или предложение? Напишите мне!
          </p>

          <div className="contact-grid">
            <a
              href="https://wa.me/996706014309"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">✆</span>
              <div>
                <small>WHATSAPP</small>
                <h3>0706014309</h3>
              </div>
              <span className="arrow">↗</span>
            </a>

            <a
              href="https://t.me/+996502014309"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">➤</span>
              <div>
                <small>TELEGRAM</small>
                <h3>0502014309</h3>
              </div>
              <span className="arrow">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">
          B<span>.</span>
        </a>
        <p>© 2026 Баймырза. Создано с ❤️ на React.</p>
        <a href="#home">НАВЕРХ ↑</a>
      </footer>
    </div>
  );
}

export default App;