import Link from "next/link";
import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

import ScrollTop from "../../assets/images/ScrollTop.svg";

function Cooperation() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { cooperation_page },
  } = Content[lang];

  return (
    <section className="cooperation">
      <div className="container">
        <div className="cooperation__info-box">
          <h2 className="cooperation__info-box__heading">{cooperation_page.heading}</h2>

          <strong className="cooperation__info-box__title">
            {" "}
            {cooperation_page.title}
          </strong>

          <p className="cooperation__info-box__info">{cooperation_page.text1}</p>

          <p className="cooperation__info-box__info">{cooperation_page.text2}</p>

          <p className="cooperation__info-box__info">{cooperation_page.text3}</p>

          <p className="cooperation__info-box__info">{cooperation_page.text4}</p>

          <p className="cooperation__info-box__info">{cooperation_page.text5}</p>

          <p className="cooperation__info-box__info">{cooperation_page.text6}</p>

          <p className="cooperation__info-box__info">{cooperation_page.text7}</p>

          <p className="cooperation__info-box__info">{cooperation_page.text8}</p>

          <p className="cooperation__info-box__info">{cooperation_page.text9}</p>
        </div>

        <div className="cooperation__btn">
          <Link href={"#header"}>
            <a className="cooperation__btn__link">
              <Image src={ScrollTop} alt="ScrollTop" width="80" height="80" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cooperation;
