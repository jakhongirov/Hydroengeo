import Image from "next/image";
import Link from "next/link";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/hydrogeology1.png";
import image1 from "../../assets/images/hydrogeology2.png";
import image2 from "../../assets/images/hydrogeology3.png";
import image3 from "../../assets/images/hydrogeology4.png";
import image4 from "../../assets/images/hydrogeology5.png";
import image5 from "../../assets/images/hydrogeology6.png";
import image6 from "../../assets/images/hydrogeology7.png";
import image7 from "../../assets/images/hydrogeology8.png";
import image8 from "../../assets/images/hydrogeology9.png";

function Hydrogeology() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { hydrogeology: hc },
  } = Content[lang];

  return (
    <secvtion className="hydrogeology">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading ">{hc.heading}</h1>
        </div>

        <div className="workers workers--padding">
          <div className="workers__card">
            <div className="avatar">
              <Image
                src={avatar}
                width="240"
                height="320"
                alt="Закиров Мансур Мавзирович"
              />
            </div>

            <table className="workers__info">
              <tbody>
                <tr className="workers__info-row">
                  <td>
                    <p>Ф.И.О.</p>
                  </td>
                  <td>Закиров Мансур Мавзирович</td>
                </tr>

                <tr className="workers__info-row">
                  <td>На должности:</td>
                  <td>С 1 февраля 2005 года </td>
                </tr>
                <tr className="workers__info-row">
                  <td>Должность:</td>
                  <td>Заведующий лабораторией</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="hydrogeology__info hydrogeology__info--padding-left hydrogeology__info--margin">
          {hc.services.title}
        </p>

        <p className="hydrogeology__info ">{hc.services.p1}</p>

        <p className="hydrogeology__info">{hc.services.secondaryTitle1} </p>

        <ul className="hydrogeology__service">
          <li className="">
            <p className="hydrogeology__info">{hc.services.s1} </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s2} </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s3}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s4}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s5}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s6}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s7}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s8}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s9}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s10}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s11}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s11}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s13}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s14}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s15}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.s16}</p>
          </li>
        </ul>

        <p className="hydrogeology__info">{hc.services.secondaryTitle2}</p>

        <ul className="hydrogeology__service hydrogeology__service--margin-bottom">
          <li className="">
            <p className="hydrogeology__info">{hc.services.r1}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r2}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r3}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r4}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r5}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r6}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r7}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r8}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r9}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r10}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r11}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.services.r12}</p>
          </li>
        </ul>

        <p className="hydrogeology__info hydrogeology__info--margin-big">
          {hc.paragraph1}
        </p>

        <div className="hydrogeology__images-box">
          <div className="image1-box">
            <Image className="image1" src={image1} alt="" width={540} height={408} />
          </div>
          <div className="image2-box">
            <Image className="image2" src={image2} alt="" width={540} height={406} />
          </div>
        </div>

        <p className="hydrogeology__info hydrogeology__info--margin-middle">
          {hc.paragraph2}
        </p>

        <div className="hydrogeology__images-box">
          <div className="image3-box">
            <Image className="image3" src={image3} alt="" width={554} height={727} />
          </div>
          <div className="image4-box">
            <Image className="image4" src={image4} alt="" width={540} height={727} />
          </div>
        </div>

        <h2 className="hydrogeology__info hydrogeology__info--bold">
          {hc.secondaryHeading1}
        </h2>

        <ul className="hydrogeology__service">
          <li className="">
            <p className="hydrogeology__info">
              1. <span className=" hydrogeology__info--padding-left"></span>{" "}
              {hc.paragraph3}
            </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">
              2. <span className=" hydrogeology__info--padding-left"></span>
              {hc.paragraph4}
            </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">
              3. <span className=" hydrogeology__info--padding-left"></span>
              {hc.paragraph5}
            </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">
              4. <span className=" hydrogeology__info--padding-left"></span>{" "}
              {hc.paragraph6}
            </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">
              5. <span className=" hydrogeology__info--padding-left"></span>{" "}
              {hc.paragraph7}
            </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">
              6. <span className=" hydrogeology__info--padding-left"></span>
              {hc.paragraph8}
            </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">
              7. <span className=" hydrogeology__info--padding-left"></span>{" "}
              {hc.paragraph9}
            </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">
              8. <span className=" hydrogeology__info--padding-left"></span>{" "}
              {hc.paragraph10}
            </p>
          </li>
        </ul>

        <h2 className="hydrogeology__info hydrogeology__info--bold">
          {hc.secondaryHeading2}
        </h2>

        <ul className="hydrogeology__service hydrogeology__service--margin-bottom">
          <li className="">
            <p className="hydrogeology__info">{hc.paragraph11}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">
              <p className="hydrogeology__info">{hc.paragraph12}</p>
            </p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.paragraph13}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.paragraph14}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.paragraph15}</p>
          </li>
          <li className="">
            <p className="hydrogeology__info">{hc.paragraph16}</p>
          </li>
        </ul>

        <p className="hydrogeology__info hydrogeology__info--margin-big ">
          {hc.paragraph17}
        </p>

        <h2 className="hydrogeology__info hydrogeology__info--bold hydrogeology__info--text hydrogeology__info--margin-small">
          {hc.secondaryHeading3}
        </h2>

        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph18}
        </p>

        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph19}
        </p>

        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph20}
        </p>

        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph21}
        </p>

        <div className="image5">
          <Image src={image5} alt="" width={1280} height={840} />
        </div>

        <h2 className="hydrogeology__info hydrogeology__info--text hydrogeology__info--bold hydrogeology__info--size hydrogeology__info--margin-bigest">
          {hc.secondaryHeading4}
        </h2>

        <div className="image6">
          <Image src={image6} alt="" width={1023} height={950} />
        </div>

        <h2 className="hydrogeology__info hydrogeology__info--bold hydrogeology__info--text">
          Условные обозначения
        </h2>

        <ul className="conventions__list">
          <li className="conventions__item">
            <span className="conventions__item-box conventions__item-box--blue"></span>
            <p className="hydrogeology__info hydrogeology__info--margin-small">
              Зона массивных пород
            </p>
          </li>

          <li className="conventions__item">
            <span className="conventions__item-box conventions__item-box--red"></span>
            <p className="hydrogeology__info hydrogeology__info--margin-small">
              Зона раздробленных участков (мелкоблочная, размеры обломков от 5х10х15см до
              10х15х10м)
            </p>
          </li>
          <li className="conventions__item">
            <span className="conventions__item-box conventions__item-box--yellow"></span>
            <p className="hydrogeology__info hydrogeology__info--margin-small">
              Зона сильнотрещиноватых пород (блочная с размерами обломков от 10х15х20м до
              40х50х60м)
            </p>
          </li>

          <li className="conventions__item">
            <span className="conventions__item-box conventions__item-box--image1"></span>
            <p className="hydrogeology__info hydrogeology__info--margin-small">
              Разломы (регионального значения) имеющие зоны дробления
            </p>
          </li>

          <li className="conventions__item">
            <span className="conventions__item-box conventions__item-box--image2"></span>
            <p className="hydrogeology__info hydrogeology__info--margin-small">
              Разломы (местного значения) имеющие небольшие зоны дробления
            </p>
          </li>
        </ul>

        <h2 className="hydrogeology__info hydrogeology__info--text hydrogeology__info--bold">
          {hc.secondaryHeading5}
        </h2>

        <p className="hydrogeology__info hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph22}
        </p>

        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph23}
        </p>

        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph24}
        </p>

        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph25}
        </p>

        <div className="hydrogeology__images-box hydrogeology__images-box--start hydrogeology__images-box--margin hydrogeology__images--mobile-flex">
          <div className="image7">
            <div className="image7 image7--margin-bottom">
              <Image
                className="image7-img"
                src={image7}
                alt=""
                width={428}
                height={625}
              />
            </div>
            <p className="hydrogeology__info hydrogeology__info--text">
              <strong>{hc.secondaryHeading6}</strong>
            </p>
          </div>

          <div className="image7 image8">
            <div className=" image7 image7 image7--margin-bottom">
              <Image src={image8} alt="" width={413} height={625} />
            </div>
            <p className="hydrogeology__info hydrogeology__info--text">
              <strong>{hc.secondaryHeading7}</strong>
            </p>
          </div>
        </div>

        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph26}
        </p>
        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph27}
        </p>
        <p className="hydrogeology__info hydrogeology__info--margin-small">
          {hc.paragraph28}
        </p>

        <div className="scientific__btn ">
          <Link href={"#header"}>
            <a className="cooperation__btn__link">
              <Image src={ScrollTop} alt="ScrollTop" width={80} height={80} />
            </a>
          </Link>
        </div>
      </div>
    </secvtion>
  );
}

export default Hydrogeology;
