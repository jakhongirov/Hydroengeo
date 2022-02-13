import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

import Card from "../card/card";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/modeling-avatar.png";
import image1 from "../../assets/images/modeling1.png";
import image2 from "../../assets/images/modeling2.png";
import image3 from "../../assets/images/modeling3.png";
import image4 from "../../assets/images/modeling4.png";
import image5 from "../../assets/images/modeling5.png";
import image6 from "../../assets/images/modeling6.png";
import image7 from "../../assets/images/modeling7.png";
import image8 from "../../assets/images/modeling8.png";
import image9 from "../../assets/images/modeling9.png";
import image10 from "../../assets/images/modeling10.png";
import image11 from "../../assets/images/modeling11.png";
import image12 from "../../assets/images/modeling12.png";
import image13 from "../../assets/images/modeling13.png";
import image14 from "../../assets/images/modeling14.png";
import image15 from "../../assets/images/modeling15.png";
import image16 from "../../assets/images/modeling16.png";
import image17 from "../../assets/images/modeling17.png";
import image18 from "../../assets/images/modeling18.png";
import image19 from "../../assets/images/modeling19.png";
import image20 from "../../assets/images/modeling20.png";
import image21 from "../../assets/images/modeling21.png";
import image22 from "../../assets/images/modeling22.png";
import image23 from "../../assets/images/modeling23.png";
import image24 from "../../assets/images/modeling24.png";
import image25 from "../../assets/images/modeling25.png";
import image26 from "../../assets/images/modeling26.png";
import image27 from "../../assets/images/modeling27.png";
import image28 from "../../assets/images/modeling28.png";
import image29 from "../../assets/images/modeling29.png";
import image30 from "../../assets/images/modeling30.png";
import image31 from "../../assets/images/modeling31.png";
import image32 from "../../assets/images/modeling32.png";
import image33 from "../../assets/images/modeling33.png";
import image34 from "../../assets/images/modeling34.png";
import image35 from "../../assets/images/modeling35.png";
import image36 from "../../assets/images/modeling36.png";
import image37 from "../../assets/images/modeling37.png";
import image38 from "../../assets/images/modeling38.png";
import image39 from "../../assets/images/modeling39.png";
import image40 from "../../assets/images/modeling40.png";
import image41 from "../../assets/images/modeling41.png";
import image42 from "../../assets/images/modeling42.png";
import image43 from "../../assets/images/modeling43.png";
import image44 from "../../assets/images/modeling44.png";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

function Modeling() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { modeling: mc },
  } = Content[lang];

  return (
    <section className="modeling">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading">{mc.heading}</h1>
        </div>

        <Card
          avatar={avatar}
          name={"Хушвактов Сайдулла Холбазарович"}
          date={"С 14 октября 2016 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="modeling__info modeling__info--padding-left modeling__info--margin">
          {mc.services.title}
        </p>

        <ul className="modeling__methods-list">
          <li className="">
            <p className="modeling__info">{mc.services.s1}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.services.s2}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.services.s3}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.services.s4}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.services.s5}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.services.s6}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.services.s7}</p>
          </li>
        </ul>

        <h2 className="modeling__info modeling__info--margin-small">
          {mc.objectives.title}
        </h2>

        <ul className="modeling__methods-list">
          <li className="modeling__info">{mc.objectives.o1}</li>

          <li className="modeling__info">{mc.objectives.o2}</li>

          <li className="modeling__info">{mc.objectives.o3}</li>

          <li className="modeling__info">{mc.objectives.o4}</li>

          <li className="modeling__info">{mc.objectives.o5}</li>

          <li className="modeling__info">{mc.objectives.o6}</li>

          <li className="modeling__info">{mc.objectives.o7}</li>

          <li className="modeling__info">{mc.objectives.o8}</li>

          <li className="modeling__info">{mc.objectives.o9}</li>
        </ul>

        <h2 className="modeling__info modeling__info--margin-small">
          {mc.results.title}
        </h2>

        <p className="modeling__info modeling__info--margin-small">{mc.results.r1}</p>

        <p className="modeling__info">
          {mc.results.r2}
          <br />
          {mc.results.r3}
        </p>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image1} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image2} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image3} alt="" width={420} height={300} />
          </div>
        </div>

        <div className="modeling__images-box modeling__info--margin-small">
          <div className="">
            <Image className="" src={image4} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image5} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image6} alt="" width={420} height={300} />
          </div>
        </div>

        <p className="modeling__info modeling__info--margin-small">{mc.results.r4}</p>

        <p className="modeling__info">
          {mc.results.r5} <br />
          {mc.results.r6}
        </p>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image7} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image8} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image9} alt="" width={420} height={300} />
          </div>
        </div>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image10} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image11} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image12} alt="" width={420} height={300} />
          </div>
        </div>

        <p className="modeling__info">{mc.results.r7}</p>

        <p className="modeling__info">
          {mc.results.r8}
          <br />
          {mc.results.r9}
          <br />
          {mc.results.r10} <br />
          {mc.results.r11}
          <br />
          {mc.results.r12}
          <br />
        </p>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image13} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image14} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image15} alt="" width={420} height={300} />
          </div>
        </div>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image16} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image17} alt="" width={420} height={300} />
          </div>
          <div className="">
            <Image className="" src={image18} alt="" width={420} height={300} />
          </div>
        </div>

        <h2 className="modeling__info modeling__info--margin-small">
          {mc.scientific.title}
        </h2>

        <p className="modeling__info modeling__info--margin-small">
          {mc.scientific.text}
        </p>

        <ul className="">
          <li className="modeling__info">{mc.scientific.s1}</li>
          <li className="modeling__info">{mc.scientific.s2}</li>
          <li className="modeling__info">{mc.scientific.s3}</li>
          <li className="modeling__info">{mc.scientific.s4}</li>
        </ul>

        <ul className="modeling__methods-list">
          <li className="modeling__info">{mc.scientific.text2}</li>

          <li className="modeling__info">{mc.scientific.s5}</li>

          <li className="modeling__info">{mc.scientific.s6}</li>

          <li className="modeling__info">{mc.scientific.s7}</li>

          <li className="modeling__info">{mc.scientific.s8}</li>

          <li className="modeling__info">{mc.scientific.s9}</li>

          <li className="modeling__info">{mc.characteristics.title}</li>

          <li className="modeling__info">{mc.characteristics.c1}</li>

          <li className="modeling__info">{mc.characteristics.c2}</li>

          <li className="modeling__info">{mc.characteristics.c3}</li>

          <li className="modeling__info">{mc.characteristics.c4}</li>

          <li className="modeling__info">{mc.characteristics.c5}</li>

          <li className="modeling__info">{mc.characteristics.c6}</li>

          <li className="modeling__info">{mc.parts}</li>

          <li className="modeling__info">{mc.part1}</li>

          <code className="modeling__info">{mc.part2}</code>
        </ul>

        <div className="">
          <Image className="" src={image19} alt="" width={415} height={196} />
        </div>

        <p className="modeling__info">{mc.paragraph1}</p>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image20} alt="" width={486} height={385} />
          </div>
          <div className="">
            <Image className="" src={image21} alt="" width={746} height={385} />
          </div>
        </div>

        <p className="modeling__info">{mc.paragraph2}</p>

        <div className="image22">
          <Image className="" src={image22} alt="" width={717} height={632} />
        </div>

        <h2 className="modeling__info modeling__info--bold modeling__info--text modeling__info--margin-small">
          {mc.secondaryHeading1}
        </h2>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image23} alt="" width={330} height={550} />
          </div>
          <div className="">
            <Image className="" src={image24} alt="" width={330} height={550} />
          </div>
          <div className="">
            <Image className="" src={image25} alt="" width={330} height={550} />
          </div>
        </div>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image26} alt="" width={330} height={550} />
          </div>
          <div className="">
            <Image className="" src={image27} alt="" width={330} height={550} />
          </div>
          <div className="">
            <Image className="" src={image28} alt="" width={330} height={550} />
          </div>
        </div>

        <h2 className="modeling__info modeling__info--bold modeling__info--font-size">
          {mc.secondaryHeading2}
        </h2>

        <ul className="modeling__methods-list modeling__methods-list--padding-left">
          <li className="">
            <p className="modeling__info">{mc.paragraph3}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.paragraph4}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.paragraph5}</p>
          </li>

          <li className="">
            <p className="modeling__info"> {mc.paragraph6}</p>
          </li>

          <li className="">
            <p className="modeling__info"> {mc.paragraph7}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.paragraph8}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.paragraph9}</p>
          </li>

          <li className="">
            <p className="modeling__info">{mc.paragraph10}</p>
          </li>
        </ul>

        <p className="modeling__info">{mc.paragraph11}</p>

        <p className="modeling__info">{mc.paragraph12}</p>

        <p className="modeling__info">{mc.paragraph13}</p>

        <h2 className="modeling__info modeling__info--bold modeling__info--text">
          {mc.secondaryHeading3}
        </h2>

        <div className="modeling__images-box modeling__images-box--around">
          <div className="">
            <Image className="" src={image29} alt="" width={419} height={208} />
          </div>
          <div className="">
            <Image className="" src={image30} alt="" width={419} height={208} />
          </div>
        </div>

        <div className="modeling__images-box modeling__images-box--around">
          <div className="">
            <Image className="" src={image31} alt="" width={419} height={208} />
          </div>
          <div className="">
            <Image className="" src={image32} alt="" width={419} height={208} />
          </div>
        </div>

        <h2 className="modeling__info modeling__info--bold modeling__info--text">
          {mc.secondaryHeading4}
        </h2>

        <h2 className="modeling__info  modeling__info--bold modeling__info--text">
          {mc.secondaryHeading5}
        </h2>

        <div className="image33">
          <Image className="" src={image33} alt="" width={1280} height={882} />
        </div>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image34} alt="" width={380} height={450} />
          </div>
          <div className="">
            <Image className="" src={image35} alt="" width={340} height={450} />
          </div>
          <div className="">
            <Image className="" src={image36} alt="" width={487} height={450} />
          </div>
        </div>

        <div className="modeling__images-box modeling__images-box--margin">
          <div className="">
            <Image className="" src={image37} alt="" width={274} height={366} />
          </div>
          <div className="">
            <Image className="" src={image38} alt="" width={368} height={366} />
          </div>
          <div className="">
            <Image className="" src={image39} alt="" width={253} height={366} />
          </div>
          <div className="">
            <Image className="" src={image40} alt="" width={264} height={366} />
          </div>
        </div>

        <h2 className="modeling__info  modeling__info--bold modeling__info--margin-small modeling__info--font-size">
          {mc.secondaryHeading6}
        </h2>

        <div className="modeling__images-box modeling__images-box--margin">
          <div className="">
            <Image className="" src={image41} alt="" width={570} height={814} />
          </div>
          <div className="">
            <Image className="" src={image42} alt="" width={570} height={814} />
          </div>
        </div>

        <div className="modeling__images-box">
          <div className="">
            <Image className="" src={image43} alt="" width={570} height={814} />
          </div>
          <div className="">
            <Image className="" src={image44} alt="" width={570} height={814} />
          </div>
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

export default Modeling;
