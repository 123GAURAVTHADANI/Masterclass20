function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt="preview" />
      <div>
        <span>
          <b className="card__bold">The Great Indian Festival</b>
        </span>
      </div>
    </div>
  );
}
export default Card;
