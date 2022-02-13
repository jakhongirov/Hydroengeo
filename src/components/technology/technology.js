import Image from "next/image";
import Link from "next/link";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

import Card from "../card/card";


//Images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/technology-avatar.png";
import image1 from "../../assets/images/technology1.png";
import image2 from "../../assets/images/technology2.png";
import image3 from "../../assets/images/technology3.png";
import image4 from "../../assets/images/technology4.png";


function technology() {
   // const dispatch = useDispatch();
   // const {
   //    count: { lang },
   // } = useSelector(state => state);

   // const {
   //    main: { technology: tech },
   // } = Content[lang];

   return (
      <section className="technology">
         <div className="container">
            <div className="ameliorative__head-box">
               <h1 className="ameliorative__heading">
                  ОТДЕЛ ИНФОРМАЦИОННО-КОММУНИКАЦИОНЫХ ТЕХНОЛОГИИ
               </h1>
            </div>

            <Card
               avatar={avatar}
               name={"Хамитов Тохир Гайбуллаевич"}
               date={"С 12 марта 2018 года"}
               position={"Ведущий инженер программист"}
            />
            <p className="technology__info technology__info--margin">
               Отдел информационно-коммуникационных технологий осуществляет свою деятельность на основании постановлений Президента Республики Узбекистан от 21 марта 2012 года № ПП-1730 «О мерах по дальнейшему внедрению и развитию современных информационно-коммуникационных технологий», от 27 июня 2013 года № ПП-1989 «О мерах по дальнейшему развитию национальной информационно-коммуникационной системы Республики Узбекистан», от 8 июля 2005 года № ПП-117 «О дополнительных мерах по дальнейшему развитию информационно-коммуникационных технологий»  и постановлений Кабинета Министров Республики Узбекистан от 30 декабря 2013 года № 378 «О мерах по дальнейшему совершенствованию портала Правительства РУз с учетом оказания интерактивных государственных услуг», от 22 сентября 2006 года № 203 «О мерах по развитию связей с общественностью органов государственного и хозяйтсвенного управления».
            </p>

            <p className="technology__info ">
               Отдел информационно-коммуникационных технологий выполняет следующие задачи и функции:
            </p>

            <ul className="technology__list">
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • реализация комплексных программ по внедрению и развитию информационно-коммуникационных технологий, хранению информации, ее обработки и автоматизации;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • обеспечение взаимосвязи информационных систем и ресурсов по информационно-коммуникационным технологиям, формирование и развитие инфраструктуры оказания услуг и создание базы данных;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • обеспечение процесса эффективного использования и развития информационно-коммуникационных технологий во всех отделах, обеспечение техническими и информационно-аналитическими сведениями;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • обеспечение совершенствования и постоянной работы официального веб-сайта института;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • организация в сети Интернет веб-ресурсов, внедрение и развитие технической инфраструктуры по защите информационных ресурсов и систем, обеспечение их эффективной работы и поддержка на современном уровне;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • реализация взаимоотношений в области информационно-коммуникационных технологий с Госкомсвязи и соответствующими отделениями других министерств и ведомств;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • проведение анализа точного и полного исполнения поручений, находящихся на контроле руководства;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • участие в подготовке соответствующих документов на основании проведения анализа исполнения приказов и решений руководства института, представление по ним;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • принятие участия в организации подготовки проектов и сведений со стороны Главного управления, управления и отделов в целях своевременного и качественного рассмотрения вопросов в рамках полномочий отдела, внесённых на повестку дня учёного совета;
                  </p>
               </li>

               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     • запуск защищённой электронной почты для доставки официальных документов в органы государственного и хоязйственного управления и обеспечение их полной доставки;
                  </p>
               </li>
            </ul>

            <div className="technology__images-box">
               <div className="image1">
                  <Image src={image1} alt='computer correction' width={256} height={341} />
               </div>
               <div className="image2">
                  <Image src={image2} alt='computer' width={256} height={341} />
               </div>
            </div>

            <p className="technology__info">Функциями Отдела являются следующие:</p>

            <ul className="technology__list">
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     1. подготовка предложений по использованию современных информационно-коммуникационных технологий, программных продуктов и средств обработки данных, средств доставки сведений и обеспечения безопасности информации в территориальных оптовых торговых базах, и внесение их руководству института;
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     2. выработка предложений, планов работ, мероприятий касательно внесения отдельного пункта расходов предприятия по повышению квалификации сотрудников по внедрению и развитию систем автоматизации процессов производства, информационно-коммуникационных технологий;
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     3. разработка планов по развитию информационно-коммуникационных технологий в ГУ «Институт ГИДРОИНГЕО», направление их на согласование для утверждения руководителю института;
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     4. разработка и реализация проектов по созданию корпоративной сети, сети технологий и телекоммуникаций, программно-аппаратных средств, средств обмена и хранения информации;
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     5. обеспечение исполнения решений, принятых в рамках полномочий касательно информационных ресурсов, базы данных, внедрению информационных систем и интерактивных государственных услуг;
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     6. пополнение веб-ресурсов института сведениями, организация реализации задач по развитию состава интерактивных государственных услуг;
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     7. внесение информации по исполнению программ касательно внедрения и развития информационно-коммуникационных технологий;
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     8. создание статистических, аналитических и других банков данных по направлениям деятельности института;

                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     9. создание эффективной системы повышения квалификации кадров по использованию информационно-коммуникационных технологий.
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     10.обеспечение своевременного исполнения поручений руководства и документов.
                  </p>
               </li>
               <li className="technology__item">
                  <p className="technology__info">
                     <span className="technology__item__span"></span>
                     11.  отдел несёт ответственность за исполнение возложенных на него задач.
                  </p>
               </li>
            </ul>



            <div className="technology__images-box">
               <div className="image3">
                  <Image src={image3} alt='two people use computers' width={376} height={279} />
               </div>
               <div className="image4">
                  <Image src={image4} alt='electric correction' width={376} height={279} />
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
   )
}

export default technology