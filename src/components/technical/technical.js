import Image from "next/image";
import Link from "next/link";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

import Card from "../card/card";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/technical-avatar.png";
import image1 from "../../assets/images/technical1.png";
import image2 from "../../assets/images/technical2.png";
import image3 from "../../assets/images/technical3.png";
import image4 from "../../assets/images/technical4.png";
import image5 from "../../assets/images/technical5.png";
import image6 from "../../assets/images/technical6.png";
import image7 from "../../assets/images/technical7.png";
import image8 from "../../assets/images/technical8.png";
import image9 from "../../assets/images/technical9.png";
import image10 from "../../assets/images/technical10.png";
import image11 from "../../assets/images/technical11.png";
import image12 from "../../assets/images/technical12.png";
import image13 from "../../assets/images/technical13.png";
import image14 from "../../assets/images/technical14.png";
import image15 from "../../assets/images/technical15.png";
import image16 from "../../assets/images/technical16.png";

function Technical() {
  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { technical: tech },
  } = Content[lang];

  return (
    <section className="technical">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading groundwater__heading--width">
            {tech.heading}
          </h1>
        </div>

        <Card
          avatar={avatar}
          name={"Исмаилова Диляра Асхатовна"}
          date={"С 12 марта 2018 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="technical__info">
          <strong>{tech.paragraph1}</strong>
        </p>

        <p className="technical__info">{tech.paragraph2}</p>

        <p className="technical__info">{tech.paragraph3}</p>

        <div className="technical__images-box">
          <div className="image1">
            <Image src={image1} alt="books" width={600} height={450} />
          </div>

          <div className="image2">
            <Image src={image2} alt="second books" width={600} height={450} />
          </div>
        </div>

        <div className="technical__images-box">
          <div className="image3">
            <Image src={image3} alt="use computer" width={600} height={412} />
          </div>

          <div className="image4">
            <Image src={image4} alt="second use computer" width={600} height={412} />
          </div>
        </div>

        <div className="technical__images-box technical__images-box--flex mobile-none">
          <div className="image5">
            <Image src={image5} alt="printer grey" width={420} height={424} />
          </div>

          <div className="image6">
            <Image src={image6} alt="printer black" width={380} height={424} />
          </div>

          <div className="image7">
            <Image src={image7} alt="why does printer use for" width={300} height={424} />
          </div>
        </div>

        <div className="mobile-block">
          <div className="image7">
            <Image
              className="iamge7-img"
              src={image7}
              alt="why does printer use for"
              width={300}
              height={424}
            />
          </div>

          <div className="technical__images-box technical__images-box--between">
            <div className="image5">
              <Image src={image5} alt="printer grey" width={420} height={424} />
            </div>

            <div className="image6">
              <Image src={image6} alt="printer black" width={380} height={424} />
            </div>
          </div>
        </div>

        <p className="technical__info">
          <strong>{tech.paragraph4}</strong>
        </p>

        <p className="technical__info">{tech.paragraph5}</p>

        <div className="technical__images-box">
          <div className="image8">
            <Image src={image8} alt="avto search" width={520} height={305} />
            <p className="technical__info technical__info--text">
              <strong>{tech.img_title1}</strong>
            </p>
          </div>

          <div className="image9">
            <Image
              src={image9}
              alt="Acquisition of CIF bibliographic documents"
              width={620}
              height={305}
            />
            <p className="technical__info technical__info--text">
              <strong>{tech.img_title2}</strong>
            </p>
          </div>
        </div>

        <div className="technical_image10">
          <Image
            src={image10}
            alt="Creation from the NTB fund"
            width={788}
            height={394}
          />
          <p className="technical__info technical__info--text">
            <strong>{tech.img_title3}</strong>
          </p>
        </div>

        <h2 className="technical__info technical__info--text-heading technical__info--bold">
          {tech.heading2}
        </h2>

        <p className="technical__info">
          <strong>{tech.paragraph6}</strong>
        </p>

        <div className="image11">
          <Image
            src={image11}
            alt="Creation from the NTB fund big foto"
            width={1013}
            height={505}
          />
        </div>

        <div className="image12">
          <Image
            src={image12}
            alt="entering information on reports"
            width={1013}
            height={605}
          />
        </div>

        <div className="image13">
          <Image src={image13} alt="system search NTB" width={1013} height={560} />
        </div>

        <div className="image14">
          <Image src={image14} alt="result search" width={1013} height={700} />
        </div>

        <div className="technical__images-box technical__images-box--center">
          <div className="image15">
            <Image src={image15} alt="font theme list 1" width={423} height={612} />
          </div>

          <div className="image16">
            <Image src={image16} alt="font theme list 2" width={590} height={531} />
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

export default Technical;
