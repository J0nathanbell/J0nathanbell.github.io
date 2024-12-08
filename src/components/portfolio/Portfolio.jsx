import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio({ initialData, list }) {
  const [selected, setSelected] = useState(list[0]?.id); // Default to first item in the list
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const selectedItem = list.find((item) => item.id === selected);
    if (selectedItem) {
      setData(initialData);
    }
  }, [selected, initialData, list]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="topContainer">
        <ul className="portfolio-list">
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>

      <div className="container">
        {data.map((d, index) => (
          <div className="item" key={index}>
            <div className="appmedia">
              <a className="applink" href={d.appLink}>
                <img className="appimage" src={d.img} alt="" />
              </a>
            </div>

            <div className="paragraph-box">
              <p className="paragraph-text">{d.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
