import Image from "next/image"
import Link from "next/link";

import Card from "../card/card";

//images
import ScrollTop from '../../assets/images/ScrollTop.svg'
import avatar from '../../assets/images/groundwater-avatar.png'
import image1 from '../../assets/images/groundwater1.png'
import image2 from '../../assets/images/groundwater2.png'
import image3 from '../../assets/images/groundwater3.png'
import image4 from '../../assets/images/groundwater4.png'
import image5 from '../../assets/images/groundwater5.png'
import image6 from '../../assets/images/groundwater6.png'
import image7 from '../../assets/images/groundwater7.png'
import image8 from '../../assets/images/groundwater8.png'
import image9 from '../../assets/images/groundwater9.png'
import image10 from '../../assets/images/groundwater10.png'
import image11 from '../../assets/images/groundwater11.png'
import image12 from '../../assets/images/groundwater12.png'
import image13 from '../../assets/images/groundwater13.png'
import image14 from '../../assets/images/groundwater14.png'
import image15 from '../../assets/images/groundwater15.png'
import image16 from '../../assets/images/groundwater16.png'
import image17 from '../../assets/images/groundwater17.png'
import image18 from '../../assets/images/groundwater18.png'
import image19 from '../../assets/images/groundwater19.png'
import image20 from '../../assets/images/groundwater20.png'
import image21 from '../../assets/images/groundwater21.png'
import image22 from '../../assets/images/groundwater22.png'
import image23 from '../../assets/images/groundwater23.png'
import image24 from '../../assets/images/groundwater24.png'
import image25 from '../../assets/images/groundwater25.png'
import image26 from '../../assets/images/groundwater26.png'
import image27 from '../../assets/images/groundwater27.png'
import image28 from '../../assets/images/groundwater28.png'
import image29 from '../../assets/images/groundwater29.png'

function groundwater() {
   return (
      <section className="groundwater">
         <div className="container">
            <div className="ameliorative__head-box">
               <h1 className="ameliorative__heading groundwater__heading--width">ЛАБОРАТОРИЯ МОНИТОРИНГА ПОДЗЕМНЫХ ВОД И РЕГИОНАЛЬНЫХ ИССЛЕДОВАНИЙ</h1>
            </div>

            <Card
               avatar={avatar}
               name={"Саидова Сайера Анваровна"}
               date={"С 1 марта 2013 года"}
               position={"Заведующий лабораторией"}
            />

            <p className="groundwater__info">
               Лаборатория оказывает следующие услуги:
            </p>

            <ul className="groundwater__list">
               <li className="">
                  <p className="groundwater__info">
                     Научно методическое обеспечение ведения мониторинга подземных вод на всех уровнях организации (госудраственный, региональный, локальный) мониторинга подземных вод.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Разработка оптимального размещения наблюдательных пунктов сети локального (объектного) мониторинга.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Оценка гидродинамического и гидрогеохимического состояния (показателей) подземных вод.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Прогноз изменения гидродинамического и гидрогеохимического состояния подземных вод под влиянием природных и природно-техногенных факторов.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Оценка состояния трансграничных подземных вод и разработка рекомендаций по оптимальному размещению наблюдательных пунктов мониторинга.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Геологическое доизучение экологического состояния подземных вод и разработка природоохранных мероприятий по их реабилитации и ремедации.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Разработка информационных геоэкологических паспортов для экологически значимых предприятий.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Разработка баз данных и 3D – геомиграционных моделей для экологически значимых объектов.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Разработка 3D геофильтрационных моделей месторождений подземных вод.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Проведение региональных и локальных гидрогеологических работ в различных целях (изучение изменения подземных вод, подтопления, засоления, загрязнения и др.)
                  </p>
               </li>
            </ul>

            <h2 className="groundwater__info groundwater__info--bold groundwater__info--text">ДОСТИЖЕНИЯ ЛАБОРАТОРИИ</h2>

            <p className="groundwater__info">
               <strong>
                  Разработаны методические требования к региональным гидрогеологическим исследованиям (1:200 000) на территориях с изменившимися природно-техногенными условиями, составление Государственной гидрогеологической карты нового поколения и создание гидрогеохимической базы данных изменения качества подземных вод на основе ГИС-технологий
               </strong>
            </p>

            <p className="groundwater__info">
               Разработан автоматизированный банк гидрогеохимических данных и ввод данных по результатам государственной гидрогеологической съёмки м-ба 1:20000.
               Создана автоматизированная информационно-аналитическая система на ПЭВМ со структурой формально-логических комбинаций запросов и выдачи информации по запросам. Разработана система поиска и отображения местоположения объектов на карте по атрибутивным и пространственным запросам и обратной задачи - атрибутивных характеристик объектов по их местоположению на карте с использованием ГИС-технологии программы ArcGIS.
               Привязка банка гидрохимических данных к картографическим материалам,  усовершенствование доступа к информации для прогнозирования изменения качества воды, комбинаций запросов и выдачи информации по интерпретируемым границам по конкретным классам минерализаций ПВ. Предоставление информации в удобной для пользователя форме и доведение ее до потребителя.
            </p>

            <div className="groundwater__images-box--block">
               <div className="image1">
                  <Image src={image1} alt="map 1/20000" width={500} height={350} />
               </div>
               <div className="image2">
                  <Image src={image2} alt="map2" width={700} height={340} />
               </div>
            </div>

            <p className="groundwater__info">
               <strong>
                  Цифровая карта гидрогеологического содержания на основе результатов комплексных гидрогеологических и инженерно-геологических съемок масштаба 1:200 00 и 1:50 000
               </strong>
            </p>

            <p className="groundwater__info">
               Разработана автоматизированная информационно-справочная база данных с использованием ГИС-технологий позволяющая многократно ускорить поиск необходимого материала на библиографическом, территориальном и тематическом уровне. Оперативно и в полном объёме производить обзор гидрогеологической, инженерно-геологической и геоэкологической изученности территории. Его привязка к карте даёт для гидрогеолога большее представление об исследуемой тематике.
               Созданная база данных позволяет интегрироваться с другими базами данных, тем самым расширяя возможности систематизации геологической информации по различным аспектам гидрогеологии, инженерной- геологии и геоэкологии, содержащие информацию о химическом составе подземных вод, гидрогеологических и инженерно-геологических параметрах водоносных горизонтов и пород зоны аэрации, литологическом составе и стратиграфическом возрасте разреза, геофизических свойствах и пр.
            </p>

            <div className="groundwater__images-box">
               <div className="image3">
                  <Image src={image3} alt="map3" width={593} height={362} />
               </div>
               <div className="image4">
                  <Image src={image4} alt="map4" width={563} height={362} />
               </div>
            </div>

            <p className="groundwater__info">
               <strong>
                  Разработка нормативно-технических документов регламентирующих ведение гидрогеологических, инженерно-геологических и геоэкологических исследований Госкомгеологии РУз
               </strong>
            </p>

            <ul className="">
               <li className="">
                  <p className="groundwater__info">
                     1. Методические рекомендации по камеральной обработке полевых материалов ведения Государственного мониторинга подземных вод на территории Республики Узбекистан.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     2. Методическое руководство к составлению трехлетних отчетов по результатам Государственного мониторинга подземных вод на территории Республики Узбекистан.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     3. Рекомендации по составлению  сводного отчета гидрогеологических станций по ведению мониторинга подземных вод.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     4. Требования по ведению мониторинга гидрогеодеформационного поля.
                  </p>
               </li>
            </ul>

            <div className="groundwater__images-box-2">
               <div className="image5">
                  <Image src={image5} alt="Guidelines" width={250} height={356} />
               </div>
               <div className="image6">
                  <Image src={image6} alt="Methodological guide" width={250} height={356} />
               </div>
               <div className="image7">
                  <Image src={image7} alt="Recommendations" width={250} height={356} />
               </div>
               <div className="image8">
                  <Image src={image8} alt="Requirements" width={250} height={356} />
               </div>
            </div>

            <div className="groundwater__images-box-mobile">
               <div className="image5">
                  <Image src={image5} alt="Guidelines1" width={250} height={356} />
               </div>
               <div className="image6">
                  <Image src={image6} alt="Methodological guide." width={250} height={356} />
               </div>
            </div>

            <div className="groundwater__images-box-mobile">
               <div className="image7">
                  <Image src={image7} alt="Recommendations3" width={250} height={356} />
               </div>
               <div className="image8">
                  <Image src={image8} alt="Requirements1" width={250} height={356} />
               </div>
            </div>

            <p className="groundwater__info">
               <strong>
                  Ведение мониторинга гидрогеодеформационного поля на территории Республики Узбекистан
               </strong>
            </p>

            <p className="groundwater__info">
               Проводился информационный мониторинг гидрогеодеформационного поля для службы прогноза землетрясении. С целью поиска и прогноза землетрясении  проводились режимные наблюдения по шести сейсмонаблюдательным пунктам за изменением уровня подземных вод в различных сейсмоактивных  районах  Узбекистана. Считается, что активные структурные перестроения гидрогеодеформационного поля могут начаться синхронно на близких скважинах лишь при подготовке сейсмического события с магнитудой 4 и более.
               Таким образом изучения изфменения  уровней подземных вод, может явиться косвенным индикатором – предвестником будущих землетрясений.
            </p>

            <div className="groundwater__images-box--block">
               <div className="image9">
                  <Image src={image9} alt="map5" width={360} height={230} />
               </div>
               <div className="image10">
                  <Image src={image10} alt="map8" width={412} height={230} />
               </div>
               <div className="">
                  <div className="image11">
                     <Image src={image11} alt="diagram2019" width={357} height={114} />
                  </div>
                  <div className="image12">
                     <Image src={image12} alt="diagram 2019y" width={393} height={97} />
                  </div>
               </div>
            </div>

            <p className="groundwater__info">
               По наблюдательным пунктам, которые расположены на территории РУз был создан ГИС проект, в программном продукте ArcGIS, который   содержит наиболее используемые формы выходных документов. В дальнейшем можно будет получать существующую информацию по наблюдательным специализированным пунктам:
            </p>

            <ul className="">
               <li className="">
                  <p className="groundwater__info">
                     о расположении и характеристике наблюдательных скважин ГГД поля; (координаты, абсолютная отметка, интервал установки фильтра, глубина, хим. состав, формулы, графики).
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     о среднемесячных, среднегодовых значениях уровня в наблюдательных скважинах за конкретный год по ГГД – полю;
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     ряд многолетних наблюдений за уровнем подземных вод в конкретной наблюдательной скважине за все года, данные по которым ведутся наблюдениями.
                  </p>
               </li>
            </ul>

            <div className="groundwater__images-box--block">
               <div className="image13">
                  <Image src={image13} alt="word" width={573} height={285} />
               </div>
               <div className="image14">
                  <Image src={image14} alt="excel" width={645} height={285} />
               </div>
            </div>

            <p className="groundwater__info groundwater__info--mobile-text">
               <strong>
                  Ведение мониторинга гидрогеодеформационного поля на территории Республики Узбекистан и выявление закономерностей влияния тектонических разломов
               </strong>
            </p>

            <p className="groundwater__info">
               Установлена закономерность изменения уровня подземных вод в каждом наблюдательном пункте в зависимости от условий расположения скважин по отношению к разломам, от силы готовящегося землетрясения и её эпицентрального расстояния. Изучен и проанализирован гидрогеохимический состав подземных вод по 6 наблюдательным пунктам. Выявлены закономерности изменения гидрогеодинамических и гидрогеохимических параметров под влиянием тектонических движений Каржантауского разлома. По итогам изучения гидрогеодинамического режима и гидрогеохимических параметров подземных вод по наблюдаемым пунктам будет произведена оценка и выявление наиболее результативных параметров, прослеживающийся при подготовке сильных землетрясений, которые могут являться индикаторами или предвестниками землетрясений.
               Проведен ряд работ  по внедрению в работу программы Geochemist Workbench.
            </p>

            <div className="groundwater__images-box">
               <div className="image15">
                  <Image src={image15} alt="map9" width={612} height={370} />
               </div>
               <div className="groundwater__images-box--flex">
                  <div className="">
                     <div className="image16">
                        <Image src={image16} alt="diagram1" width={290} height={198} />
                     </div>
                     <div className="image18">
                        <Image src={image18} alt="diagram2" width={283} height={190} />
                     </div>
                  </div>

                  <div className="">
                     <div className="image17">
                        <Image src={image17} alt="diagram3" width={280} height={184} />
                     </div>
                     <div className="image19">
                        <Image src={image19} alt="diagram4" width={244} height={214} />
                     </div>
                  </div>
               </div>
            </div>


            <div className="groundwater__info-box">
               <div className="image20">
                  <Image src={image20} alt="" width={270} height={203} />
               </div>
               <h2 className="groundwater__info groundwater__info--bold">Диаграмма соотношения активности алюминия к рН</h2>
            </div>

            <h3 className="groundwater__info groundwater__info--bold groundwater__info--text">Cоставлен разрез Каржантауского разлома.</h3>

            <div className="image21">
               <Image src={image21} alt="" width={1280} height={665} />
            </div>

            <p className="groundwater__info">
               В результате проведенных работ по переинтерпретации геофизических данных установлено, что в пределах зон глубинных разломов образу­ются природные гидрогеологические системы, существенно меняющиеся по своим свойствам как по глубине, так и простиранию, обусловлен­ные дискретностью геологической среды.
               Установлено, что разрывные структуры – это не только разрыв сплошности земной коры, сколько автономная и самостоятельная геологическая структура со своими структурно-формационными особенностями, являющаяся катализатором геологических процессов. Таким образом, новыми методами и расчетами доказано, что зона влияния разломов не всегда привязывается к его протяженности и глубине, а зависит, скорее всего, от геолого-структурного строения.
            </p>


            <div className="image22">
               <Image src={image22} alt="" width={505} height={592} />
            </div>

            <h2 className="groundwater__info groundwater__info--bold groundwater__info--text">Уточнение критериальных показателей гидрогеологических объектов по данным ДЗЗ</h2>

            <ul className="">
               <li className="">
                  <p className="groundwater__info">
                     По результатам работ составлены сигнальные экземпляры карт.
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     - Оросительной и коллекторной сети
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     - Топографическая карта описывающая рельеф
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     - Геологическая карта
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     - Карта растительности
                  </p>
               </li>

               <li className="">
                  <p className="groundwater__info">
                     Особенность этих карт заключается в их составлении на основе аэро-космических снимках. С применениям современных ГИС-технологии.
                  </p>
               </li>
            </ul>

            <div className="groundwater__images-box">
               <div className="image23">
                  <Image src={image23} alt="" width={600} height={450} />
               </div>
               <div className="image24">
                  <Image src={image24} alt="" width={630} height={450} />
               </div>
            </div>

            <div className="image25">
               <Image src={image25} alt="" width={562} height={422} />
            </div>

            <h2 className="groundwater__info groundwater__info--bold groundwater__info--text">Создание цифровой гидрогеологической карты Республики Узбекистан</h2>

            <p className="groundwater__info">
               Цифровые гидрогеологические карты, которые можно использовать с помощью сенсоров и компьютеров, а также в печати. Карты представляют первые и эскплуатационные водоносные горизонты (включая минеральные воды) на поверхности в масштабе 1:200 000 по регионам и 1:500 000 по стране;
               В дальнейшем планируется разработка руководства по эффективному использованию цифровых гидрогеологических карт и их модификации при необходимости.
            </p>

            <div className="groundwater__images-box">
               <div className="image26">
                  <Image src={image26} alt="map26" width={324} height={229} />
               </div>
               <div className="image27">
                  <Image src={image27} alt="map27" width={367} height={229} />
               </div>
               <div className="image28">
                  <Image src={image28} alt="map28" width={367} height={229} />
               </div>
            </div>

            <div className="image29">
               <Image src={image29} alt="map29" width={690} height={294} />
            </div>

            <div className="scientific__btn ">
               <Link href={'#header'}>
                  <a className="cooperation__btn__link">
                     <Image src={ScrollTop} alt="ScrollTop" width='80' height='80' />
                  </a>
               </Link>
            </div>
         </div>
      </section>
   )
}

export default groundwater