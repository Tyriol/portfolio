import "./Project.css";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  imageAltText: string;
  githubLink: string;
  websiteLink: string;
}

export default function Project({title, description, image, imageAltText, githubLink, websiteLink }: ProjectProps) {
    return (
        <div className="project-card">
            <img className="project-img" src={image} alt={imageAltText}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
              <a href={githubLink} target='_blank'><button>Github</button></a>
              <a href={websiteLink} target='_blank'><button>Website</button></a>
            </div>
          </div>
    );
}