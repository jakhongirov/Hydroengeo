import Image from "next/image";
import Card from "../card/card";
import { useEffect, useState } from "react";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

// Images
import Minchenko from "../../assets/images/minchenko.jpg";
import Map from "../../assets/images/map.jpg";
import PhotoView from "../../assets/images/photoView.jpg";
import PhotoView2 from "../../assets/images/photoView2.jpg";
import UzbMap from "../../assets/images/uzbmap.jpg";
import Damages from "../../assets/images/damages.jpg";
import Damage1 from "../../assets/images/damage1.jpg";
import Damage2 from "../../assets/images/damage2.jpg";
import Damage3 from "../../assets/images/damage3.jpg";
import Damage4 from "../../assets/images/damage4.jpg";
import Landslide from "../../assets/images/landslide.jpg";
import Scheme from "../../assets/images/scheme.jpg";
import Naugarzan from "../../assets/images/Naugarzan.jpg";
import Angren from "../../assets/images/angren.jpg";
import Graph from "../../assets/images/graph.jpg";
import Turkskiy from "../../assets/images/turkskiy.jpg";
import Ogp1 from "../../assets/images/ogp1.jpg";
import Ogp2 from "../../assets/images/ogp2.jpg";
import MapUz from "../../assets/images/mapuz.jpg";

const Overture = () => {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { overture: oc },
  } = Content[lang];

  const [imagesItem, setImagesItem] = useState(506);
  const [imagesInnerItem, setImagesInnerItem] = useState(357);
  const [imagesInnerItemH, setImagesInnerItemH] = useState(230);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setImagesItem(540);
      setImagesInnerItem(540);
      setImagesInnerItemH(346);
    }
  }, []);

  return (
    <>
      <section id="overture">
        <div className="small-container">
          <h1 className="heading">{oc.heading}</h1>
          <Card
            avatar={Minchenko}
            name={"Минченко Вячаслав Дмитриевич"}
            date={"С 28 марта 1988 года"}
            position={"Заведующий лабораторией"}
          />
          <div className="dzz">
            <p>
              {" "}
              <span className="space"></span>
              {oc.paragraph1}
            </p>{" "}
            <p>
              {" "}
              <span className="space"></span>
              {oc.services.title}
            </p>
            <ul>
              <li>{oc.services.service1}</li>

              <li>{oc.services.service2}</li>

              <li>{oc.services.service3}</li>

              <li>{oc.services.service4}</li>

              <li> {oc.services.service5}</li>

              <li>{oc.services.service6}</li>

              <li>{oc.services.service7}</li>
            </ul>
          </div>
          <p className="text">{oc.paragraph2}</p>
          <div className="images__wrapper">
            <ul className="images">
              <li className="images__item">
                <Image src={Map} width={imagesItem} height={513} alt="Map" />
                <p className="images__item-text mobile--inner-text">{oc.sattelle1}</p>
              </li>

              <li className="images__item">
                <ul className="images__inner-list">
                  <li className="images__inner-item">
                    <Image
                      src={PhotoView}
                      width={imagesInnerItem}
                      height={imagesInnerItemH}
                      alt="Photo view"
                    />
                  </li>

                  <li className="images__inner-item">
                    <Image
                      src={PhotoView2}
                      width={imagesInnerItem}
                      height={imagesInnerItemH}
                      alt="Photo view"
                    />
                  </li>
                </ul>

                <p className="images__item-text mobile--inner-text">{oc.sattelle2}</p>
              </li>
            </ul>

            <div className="images__texts">
              <p className="images__item-text">{oc.sattelle1}</p>
              <p className="images__item-text">{oc.sattelle2}</p>
            </div>
          </div>
          <div className="map-wrapper">
            <Image
              src={UzbMap}
              width={1280}
              height={932}
              alt="The map of Uzbekistan, Ozbekiston xaritasi"
            />
          </div>
          <div className="problems">
            <h3 className="problems__heading">{oc.secondaryHeading1}</h3>

            <ul className="problems__list">
              <li className="problems__list-item">{oc.problems.p1}</li>
              <li className="problems__list-item">{oc.problems.p2}</li>
              <li className="problems__list-item">{oc.problems.p3}</li>
              <li className="problems__list-item">{oc.problems.p4}</li>
              <li className="problems__list-item">{oc.problems.p5}</li>
            </ul>
          </div>
          <div className="damages">
            <h3 className="damages__heading">{oc.secondaryHeading2}</h3>

            <div className="damages__image">
              <Image src={Damages} width={1280} height={931} alt="List of damages" />
            </div>

            <ul className="damages__list">
              <li className="damages__list-item">
                <Image src={Damage1} width={625} height={427} alt="Zarar" />
              </li>
              <li className="damages__list-item">
                <Image src={Damage2} width={625} height={427} alt="Zarar" />
              </li>
              <li className="damages__list-item">
                <Image src={Damage3} width={625} height={427} alt="Zarar" />
              </li>
              <li className="damages__list-item">
                <Image src={Damage4} width={625} height={427} alt="Zarar" />
              </li>
            </ul>
          </div>
          <div className="landslide">
            <h3 className="landslide__heading">{oc.secondaryHeading3}</h3>
            <div className="landslide__image">
              <Image src={Landslide} width={1280} height={689} alt="" />
            </div>

            <div className="scheme-image">
              <Image src={Scheme} width={1280} height={1386} alt="" />
            </div>

            <p className="landslide__text">{oc.paragraph3}</p>

            <p className="landslide__text">{oc.paragraph4}</p>

            <p className="landslide__text">{oc.paragraph5}</p>
          </div>
          <div className="naugarzan">
            <Image src={Naugarzan} width={1280} height={869} alt="" />
            <h4 className="naugarzan__desc">{oc.naugarzan}</h4>
          </div>

          <div className="angren__img-wrapper">
            <Image src={Angren} width={1280} height={1045} alt="Angren ko`chkisi" />
            <p className="angren__title">{oc.naugarzan}</p>
          </div>

          <div className="graph">
            <h3 className="graph__heading">{oc.secondaryHeading4}</h3>

            <Image src={Graph} width={1280} height={515} alt="" />
          </div>

          <div className="turkskiy">
            <Image src={Turkskiy} width={1280} height={649} alt="Yuqori turkskiy" />

            <p className="turkskiy__desc">{oc.turk}</p>

            <h4 className="turkskiy__heading">{oc.economicProblems.title}</h4>
            <p className="turkskiy__text">
              {oc.economicProblems.p1} <br /> {oc.economicProblems.p2}
              <br /> {oc.economicProblems.p3}
            </p>

            <ul className="turkskiy__ogp">
              <li className="turkskiy__ogp-item">
                <Image src={Ogp1} width={610} height={913} alt="OGP chirchiq" />
                <p className="turkskiy__ogp-item-text">{oc.ogp1}</p>
              </li>

              <li className="turkskiy__ogp-item">
                <Image src={Ogp2} width={610} height={913} alt="OGP chirchiq" />
                <p className="turkskiy__ogp-item-text">{oc.ogp2}</p>
              </li>
            </ul>

            <div className="proccess">
              <h2 className="proccess__heading">{oc.proccess.heading}</h2>

              <div className="proccess__problems">
                {oc.proccess.title} <br />
                <ul className="proccess__problems-list">
                  <li>{oc.proccess.p1}</li>

                  <li>{oc.proccess.p2}</li>

                  <li>{oc.proccess.p3}</li>

                  <li>{oc.proccess.p4}</li>

                  <li>{oc.proccess.p5}</li>

                  <li>{oc.proccess.p6}</li>

                  <li>{oc.proccess.p7}</li>

                  <li>{oc.proccess.p8}</li>
                  <li>{oc.proccess.p9}</li>
                </ul>
                <ul className="proccess__desc">
                  <li className="proccess__item">{oc.paragraph6}</li>
                  <li className="proccess__item">{oc.paragraph7}</li>
                  <li className="proccess__item">{oc.paragraph8}</li>
                  <li className="proccess__item">{oc.paragraph9}</li>
                  <li className="proccess__item">{oc.paragraph10}</li>
                </ul>
                <Image src={MapUz} width={1280} height={960} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overture;
