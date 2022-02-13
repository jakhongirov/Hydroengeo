import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import institute from "../../assets/images/Institute.png";
import Employees from "../../assets/images/team-line.svg";
import PhDstudents from "../../assets/images/briefcase-5-line.svg";
import Candidates from "../../assets/images/contacts-line.svg";
import PhDs from "../../assets/images/spy-line.svg";

function HomeAbout() {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch("https://hydroengeo.herokuapp.com/staff")
      .then(res => res.json())
      .then(data => {
        if (data) {
          setdata(data.data);
        }
      });
  }, []);

  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { about_page },
  } = Content[lang];

  return (
    <>
      <section className="home-about">
        <div className="container">
          <h1 className="home-about__heading">{about_page.heading}</h1>
          <div className="border-box"></div>

          <div className="home-about__box">
            <div className="institute-img">
              <Image
                src={institute}
                alt="About the Institute"
                width={1000}
                height={710}
              />
            </div>
            <div className="">
              <p className="home-about__institute-info">
                <strong>{about_page.text1.title} </strong>
                {about_page.text1.body}
              </p>
              <p className="home-about__institute-info">
                <strong>{about_page.text2.title} </strong>
                {about_page.text2.body}
              </p>
              <p className="home-about__institute-info">
                <strong>{about_page.text3.title} </strong>
                {about_page.text3.body}
              </p>
              <p className="home-about__institute-info">
                <strong>{about_page.text4.title} </strong>
                {about_page.text4.body}
              </p>
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

      <section className="home-about__list--section">
        <div className="container">
          <ul className="home-about__list">
            {data && (
              <>
                <li className="home-about__item">
                  <div className="home-about__item__box">
                    <Image src={Employees} alt="Employees" width={64} height={64} />
                    <span className="home-about__span">{data?.staff_name}</span>
                  </div>

                  <p className="home-about__item__info">Сотрудников</p>
                </li>
                <li className="home-about__item">
                  <div className="home-about__item__box">
                    <Image src={PhDstudents} alt="PhD students" width={64} height={64} />
                    <span className="home-about__span">{data?.doctor_name}</span>
                  </div>

                  <p className="home-about__item__info">Докторанты</p>
                </li>
                <li className="home-about__item">
                  <div className="home-about__item__box">
                    <Image
                      src={Candidates}
                      alt="Candidates of Sciences"
                      width={64}
                      height={64}
                    />
                    <span className="home-about__span">{data.redoctors_name}</span>
                  </div>

                  <p className="home-about__item__info">Кандидатов наук</p>
                </li>
                <li className="home-about__item">
                  <div className="home-about__item__box">
                    <Image src={PhDs} alt="PhDs" width={64} height={64} />
                    <span className="home-about__span">{data.scientist_name}</span>
                  </div>

                  <p className="home-about__item__info">Доктора наук</p>
                </li>
              </>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
