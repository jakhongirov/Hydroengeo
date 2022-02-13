import Image from "next/image";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

// Images
import Students from "../../assets/images/students.jpg";
import Kenessarin from "../../assets/images/kenessarin.jpg";
import MandK from "../../assets/images/MandK.jpg";
import ScientificDiscussion from "../../assets/images/scientific-discussion.jpg";
import Xodjibaev from "../../assets/images/xodjibaev.jpg";
import Meeting from "../../assets/images/meeting.png";
import Awarding from "../../assets/images/awarding.jpg";
import Astronauts from "../../assets/images/astronauts.jpg";
import StudentG from "../../assets/images/studentsG.jpg";
import Almati from "../../assets/images/Almati.jpg";
import President from "../../assets/images/president.jpg";
import Collection from "../../assets/images/collection.jpg";

const History = () => {
  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { history: hc },
  } = Content[lang];

  return (
    <>
      <section id="history-section">
        <div className="small-container">
          <h1 className="heading">
            {hc.heading1} <br /> {hc.heading2}
          </h1>

          <p className="text">{hc.paragraph1}</p>

          <p className="text">{hc.paragraph2}</p>

          <Image
            className="post-image"
            src={Students}
            width="1280"
            height="750"
            alt="O.K.Lange va O'quvchilar 1937"
          />

          <p className="text mb-29">{hc.paragraph3}</p>

          <ul className="images">
            <li className="images__item">
              <Image src={Kenessarin} width="613" height="436" alt="N.A.Kenessarin" />
            </li>

            <li className="images__item">
              <Image
                src={MandK}
                width="647"
                height="436"
                alt="Mavlyanov va N.A.Kenessarin"
              />
            </li>
          </ul>

          <p className="text">{hc.paragraph4}</p>

          <ul className="images">
            <li className="images__item">
              <Image
                src={ScientificDiscussion}
                width="663"
                height="406"
                alt="Ilmiy ma`ruza"
              />
            </li>

            <li className="images__item">
              <Image src={Xodjibaev} width="605" height="406" alt="Xodjibaev" />
            </li>
          </ul>

          <p className="text mb-2">
            {hc.paragraph5} <br /> <br /> {hc.tasks1}
            <br /> {hc.tasks2} <br /> {hc.tasks3} <br /> {hc.tasks4}
            <br /> {hc.tasks5} <br /> {hc.tasks6} <br /> <br /> {hc.paragraph6}
          </p>

          <ul className="paragraph">
            <li className="paragraph__item">
              <Image
                className="paragraph__img"
                src={Meeting}
                width="552"
                height="387"
                alt="Meeting"
              />
            </li>

            <li className="paragraph__item">
              <p className="paragraph__text">{hc.paragraph7}</p>
            </li>
          </ul>

          <ul className="blocks">
            <li className="blocks__item">
              <p className="blocks__text">{hc.paragraph8}</p>

              <Image
                src={Awarding}
                alt="Awarding ceremony with the president of Uzbekistan"
                width="536"
                height="307"
              />
            </li>

            <li className="blocks__item">
              <div className="blocks__item-img">
                <Image src={Astronauts} width="683" height="494" alt="Astronauts" />
              </div>
              <div className="blocks__item-img">
                <Image src={StudentG} width="683" height="490" alt="Students " />
              </div>

              <p className="blocks__text">{hc.paragraph9}</p>
            </li>
          </ul>

          <p className="text">{hc.paragraph10}</p>

          <p className="text">{hc.paragraph11}</p>

          <Image
            className="post-image"
            src={Almati}
            width="1280"
            height="754"
            alt="Almati"
          />

          <p className="text">
            {hc.paragraph12}
            <br /> {hc.paragraph13}
            <br /> {hc.directions} <br /> {hc.directions1}
            <br /> {hc.directions2} <br /> {hc.directions3} <br /> {hc.directions4}
            <br /> <br /> {hc.directions5}
          </p>

          <ul className="collection">
            <li className="collection__item">
              <Image
                className="collection__item-img"
                src={President}
                width="460"
                height="376"
                alt="Mr President"
              />
            </li>
            <li className="collection__item">
              <Image
                className="collection__item-img"
                src={Collection}
                width="797"
                height="376"
                alt="Mr President"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default History;
