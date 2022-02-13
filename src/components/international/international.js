import Image from "next/image";
import Link from "next/link";

//Images
import image1 from "../../assets/images/geoecology17.png";
import image2 from "../../assets/images/geoecology18.png";
import image3 from "../../assets/images/geoecology19.png";
import image4 from "../../assets/images/international-img.png";

function international() {
  return (
    <section className="international">
      <div className="container">
        <h1 className="international__heading">Международные связи</h1>
        <div className="border-box"></div>

        <div className="international__box">
          <div>
            <div className="international__box-img">
              <div className="image1">
                <Image src={image1} alt="teams" width={450} height={280} />
              </div>
              <div className="image4">
                <Image src={image4} alt="teach" width={380} height={280} />
              </div>
            </div>

            <div className="international__box-img">
              <div className="image2">
                <Image src={image2} alt="work" width={380} height={280} />
              </div>
              <div className="image3">
                <Image
                  src={image3}
                  alt="photo peoples"
                  width={450}
                  height={280}
                />
              </div>
            </div>
          </div>

          <p className="international__info">
            В 33-ем Международном Геологическом Конгрессе, который проходил в
            2008 году в г.Осло (Норвегия) геологическая делегация из Узбекистана
            в составе 26 специалистов, в том числе молодых, принимала так же
            активное участие в Конгрессе по различным направлениям работы
            секций. В результате участия в работе Конгресса, геологическая
            молодёжь Узбекистана вошла в новообразованную Международную Сеть
            Молодых Учёных-Геологов (YES Network – Young Earth Scientist’s
            Network). Сотрудник Института ГИДРОИНГЕО в настоящее время является
            Национальным Представителем в YES от Узбекистана. Детальная
            информация расположена на сайте http://yes-uzbekistan.blogspot.com
            Планируется участие специалистов Института в 34-ом Международном
            Геологическом Конгрессе в 2012 году в г.Брисбан (Австралия).
          </p>
        </div>
      </div>
    </section>
  );
}

export default international;
