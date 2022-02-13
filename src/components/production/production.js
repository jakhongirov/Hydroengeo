import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

function Production() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { production: pr },
  } = Content[lang];

  return (
    <section className="production">
      <div className="container">
        <div className="production__info-box">
          <h2 className="production__info-box__heading">{pr.heading}</h2>

          <p className="production__info-box__info">{pr.list_name}</p>

          <ul className="production__info-box__list">
            <li className="production__info-box__item">{pr.list_item1}</li>
            <li className="production__info-box__item">{pr.list_item2}</li>
            <li className="production__info-box__item">{pr.list_item3}</li>
            <li className="production__info-box__item">{pr.list_item4}</li>
            <li className="production__info-box__item">{pr.list_item5}</li>
            <li className="production__info-box__item">{pr.list_item6}</li>
            <li className="production__info-box__item">{pr.list_item7}</li>
            <li className="production__info-box__item">{pr.list_item8}</li>
            <li className="production__info-box__item">{pr.list_item9}</li>
            <li className="production__info-box__item">{pr.list_item10}</li>
            <li className="production__info-box__item">{pr.list_item11}</li>
            <li className="production__info-box__item">{pr.list_item12}</li>
            <li className="production__info-box__item">{pr.list_item13}</li>
            <li className="production__info-box__item">{pr.list_item14}</li>
            <li className="production__info-box__item">{pr.list_item15}</li>
            <li className="production__info-box__item">{pr.list_item16}</li>
            <li className="production__info-box__item">{pr.list_item17}</li>
            <li className="production__info-box__item">{pr.list_item18}</li>
            <li className="production__info-box__item">{pr.list_item19}</li>
            <li className="production__info-box__item">{pr.list_item20}</li>
            <li className="production__info-box__item">{pr.list_item21}</li>
            <li className="production__info-box__item">{pr.list_item22}</li>
            <li className="production__info-box__item">{pr.list_item23}</li>
            <li className="production__info-box__item">{pr.list_item24}</li>
          </ul>

          <p className="production__info-box__info">{pr.paragraph}</p>
        </div>
      </div>
    </section>
  );
}

export default Production;
