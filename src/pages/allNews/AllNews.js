import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewsCard from "../../components/newsCard/NewsCard";

const AllNews = () => {
  let { sourceId } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "-" + dd + "-" + yyyy;

    fetch(
      `https://newsapi.org/v2/everything?q=${sourceId}&from=${today}&sortBy=publishedAt&sources?&apiKey=6ef33175ea344ae9a50694cda7551c4c`
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, [sourceId]);

  return (
    <div>
      this is all news {sourceId}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {news.map((n, i) => (
          <NewsCard key={i} article={n} index={i} />
        ))}
      </div>
    </div>
  );
};

export default AllNews;
