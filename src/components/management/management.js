import Link from "next/link";
import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

import ScrollTop from "../../assets/images/ScrollTop.svg";

function Management() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { history_page },
  } = Content[lang];

  return (
    <section className="management">
      <div className="container">
        <div className="management__info-box">
          <h2 className="management__info-box__heading">{history_page.heading}</h2>

          <p className="management__info-box__info">{history_page.text1}</p>

          <p className="management__info-box__info">{history_page.text2}</p>

          <p className="management__info-box__info">
            <strong>{history_page.title1}</strong> {history_page.text3}
          </p>

          <p className="management__info-box__info">{history_page.text4}</p>

          <p className="management__info-box__info">{history_page.text5}</p>

          <p className="management__info-box__info">{history_page.text6}</p>

          <p className="management__info-box__info">
            <strong>{history_page.title2}</strong> {history_page.text7}
          </p>

          <p className="management__info-box__info">
            <strong>{history_page.title3}</strong>
          </p>

          <p className="management__info-box__info">{history_page.text8}</p>
        </div>

        <div className="management__btn">
          <Link href={"#header"}>
            <a className="management__btn__link">
              <Image src={ScrollTop} alt="ScrollTop" width="80" height="80" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Management;
