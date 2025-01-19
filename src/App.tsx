
import Slider from "react-slick";

//components
import Header from './components/Header/Header';
import Project from './components/Project/Project';

//data
import techStack from './assets/data/techstack';
import projects from './assets/data/projects';

//styles
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const settings = {
    dots: true,
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <Header />
    <section className="portfolio-section" id='home'> 
      <div className="container">
        <div className="intro">
          <p>Hey,</p>
          <h1>I'm Ryan</h1>
          <p className="self-title">Junior Fullstack Software Engineer</p>
          <div className="contacts-list">
            <a className="contacts" href="mailto:ryanshaunsmith@gmail.com" target="_blank"><button>Email</button></a>
            <a className="contacts"href="https://www.linkedin.com/in/ryanshaunsmith/" target="_blank"><button>LinkedIn</button></a>
            <a className="contacts" href="https://github.com/Tyriol" target="_blank"><button>GitHub</button></a>
            </div>
        </div>
        <img className="profile-img" src="../rss1.jpg" alt="profile picture"/>
      </div>
    </section>
    <section className="portfolio-section" id='about-me'>
      <div className="container">
        <img className="profile-img" src="../Ryansquareheadshot.jpg" alt="profile picture"/>
        <div className="about-me">
          <h2>Developer, Learner, Coach</h2>
          <p>Recently I decided my life needed a kick up the butt so I've thrown my everything in to following my heart and passion.</p>
          <p>Eager for a new challenge I've been learning the fundamentals of Software Development and really honing the skill of learning how to learn.</p>
          <p>I'm hungry to make the most of this and continue to push myself and grow.</p>
        </div>
      </div>
    </section>
    <section className="portfolio-section" id='tech'>
      <div className="container">
        <h2>The tech stack I've been working with</h2>
        <div className="tech">
          <ul className='tech-list'>
            { techStack.map((tech) => {
                return (
                  <li className='tech-item' key={tech.name}>
                    {tech.image}
                    <p>{tech.name}</p>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </section>
    <section className="portfolio-section" id='projects'>
      <div className="projects-wrapper">
        <h2>Projects</h2>
          <Slider className="projects-container" {...settings}>
            {projects.map((project, i) => {
              return (
                <Project
                  key={i + "1000"}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  imageAltText={project.imageAltText}
                  githubLink={project.githubLink}
                  websiteLink={project.websiteLink} />
                  )}
            )}
          </Slider>
      </div>
    </section>
    </>
  )
}

export default App
