import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

function Politics() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { politics_page },
  } = Content[lang];

  return (
    <section className="politics">
      <div className="container">
        <div className="politics__info-box">
          <h2 className="politics__info-box__heading">{politics_page.heading}</h2>

          <p className="politics__info-box__info">{politics_page.text1}</p>

          <p className="politics__info-box__info">{politics_page.text2}</p>

          <p className="politics__info-box__info">{politics_page.text3}</p>

          <p className="politics__info-box__info">{politics_page.text4}</p>
        </div>
      </div>
    </section>
  );
}

export default Politics;
