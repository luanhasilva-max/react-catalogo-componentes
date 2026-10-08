function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <article className="card-curso">
      <span className="nivel">{nivel}</span>

      <h3>{nome}</h3>

      <p>
        <strong>Duração:</strong> {duracao}
      </p>

      <p>
        <strong>Modalidade:</strong> {modalidade}
      </p>

      <p>
        <strong>Nível:</strong> {nivel}
      </p>

      <div className={vagas > 0 ? "vagas disponivel" : "vagas completa"}>
        {vagas > 0
          ? `Vagas disponíveis: ${vagas}`
          : "Turma completa"}
      </div>
    </article>
  );
}

export default CardCurso;