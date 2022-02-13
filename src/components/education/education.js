import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

import firstImg from "../../assets/images/education1.jpg";
import secondImg from "../../assets/images/education2.jpg";

function Education() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { education: ed },
  } = Content[lang];

  return (
    <section className="education">
      <div className="container">
        <div className="education__info-box">
          <h2 className="education__info-box__heading">{ed.heading}</h2>

          <p className="education__info-box__info">{ed.paragraph1}</p>

          <p className="education__info-box__info">
            {ed.paragraph2}
            <br />
            {ed.paragraph3}
            <br />
            {ed.paragraph4}
            <br />
          </p>

          <p className="education__info-box__info education__info-box__info--margin">
            {ed.paragraph5}
            <br />
            {ed.paragraph6}
            <br />
            {ed.paragraph7}
          </p>

          <div className="education__img-box">
            <Image
              className="education__img-box__img"
              src={secondImg}
              alt="education1"
              width="540"
              height="360"
            />
            <Image
              className="education__img-box__img"
              src={firstImg}
              alt="education2"
              width="540"
              height="360"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
