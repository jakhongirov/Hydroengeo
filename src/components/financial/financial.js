import Image from "next/image";

// Images
import DTM from "../../assets/images/dtm.jpg";
import Expenditure from "../../assets/images/expenditure.jpg";
import Transports from "../../assets/images/transports.jpg";
import ServiceEx from "../../assets/images/serviceex.jpg";
import Indicators from "../../assets/images/indicators.jpg";
import Balance from "../../assets/images/balance.jpg";
import Balance2 from "../../assets/images/balance2.jpg";
import Balance3 from "../../assets/images/balance3.jpg";
import Balance4 from "../../assets/images/balance4.jpg";
import FinancialResult from "../../assets/images/financialresults.jpg";
import FinancialResult2 from "../../assets/images/financialresults2.jpg";
import FinancialResult3 from "../../assets/images/financialresults3.jpg";

const Financial = () => {
  return (
    <>
      <section id="financial">
        <div className="small-container">
          <h1 className="heading">Финансовые и экономические показатели</h1>

          <h2 className="secondary-heading">
            «Гидрогеология ва инженерлик геологияси институти» ДМ бўйича хизмат сафарлари
            харажатлари
          </h2>

          <Image src={DTM} width={786} height={488} alt="DTM xarajatlar" />

          <h2 className="secondary-heading mt100">
            «Гидрогеология ва инженерлик геологияси институти» ДМ бўйича чет еллик
            меҳмонларни кутиб олиш харажатлари
          </h2>

          <Image
            src={Expenditure}
            width={1118}
            height={292}
            alt="«Гидрогеология ва инженерлик геологияси институти» ДМ бўйича чет еллик меҳмонларни кутиб олиш харажатлари"
          />

          <h2 className="secondary-heading mt100">
            Gidrogeologiya va injenerlik geologiyasi instituti»DM ga qarashli
            aftotransportlar bo’yicha ma’lumot
          </h2>

          <Image src={Transports} width={866} height={576} alt="" />

          <h2 className="secondary-heading mt100">
            «Гидрогеология ва инженерлик геологияси институти» ДМ бўйича Харид қилингар
            товар ва хизматлар бўйича харажатлар
          </h2>

          <Image
            src={ServiceEx}
            width={610}
            height={128}
            alt="«Гидрогеология ва инженерлик геологияси институти» ДМ бўйича Харид қилингар товар ва хизматлар бўйича харажатлар "
          />

          <h2 className="secondary-heading mt100">
            Основные показатели технико — экономического состояния ГУ «Институт
            гидрогеологии и инженерной геологии» на 01.10.2021 г.
          </h2>

          <Image src={Indicators} width={590} height={576} alt="" />

          <h2 className="secondary-heading mt100">Бухгалтерия баланси</h2>

          <Image src={Balance} width={1280} height={424} alt="Бухгалтерия баланси" />

          <div className="mt40">
            <Image src={Balance2} width={1280} height={828} alt="Бухгалтерия баланси" />
          </div>

          <div className="mt40">
            <Image src={Balance3} width={1280} height={856} alt="Бухгалтерия баланси" />
          </div>

          <div className="mt40">
            <Image src={Balance4} width={1280} height={546} alt="Бухгалтерия баланси" />
          </div>

          <h2 className="secondary-heading mt100">Молиявий натижалар</h2>

          <Image
            src={FinancialResult}
            width={1163}
            height={401}
            alt="Молиявий натижалар"
          />

          <div className="mt40">
            <Image
              src={FinancialResult2}
              width={1166}
              height={766}
              alt="Молиявий натижалар"
            />
          </div>

          <div className="mt40">
            <Image
              src={FinancialResult3}
              width={1075}
              height={604}
              alt="Молиявий натижалар"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Financial;
