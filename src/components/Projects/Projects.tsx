import css from "./Projects.module.css";
export default function Projects() {
  return (
    <div className={css.name}>
      <h2>Projects</h2>
      <ul>
        <li>
          <div>
            <a href="#">WEB STUDIO</a>
            <a href="#">GitHub</a>
            <span>[ HTML5, CSS3, SASS ]</span>
          </div>
          <p>
            A web design website that offers effective solutions for your
            business
          </p>
          <p>Role: Developer</p>
        </li>

        <li>
          <div>
            <a href="#">ICE CREAM</a>
            <a href="#">GitHub</a>
            <span>[ HTML5, CSS3, SASS, JavaScript ]</span>
          </div>
          <p>
            Website where you can order natural ice cream online and get full
            information about the product
          </p>
          <p>Role: Developer</p>
          <p>Team project. Developed the Advantages section.</p>
        </li>

        <li>
          <div>
            <a href="#">CINEMANIA</a>
            <a href="#">GitHub</a>
            <span>[ HTML5, CSS3, SASS, JavaScript, REST API, Parcel ]</span>
          </div>
          <p>
            An entertaining website that gives you the opportunity to get
            acquainted with the latest in the film industry and collect your own
            collection of films
          </p>
          <p>Role: Developer</p>
          <p>Team project. Developed the Button section.</p>
        </li>
      </ul>
    </div>
  );
}
