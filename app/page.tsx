import Image from "next/image";

export default function Home() {
  return (
    <main className="landing-shell">
      <section className="landing-stage">
        <div className="landing-copy">
          <Image
            src="/logos aprovados-02.png"
            alt="Logo Seu Cash"
            width={460}
            height={130}
            className="brand-logo"
            priority
          />

          <div className="chat-bubble bubble-small">Precisa de mais credito?</div>

          <div className="chat-bubble bubble-large">
            <span>Com a Seu Cash,</span>
            <strong>voce consegue de onde estiver!</strong>
          </div>

          <a
            href="https://pwa.seucash.com.br/seu-cash-fr"
            className="cta-button"
            aria-label="Clique aqui e contrate"
            target="_blank"
            rel="noopener noreferrer"
          >
            CLIQUE AQUI E CONTRATE!
          </a>
        </div>

        <div className="landing-model" aria-hidden="true">
          <Image
            src="/modelo-sem-fundo.png"
            alt=""
            width={880}
            height={880}
            className="model-image"
            priority
          />
        </div>
      </section>
    </main>
  );
}
