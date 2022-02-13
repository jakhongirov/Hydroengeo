import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

// Images
import Lexuz from "../../assets/images/lexuz.png";
import President from "../../assets/images/president.png";
import Portal from "../../assets/images/portal.png";

const Normatives = () => {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { normative_page },
  } = Content[lang];

  return (
    <>
      <section id="normatives">
        <div className="small-container">
          <h1 className="heading">{normative_page.heading}</h1>
          <ul className="bases-list">
            <li className="bases__item">
              <div className="bases__img-wrapper">
                <Image src={Lexuz} width="328" height="98" alt="Lexuz" />
              </div>

              <p className="bases__text w-335">{normative_page.lexuz}</p>
            </li>

            <li className="bases__item">
              <div className="bases__img-wrapper">
                <Image src={President} width="352" height="121" alt="Lexuz" />
              </div>

              <p className="bases__text">{normative_page.resolutions}</p>
            </li>

            <li className="bases__item">
              <div className="bases__img-wrapper">
                <Image src={Portal} width="353" height="109" alt="Lexuz" />
              </div>

              <p className="bases__text">{normative_page.ministers}</p>
            </li>
          </ul>
          <div className="regulations">
            <span>{normative_page.rules}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Normatives;

// 1480
