import css from "./page.module.css";

export default function HomePage() {
  return (
    // <div className={css.mainContent}>
    //   <h1 className={css.aboutMeName}>Valeriy Svystun</h1>
    //   <h2 className={css.aboutMeProfession}>Front-End Developer</h2>
    //   <h3 className={css.mainContentTitle}>Summary</h3>
    //   <p className={css.aboutMeDescription}>
    //     I am a Junior Front End developer. I read docs and write code. In a few
    //     months, I will complete my studies at GoIt Academy as a full-stack
    //     developer. I want to change the study for which I pay to a job for which
    //     I do not pay. After all, the best education is work, the best work is
    //     paid work for the best price. My goal is to master the profession step
    //     by step to make projects valuable for the customers.
    //   </p>

    //   <div className={css.myProjectsSection}>
    //     <h3 className={css.mainContentTitle}>Projects</h3>
    //     <ul className={css.myProjectsList}>
    //       <li className={css.myProjectsItem}>
    //         <span className={css.myProjectsText}></span>
    //         <a
    //           className={css.myProjectsLink}
    //           target="_blank"
    //           rel="noopener"
    //           href="https://valeriyvinn.github.io/goit-markup-hw-08/"
    //         >
    //           WEB STUDIO
    //         </a>
    //         <span className={css.myProjectsText}></span>
    //         <a
    //           className={css.myProjectsLink}
    //           target="_blank"
    //           rel="noopener"
    //           href="https://github.com/ValeriyVinn/goit-markup-hw-08"
    //         >
    //           Git Hub
    //         </a>
    //         <span>
    //           <span className={css.myProjectsBrecket}>[</span>
    //           <span className={css.myProjectsText}>HTML5, CSS3, SASS</span>
    //           <span className={css.myProjectsBrecket}>]</span>
    //         </span>
    //         <br />
    //         <span className={css.aboutMeDescription}>
    //           (A web design website that offers effective solutions for your
    //           business) <br />
    //           Role: Developer
    //         </span>
    //       </li>

    //       <li className={css.myProjectsItem}>
    //         <span className={css.myProjectsText}></span>
    //         <a
    //           target="_blank"
    //           rel="noopener"
    //           className={css.myProjectsLink}
    //           href="https://nikitashvindt.github.io/notsogreen/"
    //         >
    //           ICE CREAM
    //         </a>
    //         <span className={css.myProjectsText}>
    //           <a
    //             target="_blank"
    //             rel="noopener  noreferrer"
    //             className={css.myProjectsLink}
    //             href="https://github.com/NikitaShvindt/notsogreen"
    //           >
    //             Git Hub
    //           </a>
    //           <span>
    //             <span className={css.myProjectsBrecket}>[</span> HTML5, CSS3,
    //             SASS, JavaScript{" "}
    //             <span className={css.myProjectsBrecket}>]</span>
    //           </span>
    //         </span>
    //         <br />
    //         <span className={css.aboutMeDescription}>
    //           (Website where you can order natural ice cream online and get full
    //           information about the product) <br />
    //           Role: Developer <br />
    //           Team project. Developed the &quot;Advantages&quot; section.
    //         </span>
    //       </li>

    //       <li className={css.myProjectsItem}>
    //         <span className={css.myProjectsText}></span>
    //         <a
    //           className={css.myProjectsLink}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="https://andriy-minyailo.github.io/project-watchflix/"
    //         >
    //           CINEMANIA
    //         </a>
    //         <span className={css.myProjectsText}>
    //           <a
    //             className={css.myProjectsLink}
    //             target="_blank"
    //             rel="noopener"
    //             href="https://github.com/Andriy-Minyailo/project-watchflix"
    //           >
    //             Git Hub
    //           </a>
    //           <span>
    //             <span className={css.myProjectsBrecket}>[</span> HTML5, CSS3,
    //             SASS, JavaScript, REST API, Parcel
    //             <span className={css.myProjectsBrecket}>]</span>
    //           </span>
    //         </span>
    //         <br />
    //         <span className={css.aboutMeDescription}>
    //           (An entertaining website that gives you the opportunity to get
    //           acquainted with the latest in the film industry and collect your
    //           own collection of films) <br />
    //           Role: Developer
    //           <br />
    //           Team project. Developed the &quot;Button&quot; section.
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className={css.myWorkExpSection}>
    //     <h3 className={css.mainContentTitle}>Work Experience</h3>

    //     <div>
    //       <h4 className={css.myWorkExpPosition}>Individual entrepreneur</h4>
    //       <p className={css.myWorkExpPeriod}>
    //         August 2004 - November 2019
    //         <span className={css.myWorkExpDivider}>|</span> Vinnytsia, Ukraine
    //       </p>
    //       <ul className={css.myWorkExpDuties}>
    //         <li className={css.myWorkExpDuti}>Trade in flowers and plants.</li>
    //         <li className={css.myWorkExpDuti}>
    //           Cultivation of ornamental crops.
    //         </li>
    //         <li className={css.myWorkExpDuti}>
    //           Cultivation of annual and biennial ornamental crops.
    //         </li>

    //         <li className={css.myWorkExpDuti}>
    //           Growing and selling African violets.
    //         </li>
    //         <li className={css.myWorkExpDuti}>
    //           Growing and selling of other houseplants.
    //         </li>
    //       </ul>
    //       <p className={`${css.myWorkExpPeriod} ${css.myWorkExpDuti}`}>
    //         Achievements: Increased sales by 20% - 30% per year. Deepened my
    //         knowledge through membership in international organizations such as
    //         The Society for In Vitro Biology, The Royal Horticultural Society,
    //         The African Violet Society of America, The Alpine Garden Society and
    //         some others.
    //       </p>
    //     </div>
    //   </div>

    //   <div className={css.myEducationSection}>
    //     <h3 className={css.mainContentTitle}>Education</h3>
    //     <div className={css.myWorkExpCompanyBlock}>
    //       <h3 className={css.myEducationPlace}>GoIT</h3>
    //       <h4 className={css.myEducationProf}>FullStack Developer</h4>
    //       <p className={css.myWorkExpPeriod}>
    //         2022 - 2023
    //         <span className={css.myWorkExpDivider}>|</span> Ukraine
    //       </p>
    //     </div>
    //     <div>
    //       <h3 className={css.myEducationPlace}>
    //         Vinnytsia National Agrarian University
    //       </h3>
    //       <h4 className={css.myEducationProf}>
    //         Faculty of Agronomy and Forestry, Agronomy
    //       </h4>
    //       <p className={css.myEducationPeriod}>
    //         1998-2004 <span className={css.myEducationPeriodDivider}>|</span>
    //         Ukraine
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <main className={css.resume}>
      <div className={css.photo}>Фото</div>
      <div className={css.name}>Name</div>
      <div className={css.profession}>Profession</div>
      <div className={css.summary}>Summary</div>
      <div className={css.techSkills}>Tech Skills</div>
      <div className={css.softSkills}>Soft Skills</div>
      <div className={css.projects}>Projects</div>
      <div className={css.workExperience}>Work Experience</div>
      <div className={css.education}>Education</div>
      <div className={css.languages}>Languages</div>
      <div className={css.contacts}>Contacts</div>
    </main>
  );
}
