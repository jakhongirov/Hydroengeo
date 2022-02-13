import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

function Activity() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { activity: ac },
  } = Content[lang];

  return (
    <section className="activity">
      <div className="container">
        <div className="activity__info-box">
          <h2 className="activity__info-box__heading">{ac.heading}</h2>

          <p className="activity__info-box__info">{ac.paragraph1}</p>

          <p className="activity__info-box__info">{ac.paragraph2}</p>

          <p className="activity__info-box__info">{ac.paragraph3}</p>
        </div>
      </div>
    </section>
  );
}

export default Activity;
