import Image from "next/image";
import React, { useState } from "react";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

import structurasDesktop from "../../assets/images/structura.jpg";
import structurasMobile from "../../assets/images/structura2.jpg";

function Structuras() {
  const {
    count: { lang },
  } = useSelector(state => state);

  const {
    header: { about_drop_down },
  } = Content[lang];

  const [img, setImg] = useState(structurasDesktop);
  const [width, setiWdth] = useState("1517");
  const [height, setHeight] = useState("865");

  React.useEffect(() => {
    if (window.innerWidth < 700) {
      setImg(structurasMobile);
      setiWdth("540");
      setHeight("1029");
    } else {
      setImg(structurasDesktop);
      setiWdth("1517");
      setHeight("865");
    }
  }, []);

  return (
    <section className="structura">
      <div className="container">
        <h1 className="structura__heading">{about_drop_down.structure}</h1>

        <Image
          className="structura__img"
          src={img}
          alt="structura"
          width={width}
          height={height}
        />
      </div>
    </section>
  );
}

export default Structuras;
