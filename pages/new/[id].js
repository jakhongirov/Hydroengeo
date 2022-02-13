import { useEffect, useState } from "react";
import parse from "html-react-parser";
const { useRouter } = require("next/router");

import Layout from "../../src/components/layout/layout";

function NewsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://hydroengeo.herokuapp.com/news/" + id, {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setData(data.data[0].news_text);
        }
      });
  }, [id]);

  return (
    <Layout>
      <section className="new">
        <div className="container">{parse(`${data}`)}</div>
      </section>
    </Layout>
  );
}

export default NewsPage;
