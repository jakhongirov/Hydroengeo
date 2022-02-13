import Image from "next/image";
import { useEffect, useState } from "react";

const Card = ({ avatar, name, date, position }) => {
  const [imageWidth, setImageWidth] = useState("240");
  const [imageHeight, setImageHeight] = useState("320");

  useEffect(() => {
    if (window.innerWidth <= 425) {
      setImageWidth("180");
      setImageHeight("260");
    }
  }, []);

  return (
    <>
      {/* <div className="card">
        <Image src={avatar} width={240} height={320} />
      </div> */}

      <div className="workers workers--padding">
        <div className="workers__card">
          <div className="avatar">
            <Image
              src={avatar}
              width={imageWidth}
              height={imageHeight}
              alt="Бимурзаев Гани Амиргалиевич"
            />
          </div>

          <table className="workers__info">
            <tbody>
              <tr className="workers__info-row">
                <td>
                  <p>Ф.И.О.</p>
                </td>
                <td>{name}</td>
              </tr>

              <tr className="workers__info-row">
                <td>На должности:</td>
                <td>{date}</td>
              </tr>
              <tr className="workers__info-row">
                <td>Должность:</td>
                <td>{position}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Card;
