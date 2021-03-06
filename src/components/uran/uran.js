import Image from "next/image";
import { useRef, useEffect } from "react";

// Components
import Card from "../card/card";

// Images
import Ismailov from "../../assets/images/ismailov.jpg";
import UranImg from "../../assets/images/uran.jpg";
import Minerals from "../../assets/images/minerals.jpg";
import Sertificate1 from "../../assets/images/sertificate1.jpg";
import Sertificate2 from "../../assets/images/sertificate2.jpg";
import Sertificate3 from "../../assets/images/sertificate3.jpg";
import MineralWater from "../../assets/images/mineralwater.jpg";
import MineralsMap from "../../assets/images/mineralsmap.jpg";
import Fergana from "../../assets/images/fergana.jpg";
import Tube from "../../assets/images/tube.jpg";
import Andijan from "../../assets/images/andijan.jpg";
import Namangan from "../../assets/images/namangan.jpg";
import Distribution from "../../assets/images/distribution.jpg";

const SomeText = `dsjfndkj dsfds <br /> asfj`;

const Uran = () => {
  return (
    <>
      <section id="uran">
        <div className="small-container">
          <h1 className="heading">ЛАБОРАТОРИЯ УРАНА И ГИДРОМИНЕРАЛЬНЫХ РЕСУРСОВ</h1>
          <Card
            avatar={Ismailov}
            name={"Исмаилов Бахтиёр Жантиевич"}
            position={"Заведующий лабораторией"}
            date={"С 2 октября 2017 года"}
          />
          <div className="services">
            <p>Лаборатория оказывает следующие услуги:</p>
            <ul className="services__list">
              <li className="services__list-item">
                Разработка научно-методических основ изучения гидроминеральных ресурсов и
                урана;
              </li>

              <li className="services__list-item">
                Изучение условий формирования месторождений гидроминеральных ресурсов и
                урана;
              </li>

              <li className="services__list-item">
                Геолого-экономическая оценка извлечения и использования гидроминеральных
                ресурсов;
              </li>

              <li className="services__list-item">
                Оценка распространения и условий залегания месторождений гидроминеральных
                ресурсов;
              </li>

              <li className="services__list-item">
                оценка ресурсов и запасов гидроминеральных ресурсов;
              </li>

              <li className="services__list-item">
                Разработка поисковых критериев гидроминеральных ресурсов и урановых
                орудинений;
              </li>

              <li className="services__list-item">
                Выявление перспективных площадей (участков) промышленного значения
                гидрогеохимическими методами;
              </li>

              <li className="services__list-item">
                Изучение особенностей геолого-гидрогеологических условий формирования,
                закономерности распространения гидроминеральных ресурсов и урана;
              </li>

              <li className="services__list-item">
                Мониторинг за проведением поисково-разведочных работ на гидроминеральные
                ресурсы;
              </li>

              <li className="services__list-item">
                Комплексное изучение и освоение подземных вод на золото, скандий, рений,
                ниобий, бериллий, тантал, цирконий и другие редкоземельные элементы как
                стратегических видов полезных ископаемых;
              </li>

              <li className="services__list-item">
                Изучение гидроминеральных ресурсов и перспективы их использования;
              </li>

              <li className="services__list-item">
                Разработка технологии извлечения йода, брома, редких, редкоземельных и
                других элементов;
              </li>

              <li className="services__list-item">
                Разработка программы мониторинга качества подземных вод в районах
                разработки урановых месторождений;
              </li>

              <li className="services__list-item">
                Разработка и внедрение инновационных методов поиска глубокозалегающих
                урановых орудинений;
              </li>

              <li className="services__list-item">
                Выдача гидрогеологических заключений о возможности выявления
                гидроминеральных ресурсов;
              </li>
            </ul>
          </div>
          <div className="article">
            <Image
              className="article__img"
              src={UranImg}
              width={587}
              height={407}
              alt="Uran"
            />

            <p className="article__text">
              Разрабатывает научно-методические основы изучения минеральных, термальных и
              промышленных вод, закономерностей их распространения, формирования и
              перспективы их использования в целях повышения минерально-сырьевой базы
              Узбекистана. Оценка экономической эффективности проведения
              поисково-разведочных работ по выявленным перспективным участкам и
              возможности комплексного извлечения промышленно-ценных компонентов (I, Br,
              Au, Sc, Re, U) из промышленных ПВ. Выявление перспективных площадей новых
              типов минеральных лечебных вод.
            </p>
          </div>
          <Image src={Minerals} width={1280} height={907} alt="" />
          <div className="tasks">
            <h4 className="tasks__title">Основные задачи</h4>

            <ul className="tasks__list">
              <li className="tasks__list-item">
                1. Разработка поисковых критериев по прослеживанию зон возможного
                накопления урана по регионам Узбекистана;
              </li>
              <li className="tasks__list-item">
                2. Разработка методических основ по выявлению рудных зон и перспективных
                участков комплексными геофизическими и гидрогеохимическими методами;
              </li>
              <li className="tasks__list-item">
                3. Изучение генезиса и закономерностей распространения;
              </li>
              <li className="tasks__list-item">
                4. Изучение особенностей геолого-гидрогеологических условий отдельных
                месторождений (участков) с приростом эксплуатационных запасов по различным
                категориям;
              </li>
              <li className="tasks__list-item">
                5. Анализ экономической эффективности проведения поисково-разведочных
                работ и геолого-экономическое обоснование перспектив использования;
              </li>
              <li className="tasks__list-item">
                6. Мониторинг за проведением поисково-разведочных работ на уран и
                редкоземельные элементы;
              </li>
              <li className="tasks__list-item">
                7. Комплексное изучение и освоение подземных вод на уран, золото, скандий,
                рений, ниобий, бериллий, тантал, цирконий и редкоземельные элементы как
                стратегических видов
              </li>
            </ul>
          </div>
          <div className="results">
            <h3 className="results__heading">
              Основные результаты научных исследований лаборатории «Гидроминеральные
              ресурсы и урана»
            </h3>

            <ul className="results__list">
              <li className="results__list-item">
                Получены 3 свидетельства о депонировании объектов авторского права: -
              </li>

              <li className="results__list-item">
                Выщелачивание урана бром-бромидным раствором (№ 001920 от 24.01.2020 г.)
              </li>

              <li className="results__list-item">
                - Радиогеохимический метод обнаружения скрытых глубокозалегающих урановых
                орудинений (№ 002117 от 20.03.2020 г.)
              </li>

              <li className="results__list-item">
                - Электрический способ определения структуры движения потока подземных вод
                (№ 002118 от 20.03.2020 г.)
              </li>

              <li className="results__list-item">
                - Подготовлена и издана монография “НЕТРАДИЦИОННОЕ ЗОЛОТОСОДЕРЖАЩЕЕ СЫРЬЕ
                УЗБЕКИСТАНА: ТЕХНОЛОГИИ ОСВОЕНИЯ” (Авторы Аллабергенов Р.Д., Шарипов Х.Т.,
                Ибрагимов А.С. и др.).
              </li>

              <li className="results__list-item">
                - Поданы заявки в АИС (22.10.2020 года) на получение патентов на
                изобретение «Способ выделения золота из гидроминерального сырья».
              </li>

              <li className="results__list-item">
                - изобретение «Способ оптимизации выщелачивания золота, цветных и редких
                металлов из различного сырья цветной металлургии».
              </li>
              <li className="results__list-item">
                - Составлена заявка для участия в тендере, объявленного Министерством
                инновации по теме: Разработка технологии извлечения промышленных
                микрокомпонентов, редких элементов и минеральных солей из вод нефтяных и
                газовых месторождений республики.
              </li>

              <li className="results__list-item">
                В результате многолетних исследований, проведенных в лаборатории доказана
                возможность организации новой добывающей отрасли промышленности: Доказана
                рентабельность извлечения йода и брома из попутных вод разрабатываемых
                нефтяных месторождений. Ежегодно из попутных вод можно извлечение 2000
                тонн йода. При стоимости йода марки «Ч» примерно 100 долл. США за кг,
                выручка от реализации может составить около 200 млн. долл. США в год.
              </li>

              <li className="results__list-item">
                Доказана возможность извлечения лития из попутных вод разрабатываемых
                нефтяных месторождений. Ежегодно из попутных вод можно извлечение до 4000
                тонн лития. Выручка от реализации продукции может составить более 20 млн.
                долл. США в год. Доказана возможность извлечения золота из попутных вод
                разрабатываемых нефтяных месторождений. Ежегодно из попутных вод двух
                месторождений (Крук и Северный Уртабулак) можно получить более 270 кг
                золота в год. Выручка от реализации продукции может составить более 10
                млн. долл. США в год.
              </li>
            </ul>
          </div>

          <div className="sertificates">
            <ul className="sertificates__list">
              <li>
                <Image src={Sertificate1} width={338} height={485} alt="" />
              </li>

              <li>
                <Image src={Sertificate2} width={337} height={484} alt="" />
              </li>

              <li>
                <Image src={Sertificate3} width={329} height={473} alt="" />
              </li>
            </ul>

            <p className="sertificates__text">
              Основное направление работ лаборатории связано с изучением гидрогеохимии
              редких и редкозе­мельных элементов, оценкой запасов промышленных вод,
              разработкой тех­нологии их извлечения, геоэкологическими вопросами,
              рациональным использованием под­земных, промышленных, минеральных,
              термальных и питьевых вод.
            </p>

            <Image src={MineralWater} width={1098} height={800} alt="" />

            <ul className="sertificates__list se">
              <li>
                <Image src={MineralsMap} width={500} height={648} alt="" />
              </li>

              <li>
                <Image src={Fergana} width={639} height={631} alt="" />
              </li>
            </ul>

            <p className="sertificates__text">
              «Оценка состояния подземных промышленных йодо-бромных вод Узбекистана (на
              примере нефтегазовых месторождений Бухаро-Каршинского артезианского
              бассейна) в связи с длительной и интенсивной эксплуатацией нефтегазовых
              месторождений, использующих метод поддержания пластового давления» По
              результатам полевых исследований и камеральных обработок по эксплуатируемым
              на нефть и газ нагнетательным для ППД скважинам выявлено, что основные
              изменения качественного состава подземных промышленных вод происходит на
              границе водонефтяного (ВНК) и нефтегазового (НГК) контуров, в пределах
              мощности первых десятков метров. Анализ показал, что общая мощность
              коллекторов с промышленными водами составляет 100–300 м, и при прекращении
              добычи нефти и газа можно эксплуатировать пластовые промышленные воды из
              более глубоких зон. Подсчитаны емкостные запасы промышленных йодо-бромных
              вод месторождения Северный Уртабулак. Для разработки технологического
              регламента для извлечения йода, брома и др. ценных компонентов рекомендован
              менее энергоемкий способ электромагнитного воздействия поля, исключающий
              применение химических реагентов и процессы упаривания или нагрева воды,
              позволяющий очищать промышленные воды до качества экологически чистой воды и
              выделять высококонцентрированный осадок (концентрат ценных элементов),
              пригодный для переработки. Преимущества этой технологии перед классическими
              технологиями (электрохимический, воздушно-десорбционный): исключение
              использования каких-либо химических реагентов и расходных материалов; низкие
              энергозатраты (менее 0.5 кВт/м3 при производительности более 500 м3/час),
              экологическая безопасность; исключение необходимости строить специальные
              здания и отводить большие территории для осуществления технологии; высокий
              уровень экологической безопасности (не создается и не выбрасывается в
              атмосферу промежуточный экологически опасный продукт, загрязненный продукт
              не накапливается в почве); возможность получать из подземной воды
              концентрата металлов: литий, магний, натрий, калий, хлор, кальций, бром и
              др. – сырья для химической промышленности и цветной металлургии.
            </p>
          </div>

          <div className="purification">
            <Image src={Tube} width={555} height={494} alt="Tube" />
            <p className="purification__title">
              Установка для очистки воды единым электро-магнитным полем
            </p>
          </div>

          <p className="text">
            В Узбекистане известна оригинальная разработка, позволяющая путем управления
            единым электро-магнитным полем без использования каких-либо реагентов, очищать
            промышленные воды до качества экологически чистой воды с выделением
            высококонцентрированного осадка - концентрата ценных элементов, пригодного для
            переработки известными металлургическими способами. Метод реализуется на
            установке
          </p>

          <h3 className="title">
            «Оценка состояния курортно-рекреационных ресурсов, действующих на базе
            месторождений лечебно-минеральных подземных вод с обоснованием возможности их
            развития в Ферганской долине»
          </h3>

          <p className="text m20">
            В Республике известны более 150 климатических местностей, где расположено
            около 300 источников лечебных минеральных вод и десять соляно-грязевых озер.
            Из них признаны представляющими высокую лечебную ценность более 100
            курортно-климатических мест, расположенных, в основном, в горных и предгорных
            районах, многие из которых уже функционируют как санатории-профилактории, дома
            и зоны массового отдыха, здравницы. Благодаря своему рекреационному потенциалу
            Ферганская долина имеет особое значение не только в Узбекистане, но и в
            Центральной Азии. Его предгорья и равнины особенно богаты разнообразными
            природными рекреационными ресурсами. Уникальное географическое положение
            региона, его орографическое разнообразие послужили основой для возникновения
            различных ландшафтных рекреационных ресурсов. Следовательно, большая часть
            международного туристического потока также напрямую связана с оздоровительного
            направления. По этой причине изучение и оценка потенциала рекреационного
            туризма в каждом регионе имеет большое научное и практическое значение.
          </p>

          <ul className="images-list">
            <li>
              <Image src={Andijan} width={615} height={445} alt="" />
            </li>

            <li>
              <Image src={Namangan} width={600} height={445} alt="" />
            </li>
          </ul>

          <h3 className="title">
            «Изучение и оценка распространения драгоценных металлов и редкоземельных
            элементов в пластовых водах нефтегазовых месторождений Узбекистана с
            выявлением перспективных площадей»
          </h3>

          <p className="text">
            За последние годы произошло многократное увеличение объема добычы попутных
            подземных вод с высокой концентрацией редких элементов в процессе добычи
            углеводородов (нефть, газ), которые выбрасываются или обратно закачиваются для
            ППД. Подземные воды содержащие различные химические элементы (промышленные
            воды), в ряде развитых странах (США, Япония, Китай, Аргентина, Россия, Чили,
            Бразилия, Канада) используются, как ценное гидроминеральное сырье. В ряде
            развитых стран наблюдается тенденция к расширению использования различных
            видов гидроминерального сырья для промышленного производства редкометальной и
            химической продукции. Попутное комплексное извлечение редких элементов из
            попутных вод приведет к повышению их экономическую эффективность.
          </p>

          <h3 className="title">
            Карта распространения промышленных вод Республики Узбекистан
          </h3>

          <Image src={Distribution} width={902} height={577} alt="" />

          <p className="text mt20 mb0">
            В настоящее время одно из актуальных направлений Госкомгеологии Республики
            Узбекистан – это изучение золото и золото-редко металлоносности территорий
            (Центральные Кызылкумы) и в дальнейшем создание минерально-сырьевой базы руд
            благородных металлов и редкоземельных элементов. Необходимо отметить, что
            группой исследователей ранее, при проведении полевых обследований участков
            проявления железооруденения в меловых песчано-глинистых толщах в южном
            обрамлении гор Кульджуктау выявлены повышенной концентрации редкоземельных и
            редкометаллных элементов. На участке Шурук, расположенном в южной предгорной
            части хр. Кульджуктау в пестроцветных нижнемеловых песчано-глинистых
            отложениях выявлены повышенные концентрации редкометаллных (Ba, P, Sr, Li, Rb,
            Zr, Ti, V, Co, Ni, Rb) и редкоземельных элементов (La, Ce, Pr, Nd, Sm, Eu, Gd,
            Tb, Dy, Ho, Er и др.), при этом в отдельных пробах установлены высокие
            концентрации элементов группы лантоноидов.
          </p>

          <p className="text mb0">
            Кроме того повышенные концентрации редкометалльных и редкоземельных элементов
            выявлены еще на двух участках Аяк-Гужумды и Джаманъяр, расположенных к
            северу-западу от Шурукской площади. В пределах гор Ауминзатау размещены
            золоторудные месторождения Аджибугут, Сентябрское, Карабугут, на основании
            выявленных геологических и минералого-геохимических признаков выделены
            перспективные площади как Восточный Карабугут. Создана прогнозно-поисковая
            модель золотого и золото-редкометального орудинений гор Ауминзатау и
            рекомендована ей использование при проведении геолого-разведочных работ.
          </p>

          <p className="text mb0">
            Учитывая усиления геологоразведочных работ на горных массивах Кульджуктау и
            Ауминзатау продолжение работ по гидрохимическим методам поисков для оценки
            перспективности данного региона на золото, редкометаллных и редкоземельных
            элементов, путем выявления ореолов рассеивания в подземных водах является
            перспективным.
          </p>
        </div>
      </section>
    </>
  );
};

export default Uran;
