import Link from "next/link";

import { useSelector } from "react-redux";
import Content from "../../Localization/Content";

const InnerDropdown2 = () => {
  const {
    count: { lang },
  } = useSelector(state => state);

  const { header } = Content[lang];

  return (
    <>
      <ul className="inner__drop-down">
        <li className="inner__drop-down-item">
          <Link href="/laboratories/geoecology">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.groundwater_drop_down.geoecology}
            </a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/laboratories/modeling">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.groundwater_drop_down.geoinformation}
            </a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/laboratories/groundwater">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.groundwater_drop_down.groundwater}
            </a>
          </Link>
        </li>

        <li className="inner__drop-down-item">
          <Link href="/laboratories/chemical">
            <a className="inner__drop-down-link">
              {header.laboratories_drop_down.groundwater_drop_down.chemical_laboratory}
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default InnerDropdown2;
