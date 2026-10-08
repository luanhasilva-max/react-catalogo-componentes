function Destaque({ titulo, texto }) {
  return (
    <article className="destaque">
      <h3>{titulo}</h3>

      <p>{texto}</p>
    </article>
  );
}

export default Destaque;