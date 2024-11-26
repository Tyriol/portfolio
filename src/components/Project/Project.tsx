import "./Project.css";
import { ProjectType } from "../../assets/types/types";


export default function Project({title, description, image, imageAltText, githubLink, websiteLink }: ProjectType) {
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