import Cabecalho from "./componentes/Cabecalho.jsx";
import CardCurso from "./componentes/CardCurso.jsx";
import Destaque from "./componentes/Destaque.jsx";
import Rodape from "./componentes/Rodape.jsx";
import "./App.css";

function App() {
  const cursos = [
    {
      nome: "Desenvolvimento de Sistemas",
      duracao: "1200 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 12
    },
    {
      nome: "Redes de Computadores",
      duracao: "1000 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 8
    },
    {
      nome: "Manutenção de Computadores",
      duracao: "800 horas",
      modalidade: "Presencial",
      nivel: "Profissionalizante",
      vagas: 15
    },
    {
      nome: "Programação Web",
      duracao: "900 horas",
      modalidade: "Online",
      nivel: "Profissionalizante",
      vagas: 10
    },
    {
      nome: "Banco de Dados",
      duracao: "700 horas",
      modalidade: "Híbrido",
      nivel: "Técnico",
      vagas: 0
    },
    {
      nome: "Desenvolvimento Mobile",
      duracao: "850 horas",
      modalidade: "Online",
      nivel: "Profissionalizante",
      vagas: 6
    }
  ];

  return (
    <div className="pagina">
      <Cabecalho />

      <main>
        <section className="secao">
          <div className="titulo-secao">
            <span className="etiqueta">CURSOS</span>

            <h2>Nossos cursos</h2>

            <p>
              Escolha uma formação e desenvolva suas habilidades.
            </p>
          </div>

          <div className="lista-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section className="secao">
          <div className="titulo-secao centralizado">
            <span className="etiqueta">DIFERENCIAIS</span>

            <h2>Por que estudar tecnologia?</h2>
          </div>

          <div className="lista-destaques">
            <Destaque
              titulo="Aprenda fazendo"
              texto="Desenvolva projetos durante sua formação."
            />

            <Destaque
              titulo="Mercado de trabalho"
              texto="Prepare-se para novas oportunidades profissionais."
            />

            <Destaque
              titulo="Conhecimento"
              texto="Aprenda tecnologias utilizadas no mercado."
            />
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;