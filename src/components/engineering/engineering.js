import Image from "next/image";
import Link from "next/link";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

import Card from "../card/card";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/engineering-avatar.png";
import image1 from "../../assets/images/engineering1.png";
import image2 from "../../assets/images/engineering2.png";
import image3 from "../../assets/images/engineering3.png";
import image4 from "../../assets/images/engineering4.png";
import image5 from "../../assets/images/engineering5.png";
import image6 from "../../assets/images/engineering6.png";
import image7 from "../../assets/images/engineering7.png";
import image8 from "../../assets/images/engineering8.png";
import image9 from "../../assets/images/engineering9.png";
import image10 from "../../assets/images/engineering10.png";
import image11 from "../../assets/images/engineering11.png";
import image12 from "../../assets/images/engineering12.png";

function Engineering() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { engineering: ec },
  } = Content[lang];

  return (
    <section className="engineering">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading groundwater__heading--width">
            {ec.heading}
          </h1>
        </div>

        <Card
          avatar={avatar}
          name={"Абдурахманов Ботир Мирзапович"}
          date={" С 2 декабря 2019 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="engineering__info">{ec.services.title}</p>

        <ul className="">
          <li>
            <p className="engineering__info">{ec.services.s1}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s2}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s3}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s4}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s5}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s6}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s7}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s8}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s9}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s10}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s11}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s12}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s13}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s14}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.services.s15}</p>
          </li>
        </ul>

        <div className="image1">
          <Image src={image1} alt="map uzb" width={1280} height={740} />
        </div>

        <h2 className="engineering__info engineering__info--text engineering__info--bold">
          {ec.secondaryHeading1}
        </h2>

        <ul className="engineering__list engineering__list--margin-none">
          <li>
            <p className="engineering__info">{ec.paragraph1}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.paragraph2}</p>
          </li>

          <li>
            <p className="engineering__info">
              определение физико-механических свойств горных пород;. изучение
              гидрогеологических и инженерно-геологических условий рудных месторождений;
            </p>
          </li>

          <li>
            <p className="engineering__info">{ec.paragraph4}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.paragraph5}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.paragraph6}</p>
          </li>

          <li>
            <p className="engineering__info engineering__info--margin-none">
              {ec.paragraph7}
            </p>
          </li>
        </ul>

        <p className="engineering__info engineering__info--margin-none">
          {ec.paragraph8}
        </p>

        <p className="engineering__info engineering__info--margin-big">{ec.paragraph9}</p>

        <h2 className="engineering__info engineering__info--text engineering__info--bold">
          {ec.secondaryHeading2}
        </h2>

        <ul className="engineering__list">
          <li>
            <p className="engineering__info">{ec.paragraph10}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.paragraph11}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.paragraph12}</p>
          </li>

          <li>
            <p className="engineering__info">{ec.paragraph13}</p>
          </li>
        </ul>

        <div className="image2">
          <Image src={image2} alt="three-dimensional" width={1280} height={905} />
        </div>

        <p className="engineering__info">{ec.paragraph14}</p>

        <div className="engineering__images-box">
          <div className="image3">
            <Image
              className="image3"
              src={image3}
              alt="dry mountain"
              width={420}
              height={605}
            />
          </div>

          <div className="image4">
            <Image src={image4} alt="green mountain" width={720} height={605} />
          </div>
        </div>

        <div className="engineering__images-box">
          <div className="image5">
            <Image
              src={image5}
              alt="Fissure waters, mountains +720m, (m-e Guzhumsay)"
              width={580}
              height={350}
            />

            <p className="engineering__info engineering__info--margin-top engineering__info--margin-middle">
              <strong>{ec.photo1}</strong>
            </p>
          </div>

          <div className="image6">
            <Image
              src={image6}
              alt="Collapse on the right wall of mine workings (sectionKhodzhadyk)"
              width={580}
              height={350}
            />

            <p className="engineering__info engineering__info--margin-top engineering__info--margin-middle">
              <strong>{ec.photo2}</strong>
            </p>
          </div>
        </div>

        <div className="engineering__images-box">
          <div className="image7">
            <Image
              src={image7}
              alt="Encountering fissure waters, mountains. +600m,(Guzhumsay deposit)"
              width={580}
              height={400}
            />

            <p className="engineering__info engineering__info--margin-top engineering__info--margin-middle">
              <strong>{ec.photo3}</strong>
            </p>
          </div>

          <div className="image8">
            <Image
              src={image8}
              alt="Breakout on the roof of mine workings (Khodzhadyk site)"
              width={580}
              height={400}
            />

            <p className="engineering__info engineering__info--margin-top engineering__info--margin-middle">
              <strong>{ec.photo4}</strong>
            </p>
          </div>
        </div>

        <h3 className="secondary-heading">{ec.paragraph15}</h3>

        <div className="engineering__images-box">
          <div className="image9">
            <Image src={image9} alt="rocky high mountain 1" width={590} height={650} />
          </div>

          <div className="image10">
            <Image src={image10} alt="rocky high mountain 2" width={540} height={650} />
          </div>
        </div>

        <p className="engineering__info">{ec.paragraph16}</p>

        <div className="engineering__images-box">
          <div className="image11">
            <Image src={image11} alt="use laptop" width={605} height={490} />
          </div>

          <div className="image12">
            <Image src={image12} alt="work in mountain" width={575} height={490} />
          </div>
        </div>

        <h2 className="engineering__info engineering__info--text engineering__info--bold">
          {ec.secondaryHeading3}
        </h2>

        <p className="engineering__info">{ec.paragraph17}</p>

        <p className="engineering__info">{ec.paragraph18}</p>

        <h2 className="engineering__info engineering__info--text engineering__info--bold">
          {ec.secondaryHeading4}
        </h2>

        <p className="engineering__info">{ec.paragraph19}</p>

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

export default Engineering;
