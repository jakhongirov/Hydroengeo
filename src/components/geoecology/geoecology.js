import Image from "next/image";
import Link from "next/link";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

import Card from "../card/card";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/geoecology-avatar.png";
import image1 from "../../assets/images/geoecology1.png";
import image2 from "../../assets/images/geoecology2.png";
import image3 from "../../assets/images/geoecology3.png";
import image4 from "../../assets/images/geoecology4.png";
import image5 from "../../assets/images/geoecology5.png";
import image6 from "../../assets/images/geoecology6.png";
import image7 from "../../assets/images/geoecology7.png";
import image8 from "../../assets/images/geoecology8.png";
import image9 from "../../assets/images/geoecology9.png";
import image10 from "../../assets/images/geoecology10.png";
import image11 from "../../assets/images/geoecology11.png";
import image12 from "../../assets/images/geoecology12.png";
import image13 from "../../assets/images/geoecology13.png";
import image14 from "../../assets/images/geoecology14.png";
import image15 from "../../assets/images/geoecology15.png";
import image16 from "../../assets/images/geoecology16.png";
import image17 from "../../assets/images/geoecology17.png";
import image18 from "../../assets/images/geoecology18.png";
import image19 from "../../assets/images/geoecology19.png";

function Geoecology() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { geoecology: gc },
  } = Content[lang];

  return (
    <section className="geoecology">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading groundwater__heading--width">
            {gc.heading}
          </h1>
        </div>

        <Card
          avatar={avatar}
          name={"Жураев Марифали Тургунбаевич"}
          date={"С 1 марта 2013 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="geoecology__info geoecology__info--padding">{gc.services.title}</p>

        <ul className="geoecology__list">
          <li className="">
            <p className="geoecology__info">{gc.services.s1}</p>
          </li>
          <li className="">
            <p className="geoecology__info">{gc.services.s2}</p>
          </li>
          <li className="">
            <p className="geoecology__info">{gc.services.s3}</p>
          </li>
          <li className="">
            <p className="geoecology__info">{gc.services.s4}</p>
          </li>
        </ul>

        <div className="geoecology__images-box">
          <div className="image1">
            <Image src={image1} alt="Horiba" width={588} height={525} />
          </div>
          <div className="image2">
            <Image src={image2} alt="Horiba-U54G" width={570} height={525} />
          </div>
        </div>

        <p className="geoecology__info">{gc.paragraph1}</p>

        <h2 className="geoecology__info geoecology__info--bold">
          {gc.secondaryHeading1}
        </h2>

        <ul className="">
          <li className="">
            <p className="geoecology__info">
              1. <strong>{gc.paragraph2}</strong> <br />
              {gc.paragraph3}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info">
              2. <strong>{gc.paragraph4}</strong> <br />
              {gc.paragraph5}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info">
              3. <strong>{gc.paragraph6}</strong>
              {gc.paragraph7}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info">
              4. <strong>{gc.paragraph8}</strong>
              {gc.paragraph9}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              <strong>{gc.strong}</strong>
              {gc.paragraph10}
            </p>
          </li>
        </ul>

        <p className="geoecology__info geoecology__info--margin-small">
          {gc.secondaryHeading2}
        </p>

        <ul className="">
          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r1}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r2}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r3}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r4}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r5}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r6}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r7}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r8}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r9}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r10}
            </p>
          </li>
        </ul>

        <div className="image3">
          <Image src={image3} alt="map uzb1" width={1280} height={881} />
        </div>

        <div className="image4">
          <Image src={image4} alt="map part" width={500} height={730} />
        </div>

        <div className="geoecology__images-box">
          <div className="image5">
            <Image src={image5} alt="map half" width={570} height={680} />
          </div>
          <div className="image6">
            <Image src={image6} alt="map 0.5" width={630} height={680} />
          </div>
        </div>

        <ul className="">
          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r11}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r12}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r13}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r14}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r15}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r16}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r17}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.results.r18}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info ">{gc.results.r19}</p>
          </li>
        </ul>

        <p className="geoecology__info">
          <strong>{gc.paragraph11}</strong>
        </p>

        <div className="geoecology__images-box">
          <div className="image7">
            <Image
              src={image7}
              alt="Map of the anionic composition of groundwater in the Republic of Uzbekistan"
              width={640}
              height={413}
            />
            <p className="geoecology__info geoecology__info--text">{gc.map1alt}</p>
          </div>
          <div className="image8">
            <Image
              src={image8}
              alt="Map of groundwater mineralization in the Republic of Uzbekistan"
              width={640}
              height={413}
            />
            <p className="geoecology__info geoecology__info--text">{gc.map2alt}</p>
          </div>
        </div>

        <div className="image9">
          <Image
            src={image9}
            alt="Map of the cation composition for the Republic of Uzbekistan"
            width={665}
            height={413}
          />
          <p className="geoecology__info">{gc.map3alt}</p>
        </div>

        <p className="geoecology__info">
          <strong>{gc.secondaryHeading3}</strong>
        </p>

        <div className="geoecology__images-box">
          <div className="image10">
            <Image
              src={image10}
              alt="Technological scheme of operation of the intercepting system during the injection of captured waters"
              width={560}
              height={397}
            />
            <p className="geoecology__info">{gc.map4alt}</p>
          </div>
          <div className="image11">
            <Image
              src={image11}
              alt="Localization and elimination of oil pollution of groundwater"
              width={620}
              height={397}
            />
            <p className="geoecology__info">{gc.map5alt}</p>
          </div>
        </div>

        <div className="geoecology__images-box">
          <div className="image12">
            <Image
              src={image12}
              alt="Schematic map of the intercepting system of an oil terminal"
              width={507}
              height={343}
            />
            <p className="geoecology__info">{gc.map6alt}</p>
          </div>
          <div className="image13">
            <Image
              src={image13}
              alt="Schematic diagram of stepwise adsorption treatment of wastewater from oil products"
              width={526}
              height={343}
            />
            <p className="geoecology__info">{gc.map7alt}</p>
          </div>
        </div>

        <p className="geoecology__info">{gc.paragraph12}</p>

        <p className="geoecology__info">{gc.secondaryHeading4}</p>

        <ul className="">
          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.paragraph13}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.paragraph14}
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              {gc.paragraph15}
            </p>
          </li>
        </ul>

        <div className="geoecology__images-box--flex">
          <div className="image14">
            <Image
              src={image14}
              alt="Requirement for hydrogeological"
              width={400}
              height={609}
            />
          </div>
          <div className="image15">
            <Image
              src={image15}
              alt="The requirement for hydrogeological and engineering-geological studies to assess the territory for the possible creation of underground oil storages (UGS) and gas storages (UGS)"
              width={400}
              height={609}
            />
          </div>
          <div className="image16">
            <Image
              src={image16}
              alt="Methodological recommendation for conducting geological and environmental monitoring and audit"
              width={400}
              height={609}
            />
          </div>
        </div>

        <p className="geoecology__info geoecology__info--margin-none">
          <span className=""></span>
          {gc.paragraph16}
        </p>

        <p className="geoecology__info">
          <span className=""></span>
          {gc.paragraph17}
        </p>

        <div className="image17">
          <Image src={image17} alt="photo team" width={1280} height={712} />
        </div>

        <div className="image18">
          <Image src={image18} alt="team work" width={1280} height={730} />
        </div>

        <div className="image19">
          <Image src={image19} alt="workers" width={1280} height={720} />
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

export default Geoecology;
