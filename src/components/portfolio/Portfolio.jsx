import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import './portfolio.scss'
import {
  featuredPortfolio,
  webappPortfolio,
  mobilePortfolio,
  designingPortfolio
} from "../../data.js";


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Whatever.Watch",
    },
    {
      id: "webapp",
      title: "ScareBnB",
    },
    {
      id: "mobile",
      title: "Pokedex",
    },
    {
      id: "designing",
      title: "Python",
    }
  ];

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break
      case "webapp":
        setData(webappPortfolio);
        break
      case "mobile":
        setData(mobilePortfolio);
        break
      case "designing":
        setData(designingPortfolio);
        break
        default:
          setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className='portfolio' id="portfolio">
      <h1>Projects.</h1>
      <ul>
        {list.map((item)=> (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
            <h2>{d.tag}</h2>
            <a href={d.appLink}>
              <img className='blah' src={d.img} alt="" />
            </a>
            <h3>{d.title}</h3>
            <a href={d.githubLink}>
              <img className="icon" src={d.icon} alt=""/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
