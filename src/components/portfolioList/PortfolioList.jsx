import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolio-list-item active" : "portfolio-list-item "}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
