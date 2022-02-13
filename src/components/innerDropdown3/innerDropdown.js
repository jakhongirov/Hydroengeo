import Link from "next/link";
import { useSelector } from "react-redux";
import Content from "../../Localization/Content";

const InnerDropdown3 = () => {
  const {
    count: { lang },
  } = useSelector(state => state);

  const { header } = Content[lang];

  return (
    <>
      <ul className="inner__drop-down">
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.international_research_drop_down.marketing}
            </a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/laboratories/technical">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.international_research_drop_down.department}
            </a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">
              {
                header.laboratories_drop_down.international_research_drop_down
                  .ict_department
              }
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default InnerDropdown3;
