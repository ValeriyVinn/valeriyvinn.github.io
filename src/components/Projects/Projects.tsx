// import css from "./Projects.module.css";
// export default function Projects() {
//   return (
//     <div className={css.name}>
//       <h2>Projects</h2>
//       <ul>
//         <li>
//           <div>
//             <a href="#">WEB STUDIO</a>
//             <a href="#">GitHub</a>
//             <span>[ HTML5, CSS3, SASS ]</span>
//           </div>
//           <p>
//             A web design website that offers effective solutions for your
//             business
//           </p>
//           <p>Role: Developer</p>
//         </li>

//         <li>
//           <div>
//             <a href="#">ICE CREAM</a>
//             <a href="#">GitHub</a>
//             <span>[ HTML5, CSS3, SASS, JavaScript ]</span>
//           </div>
//           <p>
//             Website where you can order natural ice cream online and get full
//             information about the product
//           </p>
//           <p>Role: Developer</p>
//           <p>Team project. Developed the Advantages section.</p>
//         </li>

//         <li>
//           <div>
//             <a href="#">CINEMANIA</a>
//             <a href="#">GitHub</a>
//             <span>[ HTML5, CSS3, SASS, JavaScript, REST API, Parcel ]</span>
//           </div>
//           <p>
//             An entertaining website that gives you the opportunity to get
//             acquainted with the latest in the film industry and collect your own
//             collection of films
//           </p>
//           <p>Role: Developer</p>
//           <p>Team project. Developed the Button section.</p>
//         </li>
//       </ul>
//     </div>
//   );
// }


import css from "./Projects.module.css";

type ProjectItem = {
  title: string;
  githubUrl: string;
  projectUrl: string;
  techStack: string[];
  description: string;
  role: string;
  contribution?: string;
};

type ProjectsProps = {
  title: string;
  projects: ProjectItem[];
};

export default function Projects({ title, projects }: ProjectsProps) {
  return (
    <div className={css.name}>
      <h2>{title}</h2>
      <ul>
        {projects.map((proj, i) => (
          <li key={i}>
            <div>
              <a href={proj.projectUrl} target="_blank" rel="noopener noreferrer">
                {proj.title}
              </a>
              <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span>[ {proj.techStack.join(", ")} ]</span>
            </div>
            <p>{proj.description}</p>
            <p>{proj.role}</p>
            {proj.contribution && <p>{proj.contribution}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
