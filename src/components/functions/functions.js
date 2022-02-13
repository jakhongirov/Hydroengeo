import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

const Functions = () => {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    main: { functions: fc },
  } = Content[lang];

  return (
    <>
      <section id="functions">
        <div className="small-container">
          <h1 className="heading">{fc.heading}</h1>
          <h2 className="secondary-heading">{fc.secondaryHeading1}</h2>
          <p className="text">{fc.tasks1.title}</p>
          <ul className="margin-bottom-50">
            <li className="text">{fc.tasks1.task1}</li>

            <li className="text">{fc.tasks1.task2}</li>

            <li className="text">{fc.tasks1.task3}</li>

            <li className="text">{fc.tasks1.task4}</li>

            <li className="text">{fc.tasks1.task5}</li>
          </ul>
          <h2 className="secondary-heading">{fc.secondaryHeading2}</h2>
          <p className="text">{fc.tasks2.title}</p>
          <ul className="margin-bottom-50">
            <li className="text">{fc.tasks2.task1}</li>

            <li className="text">{fc.tasks2.task2}</li>

            <li className="text">{fc.tasks2.task3}</li>

            <li className="text">{fc.tasks2.task4}</li>

            <li className="text">{fc.tasks2.task5}</li>
          </ul>
          {/* =================== */}
          <h2 className="secondary-heading">{fc.secondaryHeading3}</h2>
          <p className="text">{fc.tasks2.title}</p>
          <ul className="margin-bottom-50">
            <li className="text">{fc.tasks3.task1}</li>

            <li className="text">{fc.tasks3.task2}</li>

            <li className="text">{fc.tasks3.task3}</li>

            <li className="text">{fc.tasks3.task4}</li>

            <li className="text">{fc.tasks3.task5}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Functions;
