import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/ameliorative1.jpg";
import image1 from "../../assets/images/ameliorative2.png";
import image2 from "../../assets/images/ameliorative3.png";
import image3 from "../../assets/images/ameliorative4.png";
import image4 from "../../assets/images/ameliorative5.png";
import image5 from "../../assets/images/ameliorative6.png";
import image6 from "../../assets/images/ameliorative7.png";
import image7 from "../../assets/images/ameliorative8.png";
import image8 from "../../assets/images/ameliorative9.png";
import image9 from "../../assets/images/ameliorative10.png";
import image10 from "../../assets/images/ameliorative11.png";
import image11 from "../../assets/images/ameliorative12.png";
import image12 from "../../assets/images/ameliorative13.png";
import image13 from "../../assets/images/ameliorative14.png";
import image14 from "../../assets/images/ameliorative15.png";
import image15 from "../../assets/images/ameliorative16.png";
import image16 from "../../assets/images/ameliorative17.png";
import image17 from "../../assets/images/ameliorative18.png";
import image18 from "../../assets/images/ameliorative19.png";
import image19 from "../../assets/images/ameliorative20.png";
import image20 from "../../assets/images/ameliorative21.png";
import image21 from "../../assets/images/ameliorative22.png";
import image22 from "../../assets/images/ameliorative23.png";
import image23 from "../../assets/images/ameliorative24.png";

import image24 from "../../assets/images/ameliorative25.png";
import image24_1 from "../../assets/images/ameliorative25-2.png";
import image24_2 from "../../assets/images/ameliorative25-1.png";

import image25 from "../../assets/images/ameliorative26.png";
import image25_1 from "../../assets/images/ameliorative26-1.png";
import image25_2 from "../../assets/images/ameliorative26-2.png";

function Ameliorative() {
  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { ameliorative: ac },
  } = Content[lang];

  const [width, setWidth] = useState(350);
  const [height, setHeight] = useState(250);

  const [height2, setHeight2] = useState(230);
  const [width2, setWidth2] = useState(430);

  const [width3, setWidth3] = useState(640);
  const [height3, setHeight3] = useState(430);

  const [width4, setWidth4] = useState(360);
  const [height4, setHeight4] = useState(430);

  const [width5, setWidth5] = useState(380);
  const [height5, setHeight5] = useState(215);

  const [width6, setWidth6] = useState(410);
  const [height6, setHeight6] = useState(307);

  const [width7, setWidth7] = useState(500);
  const [height7, setHeight7] = useState(375);

  useEffect(() => {
    if (window.innerWidth <= 1110) {
      setHeight(380);
      setWidth(540);

      setWidth2(540);
      setHeight2(300);

      setWidth3(540);
      setHeight3(360);

      setWidth4(540);
      setHeight4(480);

      setWidth5(540);
      setHeight5(300);

      setWidth6(540);
      setHeight6(406);

      setWidth6(540);
      setHeight6(406);

      setWidth7(540);
      setHeight7(380);
    } else if (window.innerWidth <= 495) {
      setWidth4(350);
    }
  }, []);

  return (
    <section className="ameliorative">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading">{ac.heading}</h1>
        </div>

        <div className="workers workers--padding">
          <div className="workers__card">
            <div className="avatar">
              <Image
                src={avatar}
                width="240"
                height="320"
                alt="Мирюсупов Фазлиддин Мухитдинович"
              />
            </div>

            <table className="workers__info">
              <tbody>
                <tr className="workers__info-row">
                  <td>
                    <p>Ф.И.О.</p>
                  </td>
                  <td>Мирюсупов Фазлиддин Мухитдинович</td>
                </tr>

                <tr className="workers__info-row">
                  <td>На должности:</td>
                  <td>С 1 декабря 2015 года </td>
                </tr>
                <tr className="workers__info-row">
                  <td>Должность:</td>
                  <td>Заведующий лабораторией </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="ameliorative__services">
          <p className="ameliorative__services__title">{ac.services}</p>
          <ul className="ameliorative__services__list">
            <li className="ameliorative__services__item">{ac.services1}</li>
            <li className="ameliorative__services__item">{ac.services2}</li>
          </ul>
        </div>

        <p className="ameliorative__info">
          {ac.paragraph1}
          <br />
          <span className="ameliorative__info__span">{ac.paragraph2}</span>
        </p>

        <ul className="developed__list">
          <li className="developed__item developed__item--mobile-margin">
            <Image
              className="image1"
              src={image1}
              alt="Developed territories with favorable conditions for melioration"
              width={width}
              height={height}
            />
            <p className="ameliorative__info">{ac.territory1}</p>
          </li>

          <li className="developed__item developed__item--mobile-margin">
            <Image
              className="image1"
              src={image2}
              alt="Developed territories with poor training"
              width={width}
              height={height}
            />
            <p className="ameliorative__info">{ac.territory2}</p>
          </li>

          <li className="developed__item developed__item--mobile-margin">
            <Image
              className="image1"
              src={image3}
              alt="Territories subject to secondary salinization processes"
              width={width}
              height={height}
            />
            <p className="ameliorative__info">{ac.territory3}</p>
          </li>
        </ul>

        <p className="ameliorative__info ameliorative__info--margin">{ac.paragraph3}</p>

        <ul className="ameliorative__services__list">
          <li className="ameliorative__services__item">{ac.activity1}</li>
          <li className="ameliorative__services__item">{ac.activity2}</li>
          <li className="ameliorative__services__item">{ac.activity3}</li>
        </ul>

        <ul className="developed__list developed__list--flex">
          <li className="developed__item developed__item--width">
            <Image
              src={image4}
              alt="The previously used approach, without taking into account the processes in the aeration zone"
              width={width2}
              height={height2}
            />
            <p className="">{ac.activity4}</p>
          </li>

          <li className="developed__item developed__item--width">
            <Image
              src={image5}
              alt="Physical and chemical processes in the aeration zone and their relationship with groundwater"
              width={width2}
              height={height2}
            />
            <p className="">{ac.activity5}</p>
          </li>
        </ul>

        <ul className="developed__list developed__list--flex">
          <li className="developed__item developed__item--width">
            <Image
              src={image6}
              alt="The structure of the test site model"
              width={width}
              height={height}
            />
            <p className="">{ac.activity6}</p>
          </li>

          <li className="developed__item developed__item--width">
            <div className="image7">
              <Image
                className="image7"
                src={image7}
                alt="Groundwater levels from simulation results"
                width={238}
                height={307}
              />
            </div>
            <p className="ameliorative__info ameliorative__info--text">{ac.activity7}</p>
          </li>
        </ul>

        <div className="territories">
          <h2 className="territories__heading">{ac.secondaryHeading1}</h2>
          <Image
            src={image8}
            alt="Territories of the Republic of Uzbekistan subject to salinization processes"
            width={1280}
            height={762}
          />
          <p className="ameliorative__info ameliorative__info--margin ameliorative__info--mobile-bold">
            {ac.paragraph4}
          </p>
        </div>

        <div className="developed__list developed__list--width">
          <div className="image9">
            <Image src={image9} alt="water motor" width={width3} height={height3} />
          </div>
          <div className="image10">
            <Image src={image10} alt="thin water" width={304} height={427} />
          </div>
        </div>

        <p className="ameliorative__info ameliorative__info--margin">{ac.paragraph5}</p>

        <p className="ameliorative__info ameliorative__info--margin-many">
          {ac.paragraph6}
        </p>

        <div className="developed__list developed__list">
          <div className="developed__item developed__item--width">
            <Image
              src={image11}
              alt="Laying a perforated pipe at the bottom of a trench at the Damkhuja site"
              width={width}
              height={height}
            />
            <p className="ameliorative__info">{ac.models1}</p>
          </div>

          <div className="">
            <ul className="developed__list">
              <li className="developed__item--mobile-margin-small">
                <Image
                  src={image12}
                  alt="Stills from a video filmed inside the intake gallery"
                  width={width5}
                  height={height5}
                />
              </li>
              <li className="developed__item--margin">
                <Image
                  src={image13}
                  alt="stills from a video filmed inside the intake gallery2"
                  width={width5}
                  height={height5}
                />
              </li>
            </ul>
            <p className="ameliorative__info ameliorative__info--text developed__item--mobile-margin-small">
              {ac.models2}
            </p>
          </div>
        </div>

        <p className="ameliorative__info ameliorative__info--margin">{ac.paragraph7}</p>

        <ul className="developed__list--block">
          <li className="developed__item--width">
            <Image
              src={image14}
              alt="Damhuzh work site"
              width={width6}
              height={height6}
            />
            <p className="ameliorative__info ameliorative__info--margin  ameliorative__info--text">
              {ac.workspace1}
            </p>
          </li>

          <li className="developed__item--width developed__item--margin-left">
            <Image
              src={image15}
              alt="Work site Akkishlak"
              width={width6}
              height={height6}
            />
            <p className="ameliorative__info ameliorative__info--margin ameliorative__info--text">
              {ac.workspace2}
            </p>
          </li>
        </ul>

        <h2 className="ameliorative__info ameliorative__info--margin ameliorative__info--mobile-text">
          {ac.secondaryHeading2}
        </h2>

        <div className="developed__list--block">
          <div className="middle-box">
            <div className="image16">
              <Image
                src={image16}
                alt="Akkishlak site."
                width={width4}
                height={height4}
              />
            </div>
            <p className="ameliorative__info ameliorative__info--mobile-text ameliorative__info--mobile-none-text">
              {ac.ditch1T}
              <br />
              {ac.ditch1}
            </p>
          </div>

          <ul className="developed__list--block developed__list--margin-left ">
            <li className="developed__item developed__item--mobile-margin-small">
              <div className="developed__item--margin-bottom developed__item--mobile-margin-small">
                <Image
                  className=""
                  src={image17}
                  alt="Damhoja area"
                  width={width2}
                  height={height2}
                />
              </div>
              <Image src={image18} alt="Damhoja area 2" width={width2} height={height2} />
            </li>

            <li className="developed__item--margin-small">
              <div className="developed__item--margin-small developed__item--margin-bottom">
                <Image src={image19} alt="" width={width2} height={height2} />
              </div>
              <p className="developed__item--margin-small ameliorative__info--width">
                {ac.ditch2}
              </p>
            </li>
          </ul>
        </div>

        <h2 className="ameliorative__info ameliorative__info--margin desktop">
          {ac.secondaryHeading3}
        </h2>

        <div className="developed__list--block desktop">
          <div className="">
            <Image
              className="bottom-box__img"
              src={image20}
              alt="water consumption,"
              width={width7}
              height={height7}
            />
            <p className="">
              <strong className="ameliorative__info ameliorative__info--margin-little">
                {ac.expenseH}
              </strong>
            </p>

            <p className="ameliorative__info">{ac.expenseP}</p>
          </div>

          <div className="bottom-box">
            <Image src={image21} alt="Aksu section" width={width7} height={height7} />
            <p className="ameliorative__info ameliorative__info--margin-big ameliorative__info--mobile-margin">
              {ac.aksu}
            </p>
          </div>
        </div>

        <div className="mobile">
          <div className="image21 developed__item--mobile-margin-small">
            <Image src={image21} alt="Aksu section" width={width} height={height} />
          </div>
          <div className="image20">
            {" "}
            <Image
              className="bottom-box__img"
              src={image20}
              alt="water consumption"
              width={width}
              height={height}
            />
          </div>
          <p className="ameliorative__info ameliorative__info--mobile-margin-big">
            {ac.secondaryHeading3}
          </p>
          <p className="ameliorative__info">
            <strong className="ameliorative__info ameliorative__info--margin-little">
              {ac.expenseH}
            </strong>
          </p>
          <p className="ameliorative__info">{ac.expenseP}</p>
          <p className="ameliorative__info ameliorative__info--margin-big ameliorative__info--mobile-margin">
            {ac.aksu}
          </p>
        </div>

        <div className="developed__list--margin developed__list--block developed__item--mobile-margin-small">
          <div className="developed__item--mobile-margin-small">
            <Image
              src={image22}
              alt="Gallery construction"
              width={width}
              height={height}
            />
          </div>
          <div className="developed__item--margin-left">
            <Image src={image23} alt="map construction" width={width} height={height2} />
            <p className="ameliorative__info">{ac.gallery}</p>
          </div>
        </div>

        <h2 className="ameliorative__info ameliorative__info--margin">
          {ac.secondaryHeading4}
        </h2>

        <div className="desktop--block">
          <Image
            src={image24}
            alt="3D modeling of hydrogeological processes1 2"
            width={1280}
            height={630}
          />
        </div>

        <div className="mobile">
          <Image
            src={image24_1}
            alt="3D modeling of hydrogeological processes1"
            width={540}
            height={532}
          />
          <p className="ameliorative__info">{ac.mobileHeading}</p>
          <Image
            src={image24_2}
            alt="3D modeling of hydrogeological processes2"
            width={540}
            height={510}
          />
        </div>

        <h2 className="ameliorative__info ameliorative__info--text ameliorative__info--margin">
          {ac.modelling}
        </h2>

        <ul className="ameliorative__services__list">
          <li className="ameliorative__services__item">{ac.modelling1}</li>
          <li className="ameliorative__services__item">{ac.modelling2}</li>
          <li className="ameliorative__services__item">{ac.modelling3}</li>
        </ul>

        <div className="desktop--block">
          <Image
            src={image25}
            alt="3D modeling of hydrogeological processes 3 4"
            width={1280}
            height={500}
          />
        </div>

        <div className="mobile">
          <Image
            src={image25_1}
            alt="3D modeling of hydrogeological processes 3"
            width={540}
            height={420}
          />
          <Image
            src={image25_2}
            alt=" 3D modeling of hydrogeological processes4"
            width={540}
            height={435}
          />
        </div>

        <div className="scientific__btn ">
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

export default Ameliorative;
