import Link from "next/link";
import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

import ScrollTop from "../../assets/images/ScrollTop.svg";

function Scientific() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { scientific: sc },
  } = Content[lang];

  return (
    <section className="scientific">
      <div className="container">
        <div className="scientific__info-box">
          <h2 className="scientific__info-box__heading">{sc.heading}</h2>
          <p className="scientific__info-box__info">
            <strong>{sc.heading}</strong>
          </p>

          <p className="scientific__info-box__info">{sc.list1_name}</p>

          <ul className="scientific__list">
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item1}</p>
            </li>
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item2}</p>
            </li>
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item3}</p>
            </li>
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item4}</p>
            </li>
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item5}</p>
            </li>
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item6}</p>
            </li>
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item7}</p>
            </li>
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item8}</p>
            </li>
            <li className="">
              <p className="scientific__info-box__info">{sc.list1_item6}</p>
            </li>
          </ul>

          <p className="scientific__info-box__info">{sc.list2_name}</p>

          <ul className="scientific__list">
            <li>
              <p className="scientific__info-box__info">{sc.list2_item1}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list2_item2}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list2_item3}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list2_item4}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list2_item5}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list2_item6}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list2_item7}</p>
            </li>
          </ul>

          <p className="scientific__info-box__info scientific__info-box__info--margin">
            {sc.paragraph1}
          </p>

          <p className="scientific__info-box__info">{sc.list3_name}</p>

          <ul className="scientific__list">
            <li>
              <p className="scientific__info-box__info">{sc.list3_item1}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list3_item2}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list3_item3}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list3_item4}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list3_item5}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list3_item6}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list3_item7}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list3_item8}</p>
            </li>
          </ul>

          <p className="scientific__info-box__info">{sc.list4_name}</p>

          <ul className="scientific__list">
            <li>
              <p className="scientific__info-box__info">{sc.list4_item1}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item2}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item3}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item4}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item5}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item6}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item7}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item8}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item9}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item10}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item11}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item12}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item13}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item14}</p>
            </li>
            <li>
              <p className="scientific__info-box__info">{sc.list4_item15}</p>
            </li>
          </ul>
        </div>

        <div className="scientific__btn">
          <Link href={"#header"}>
            <a className="scientific__btn__link">
              <Image src={ScrollTop} alt="ScrollTop" width="80" height="80" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Scientific;
