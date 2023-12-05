import "./Card.scss";

function Card() {
  return (
    <article className="cardLogement">
      <img src={cover} alt="logement" />
      <div className="cardLogementStyle">
        <p className="cardTitle">{title}</p>
      </div>
    </article>
  );
}
export default Card;

//les cards de locations récupèrent les couvertures et titres en props depuis Home
