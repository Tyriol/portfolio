import { ProjectType } from "../types/types"

const projects: ProjectType[] = [
    {
        title: "METIS: Study Buddy",
        description: "Our School of Code final project. From conception to delivery in 4 days leveraging new found knowledge, collaboration and grit (And Next, JS and Supabase)",
        image:"../metis.png",
        imageAltText: "Metis Logo",
        githubLink: "https://github.com/Tyriol/metis-study-buddy",
        websiteLink: "https://metis.saffagonerogue.me"
    },
    {
        title: "The Learning Audit",
        description: "A side project I've been using to apply new concepts to as I learn them, with the goal of having an app that can track your learning journey.",
        image: "../learning-audit.png",
        imageAltText: "The Learning Audit homepage",
        githubLink: "https://github.com/Tyriol/learning-audit",
        websiteLink: "https://learning-audit.saffagonerogue.me"
    },
    {
        title: "Quiz Academy", 
        description: "Built early on in using vanilla JavaScript. This gave me my first proper taste of how interesting and challenging coding can be. A useful playground for trying new things.", 
        image: "../quiz.png", 
        imageAltText: "The Quiz Academy homepage", 
        githubLink: "https://github.com/Tyriol/quizAcademy", 
        websiteLink: "https://quiz.saffagonerogue.me"
    },
    {
        title: "TaskLite", 
        description: "Obligatory todo app, built using TypeScript and the Vite React framework. Made to limit todo's in progress and I learnt lots about using TS with React", 
        image: "../tasklite.png", 
        imageAltText: "The TaskLite App", 
        githubLink: "https://github.com/Tyriol/taskLite", 
        websiteLink: "https://todo.saffagonerogue.me/"
    },
    {
        title: "Blackjack", 
        description: "A tech test, built using a combination of vanilla JavaScript and React using Vite. I learnt a lot about testing React components using Vitest", 
        image: "../blackjack.png", 
        imageAltText: "The TaskLite App", 
        githubLink: "https://github.com/Tyriol/blackjack-bbc-segs-tech-test", 
        websiteLink: "https://blackjack.saffagonerogue.me/"
    }
]

export default projects;