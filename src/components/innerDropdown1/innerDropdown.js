import Link from "next/link";
import { useSelector } from "react-redux";
import Content from "../../Localization/Content";

const InnerDropdown1 = () => {
  const {
    count: { lang },
  } = useSelector(state => state);

  const { header } = Content[lang];

  return (
    <>
      <ul className="inner__drop-down">
        <li className="inner__drop-down-item">
          <Link href="/laboratories/uran">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.research_drop_down.hydromineral}
            </a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/laboratories/ameliorative">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.research_drop_down.ameliorative}
            </a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/laboratories/resources">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.research_drop_down.Resources}
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default InnerDropdown1;
