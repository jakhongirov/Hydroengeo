import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import loading from "../../assets/images/loader.svg";

function HomeNews() {
  const [data, setData] = useState([]);
  const [dat, setDat] = useState([]);
  const [loader, setLoader] = useState("loader_block");

  useEffect(() => {
    fetch("https://hydroengeo.herokuapp.com/introNews")
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setDat(data.data.reverse()[0]),
            setData(data.data.slice(1, 5)),
            setLoader("loader_none");
        } else {
          setLoader("loader_block");
        }
      });
  }, []);

  return (
    <>
      <section className="home-news">
        <div className="container">
          <h1 className="home-news__heading">Новости</h1>
          <div className="border-box"></div>

          <div className={loader}>
            <Image src={loading} alt="loader" width={1000} height={1000} />
          </div>

          {dat.news_main_img && (
            <>
              <Link href={`new/${dat.news_id}`}>
                <a>
                  <div className="home-news__box">
                    <div className="home-news__box-img">
                      <Image
                        loader={({ src, width, quality }) =>
                          `${src}?w=${width}&q=${quality || 75}`
                        }
                        src={dat?.news_main_img}
                        alt={dat?.news_heading}
                        width={710}
                        height={400}
                      />
                    </div>

                    <div className="">
                      <p className="home-news__box-time">{dat.news_data}</p>
                      <span className=""></span>
                      <h2 className="home-news__box-heading">{dat.news_heading}</h2>
                      <p className="home-news__box-title">{dat.news_title}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </>
          )}

          <ul className="home-news__list">
            {data.length &&
              data.map(e => (
                <Link key={e.news_id} href={`new/${e.news_id}`}>
                  <a>
                    <li className="home-news__item" data-set-id={e.news_id}>
                      <div className="home-news__item-img">
                        <Image
                          loader={({ src, width, quality }) =>
                            `${src}?w=${width}&q=${quality || 75}`
                          }
                          src={e.news_main_img}
                          alt={dat.news_heading}
                          width={300}
                          height={200}
                        />
                      </div>

                      <div className="">
                        <p className="home-news__box-time">{e.news_data}</p>
                        <h3 className="home-news__box-heading">{e.news_heading}</h3>
                      </div>
                    </li>
                  </a>
                </Link>
              ))}
          </ul>

          <Link href="/news">
            <a className="home-news__btn">Больше новостей</a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomeNews;
