import GovNegativa from "../../Img/govbrNegativa.svg";
import AcessoImg from "../../Img/acessoInformacao.png";

function Footer() {
  return (
    <footer className="br-footer">
      <div className="container-lg">
        <div className="logo">
          <img src={GovNegativa} alt="Logo Negativa do GovBR" />
        </div>
        <div
          className="br-list horizontal"
          data-toggle="data-toggle"
          data-sub="data-sub"
        >
          <div className="col-2">
            <div className="br-item header">
              <div className="content text-down-01 text-bold text-uppercase">
                Navegação
              </div>
              <div className="support">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className="br-list">
              <span className="br-divider d-md-none"></span>
              <a className="br-item" href={process.env.REACT_APP_FRONT_URL}>
                <div className="content">Home</div>
              </a>
              <a className="br-item" href={process.env.REACT_APP_FRONT_URL + "/login"}>
                <div className="content">Cadastro de Contribuintes</div>
              </a>
              <a className="br-item" href={process.env.REACT_APP_FRONT_URL + "/login"}>
                <div className="content">Cadastro de Dependentes</div>
              </a>
              <a
                className="br-item"
                href={process.env.REACT_APP_FRONT_URL + "/login"}
              >
                <div className="content">Árvore Genealógica</div>
              </a>
              <span className="br-divider d-md-none"></span>
            </div>
          </div>
          <div className="col-2">
            <div className="br-item header">
              <div className="content text-down-01 text-bold text-uppercase">
                Serviços
              </div>
              <div className="support">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className="br-list">
              <span className="br-divider d-md-none"></span>
              <a className="br-item" href="#">
                <div className="content">Gestão de Contribuição</div>
              </a>
              <a className="br-item" href="#">
                <div className="content">Gestão de Benefícios</div>
              </a>
              <a className="br-item" href="#">
                <div className="content">Gestão de Empréstimos</div>
              </a>
              <span className="br-divider d-md-none"></span>
            </div>
          </div>
        </div>
        <div className="d-none d-sm-block">
          <div className="row align-items-end justify-content-between py-5">
            <div className="col">
              <div className="social-network">
                <div className="social-network-title">Redes Sociais</div>
                <div className="d-flex">
                  <a
                    className="br-button circle"
                    href="#"
                    aria-label="Compartilhar por Facebook"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a
                    className="br-button circle"
                    href="#"
                    aria-label="Compartilhar por Twitter"
                  >
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a
                    className="br-button circle"
                    href="#"
                    aria-label="Compartilhar por Linkedin"
                  >
                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                  <a
                    className="br-button circle"
                    href="#"
                    aria-label="Compartilhar por Whatsapp"
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col assigns text-right">
              <img
                className="ml-4"
                src={AcessoImg}
                alt="Acesso a informação"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      <span className="br-divider my-3"></span>
      <div className="container-lg">
        <div className="info">
          <div className="text-down-01 text-medium pb-3">
            Texto destinado a exibição de informações relacionadas à&nbsp;
            <strong>licença de uso.</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
