import data from "../data";

export default function Card() {
  return data.map((card) => {
    return (
      <section className="card">
        <img
          src={`../../public/${card.coverImg}`}
          alt={card.coverImg}
          className="card--img"
        />
        <div className="card--stats">
          <img src="../../public/Star 1.png" alt="star" className="card--star" />
          <span className="gray">{card.stats.rating} {card.stats.reviewCount} • </span>
          <span className="gray">{card.location}</span>
          <p className="card--title">{card.title}</p>
        </div>
        <p className="card--price"> <span className="bold">From: ${card.price}</span>/per person</p>
      </section>
    );
  });
}
