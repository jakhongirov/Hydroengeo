import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

// Images
import w1 from "../../assets/images/w1.jpg";
import w2 from "../../assets/images/w2.jpg";
import w3 from "../../assets/images/w3.jpg";
import w4 from "../../assets/images/w4.jpg";
import w5 from "../../assets/images/w5.jpg";
import w6 from "../../assets/images/w6.jpg";
import w7 from "../../assets/images/w7.jpg";
import w8 from "../../assets/images/w8.jpg";

const workers = [
  {
    avatar: w1,
    name: "Бимурзаев Гани Амиргалиевич",
    role: "Директор",
    phone: "71 265-03-59",
    date: "Вторник и четверг",
    time: "16:00-18:00",
  },
  {
    avatar: w2,
    name: "Охунов Фаррухжон Абдукаххорович",
    role: "Заместитель директора по научной работе и инновациям",
    phone: "71 265-03-78",
    date: "Понедельник и пятница",
    time: "18:00-17:00",
  },
  {
    avatar: w3,
    name: "Андреев Дмитрий Николаевич",
    role: "Ученый секретарь",
    phone: "71 265-03-78",
    date: "C понедельника по пятницу",
    time: "8:00-11:00",
  },
  {
    avatar: w4,
    name: "Тошев Дониёр Худоёрович",
    role: `Начальник отдела экономики и формирования ГРР`,
    phone: "71 265-03-78",
    date: "C понедельника по пятницу",
    time: "8:00-11:00",
  },
  {
    avatar: w5,
    name: "Эрханов Нурмухаммаджон Абсаитович",
    role: `Главный бухгалтер`,
    phone: "71 265-03-16",
    date: "C понедельника по пятницу",
    time: "8:00-11:00",
  },
  {
    avatar: w6,
    name: "Мелибаев Жасур Малик угли",
    role: `Заведующий центром «Международные научно-исследовательские работы, Start-Up проекты, маркетинг и патентоведение»`,
    phone: "",
    date: "",
    time: "",
  },
  {
    avatar: w7,
    name: "Абдуллаев Ботиржон Дадажонович",
    role: `Заведующий центром «Мониторинг подземных вод и геоэкологческие исследования»`,
    phone: "",
    date: "",
    time: "",
  },
  {
    avatar: w8,
    name: "Муминджанов Талат Исраилович",
    role: `Заведующий центром «Исследование ресурсов и запасов подземных вод»`,
    phone: "",
    date: "",
    time: "",
  },
];

const Governance = () => {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    header: { about_drop_down },
  } = Content[lang];

  return (
    <>
      <section id="governance">
        <div className="inner_container">
          <h1 className="heading">{about_drop_down.management}</h1>

          <ul className="workers">
            {workers.map(row => (
              <li key={Math.random()} className="workers__card">
                <div className="avatar">
                  <Image
                    src={row.avatar}
                    width="240"
                    height="320"
                    alt="Бимурзаев Гани Амиргалиевич"
                  />
                </div>

                <table className="workers__info">
                  <tbody>
                    <tr className="workers__info-row">
                      <td>
                        <p>Ф.И.О.</p>
                      </td>
                      <td>{row.name}</td>
                    </tr>

                    <tr className="workers__info-row">
                      <td>Должность </td>
                      <td> {row.role}</td>
                    </tr>
                    <tr className="workers__info-row">
                      <td>Телефон</td>
                      <td> {row.phone}</td>
                    </tr>

                    <tr className="workers__info-row">
                      <td>
                        <p>Время приёма граждан</p>
                      </td>
                      <td>
                        <p>{row.date}</p>
                      </td>
                    </tr>

                    <tr className="workers__info-row">
                      <td>
                        <p></p>
                      </td>
                      <td>
                        <p>{row.time}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Governance;
