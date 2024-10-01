import './App.css'

const techStack = [
  {
    name: "JavaScript",
    image: "./assets/logo-javascript.svg",
  },
  {
    name: "TypeScript",
    image: "../ts-logo.png",
  },
  {
    name: "GitHub",
    image: "../github-logo.png",
  },
  {
    name: "React",
    image: "../react-logo.png",
  },
  {
    name: "React",
    image: "../react-logo.png",
  },
  {
    name: "React",
    image: "../react-logo.png",
  },
  {
    name: "React",
    image: "../react-logo.png",
  },
  {
    name: "React",
    image: "../react-logo.png",
  }
]

function App() {

  return (
    <>
    <section className="portfolio-section"> 
      <div className="container">
        <div className="intro">
          <h2>Hey,</h2>
          <h1>I'm Ryan</h1>
          <p className="self-title">Junior Fullstack Software Engineer</p>
          <div className="contacts-list">
            <button className="contacts">Email</button>
            <button className="contacts">LinkedIn</button>
            <button className="contacts">GitHub</button>
            </div>
        </div>
        <img className="profile-img" src="../cartoon-stylised-profile-pic.webp" alt="profile picture"/>
      </div>
    </section>
    <section className="portfolio-section">
      {/* more about me and my journey */}
      <div className="container">
        <img className="profile-img" src="../Ryansquareheadshot.jpg" alt="profile picture"/>
        <div className="about-me">
          <p>Hello! Over the past four months I've thrown my everything in to following my heart and passion.</p>
          <p>I've been learning the fundamentals of Software Development and really honing the skill of learning how to learn.</p>
        </div>
      </div>
    </section>
    <section className="portfolio-section">
      {/* Tech Stack */}
      <div className="container">
        <h2>The tech stack I've been working with</h2>
        <div className="tech-list">
          <ul>
            { techStack.map((tech) => {
              return (
                <li>
                  <img src={tech.image} alt={tech.name}/>
                  <p>{tech.name}</p>
                </li>
              )
            })
            }
          </ul>
        </div>
      </div>
    </section>
    <section className="portfolio-section">
      <img src="/assets/css-3.svg" alt="hero image"/>
      {/* project 4 */}
      {/* project 5 */}
      {/* project 6 */}
    </section>
    </>
  )
}

export default App
