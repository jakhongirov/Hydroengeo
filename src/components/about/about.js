import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

function AboutPage() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { about_page },
  } = Content[lang];

  return (
    <section className="about">
      <div className="container">
        <div className="about__info-box">
          <h2 className="about__info-box__heading">{about_page.heading}</h2>

          <p className="about__info-box__info">
            <strong className="about__info-box__info__title">
              {about_page.text1.title}{" "}
            </strong>
            {about_page.text1.body}
          </p>

          <p className="about__info-box__info">
            <strong className="about__info-box__info__title">
              {about_page.text2.title}{" "}
            </strong>
            {about_page.text2.body}
          </p>

          <p className="about__info-box__info">
            <strong className="about__info-box__info__title">
              {about_page.text3.title}{" "}
            </strong>
            {about_page.text3.body}
          </p>

          <p className="about__info-box__info">
            <strong className="about__info-box__info__title">
              {about_page.text4.title}{" "}
            </strong>
            {about_page.text4.body}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
