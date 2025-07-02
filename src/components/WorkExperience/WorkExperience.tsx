import css from "./WorkExperience.module.css";
export default function WorkExperience() {
  return (
    <div className={css.name}>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <h3>Refren LTD | manager</h3>
          <p>August 1998 - May 2004 | Vinnytsia, Ukraine </p>
          <ul>
            <li>Trade in goods.</li>
            <li> </li>
            <li> </li>
            <li></li>
          </ul>
        </li>
        <li>
          <h3>Individual entrepreneur</h3>
          <p>August 2004 - November 2019 | Vinnytsia, Ukraine </p>
          <ul>
            <li>Trade in flowers and plants.</li>
            <li>Cultivation of ornamental crops. </li>
            <li>Growing and selling African violets. </li>
            <li>Growing and selling of other houseplants. </li>
          </ul>
          <p>
            Achievements: Increased sales by 10% - 15% per year. Deepened my
            knowledge through membership in international organizations such as
            The Society for In Vitro Biology, The Royal Horticultural Society,
            The African Violet Society of America, The Alpine Garden Society and
            some others.
          </p>
        </li>
        <li>
          <h3>Podilsky Scientific Lyceum | Teachers assistant</h3>
          <p>November 2019 - Present | Vinnytsia, Ukraine </p>
          <ul>
            <li>
              Providing support to teachers and students in and outside the
              learning environment
            </li>
            <li>Communicating with parents</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
