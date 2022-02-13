import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Content from "../../Localization/Content";

import Card from "../card/card";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/hydrogeophysics-avatar.png";
import image1 from "../../assets/images/hydrogeophysics1.png";
import image2 from "../../assets/images/hydrogeophysics2.png";
import image3 from "../../assets/images/hydrogeophysics3.png";
import image4 from "../../assets/images/hydrogeophysics4.png";
import image5 from "../../assets/images/hydrogeophysics5.png";
import image6 from "../../assets/images/hydrogeophysics6.png";
import image7 from "../../assets/images/hydrogeophysics7.png";
import image8 from "../../assets/images/hydrogeophysics8.png";
import image9 from "../../assets/images/hydrogeophysics9.png";
import image10 from "../../assets/images/hydrogeophysics10.png";
import image11 from "../../assets/images/hydrogeophysics11.png";
import image12 from "../../assets/images/hydrogeophysics12.png";
import image13 from "../../assets/images/hydrogeophysics13.png";
import image14 from "../../assets/images/hydrogeophysics14.png";
import image15 from "../../assets/images/hydrogeophysics15.png";
import image16 from "../../assets/images/hydrogeophysics16.png";
import image17 from "../../assets/images/hydrogeophysics17.png";
import image18 from "../../assets/images/hydrogeophysics18.png";

function Hydrogeophysics() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { hydrogeophysics: hy },
  } = Content[lang];

  return (
    <section className="hydrogeophysics">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading">{hy.heading}</h1>
        </div>

        <Card
          avatar={avatar}
          name={"Абдуллаев Шавкат Хадияевич"}
          date={"С 1 июля 1988 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="hydrogeophysics__info hydrogeophysics__info--padding-left">
          {hy.methods}
        </p>

        <ul className="hydrogeophysics__list">
          <li className="">
            <p className="hydrogeophysics__info">{hy.method1}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.method2}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.method3}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.method4}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.method5}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.method6}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.method7}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.method8}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.method9}</p>
          </li>
        </ul>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold">
          {hy.projects_title}
        </h2>

        <p className="hydrogeophysics__info">{hy.projects_paragraph1}</p>

        <p className="hydrogeophysics__info">{hy.projects_paragraph2}</p>

        <p className="hydrogeophysics__info">{hy.projects_paragraph3}</p>

        <p className="hydrogeophysics__info">{hy.projects_paragraph4}</p>

        <p className="hydrogeophysics__info">{hy.projects_paragraph5}</p>

        <div className="image1">
          <Image src={image1} alt="mountain" width={1280} height={917} />
        </div>

        <p className="hydrogeophysics__info hydrogeophysics__info--margin">
          {hy.paragraph1}
        </p>

        <div className="hydrogeophysics__image-box">
          <div className="mobile-image-box">
            <div className="image2">
              <Image src={image2} alt="" width={330} height={268} />
            </div>
            <div className="image2">
              <Image src={image3} alt="" width={330} height={326} />
            </div>
          </div>

          <div className="image4">
            <Image src={image4} alt="" width={887} height={570} />
          </div>
        </div>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--size">
          {hy.task_heading}
        </h2>

        <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">
          {hy.task_title1}
        </h3>

        <h4 className="hydrogeophysics__info hydrogeophysics__info--bold">
          {hy.task_structure_title1}
        </h4>

        <ul className="hydrogeophysics__list">
          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph1}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph2}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph3}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph4}</p>
          </li>
        </ul>

        <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">
          {hy.task_structure_title2}
        </h3>

        <ul className="hydrogeophysics__list">
          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph5}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph6}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph7}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph8}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph9}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph10}</p>
          </li>
        </ul>

        <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">
          {hy.task_title2}
        </h3>

        <ul className="hydrogeophysics__list">
          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph11}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph12}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph13}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph14}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph16}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph17}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph18}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph19}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph20}</p>
          </li>
        </ul>

        <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">
          {hy.task_title3}
        </h3>

        <ul className="hydrogeophysics__list">
          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph21}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph22}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph23}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph24}</p>
          </li>
        </ul>

        <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">
          {hy.task_title4}
        </h3>

        <ul className="hydrogeophysics__list">
          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph25}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph26}</p>
          </li>
        </ul>

        <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">
          {hy.task_title5}
        </h3>

        <ul className="hydrogeophysics__list">
          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph27}</p>
          </li>
          <li className="">
            <p className="hydrogeophysics__info">{hy.task_structure_paragraph28}</p>
          </li>
        </ul>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">
          {hy.hydrogeophysics__heading}
        </h2>

        <ul className="hydrogeophysics__list">
          <li className="">
            <p className="hydrogeophysics__info">{hy.hydrogeophysics__paragraph1}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.hydrogeophysics__paragraph2}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.hydrogeophysics__paragraph3}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.hydrogeophysics__paragraph4}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.hydrogeophysics__paragraph5}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.hydrogeophysics__paragraph6}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">{hy.hydrogeophysics__paragraph7}</p>
          </li>

          <li className="">
            <p className="hydrogeophysics__info">
              {hy.hydrogeophysics__paragraph8}
              <br />
              {hy.hydrogeophysics__paragraph9}
              <br />
              {hy.hydrogeophysics__paragraph10}
              <br />
              {hy.hydrogeophysics__paragraph11}
              <br />
              {hy.hydrogeophysics__paragraph12}
              <br />
              {hy.hydrogeophysics__paragraph13}
              <br />
            </p>
          </li>
        </ul>

        <p className="hydrogeophysics__info">{hy.hydrogeophysics__paragraph14}</p>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">
          {hy.geophysical_heading1}
        </h2>

        <div className="image5">
          <Image src={image5} alt="" width={1230} height={966} />
        </div>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">
          {hy.geophysical_heading2}
        </h2>

        <div className="image6">
          <Image src={image6} alt="" width={1080} height={966} />
        </div>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">
          {hy.geophysical_heading3}
        </h2>

        <div className="image7">
          <Image src={image7} alt="" width={1080} height={915} />
        </div>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">
          {hy.geophysical_heading4}
        </h2>

        <div className="image8">
          <Image src={image8} alt="" width={702} height={621} />
        </div>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">
          {hy.geophysical_heading5}
        </h2>

        <div className="hydrogeophysics__image-box hydrogeophysics__image-box--margin">
          <div className="image9">
            <Image src={image9} alt="" width={754} height={549} />
          </div>
          <div className="">
            <Image src={image10} alt="" width={511} height={633} />
          </div>
        </div>

        <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">
          {hy.geophysical_heading6}
        </h2>

        <div className="hydrogeophysics__image-box hydrogeophysics__image-box--margin mobile--none">
          <div className="">
            <Image src={image11} alt="" width={292} height={412} />
          </div>
          <div className="">
            <Image src={image12} alt="" width={287} height={412} />
          </div>
          <div className="">
            <Image src={image13} alt="" width={273} height={412} />
          </div>
          <div className="">
            <Image src={image14} alt="" width={290} height={412} />
          </div>
        </div>

        <div className="hydrogeophysics__image-box mobile--none">
          <div className="">
            <Image src={image15} alt="" width={293} height={412} />
          </div>
          <div className="">
            <Image src={image16} alt="" width={293} height={412} />
          </div>
          <div className="">
            <Image src={image17} alt="" width={300} height={420} />
          </div>
          <div className="">
            <Image src={image18} alt="" width={297} height={412} />
          </div>
        </div>

        <div className="hydrogeophysics__image-box--mobile">
          <div className="">
            <Image src={image11} alt="" width={292} height={412} />
          </div>
          <div className="">
            <Image src={image12} alt="" width={287} height={412} />
          </div>
        </div>

        <div className="hydrogeophysics__image-box--mobile">
          <div className="">
            <Image src={image13} alt="" width={292} height={412} />
          </div>
          <div className="">
            <Image src={image14} alt="" width={287} height={412} />
          </div>
        </div>

        <div className="hydrogeophysics__image-box--mobile">
          <div className="">
            <Image src={image15} alt="" width={292} height={412} />
          </div>
          <div className="">
            <Image src={image16} alt="" width={287} height={412} />
          </div>
        </div>

        <div className="hydrogeophysics__image-box--mobile">
          <div className="">
            <Image src={image17} alt="" width={292} height={412} />
          </div>
          <div className="">
            <Image src={image18} alt="" width={287} height={412} />
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

export default Hydrogeophysics;
