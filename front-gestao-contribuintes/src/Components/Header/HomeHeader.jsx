import React from "react";
import govbr from "../../Img/govbr.svg";
import MenuButton from "../Botoes/ButtonMenu";
import styles from "./Header.module.css";
import ButtonAcess from "../Botoes/ButtonAcess";
import MenuButtonHeader from "../Botoes/ButtonMenuHeader";

function HomeHeader() {
  return (
    <header className="br-header">
      <div className="container-lg">
        <div className="header-top">
          <div className="header-logo">
            <div
              style={{ cursor: "pointer" }}
              className="header-logo"
              onClick={() =>
                (window.location.href = process.env.REACT_APP_FRONT_URL)
              }
            >
              <img src={govbr} alt="Logo do GovBR" />
            </div>
          </div>
          <div className="header-actions">
            <div className="header-links dropdown">
              <button
                className="br-button circle small"
                type="button"
                data-toggle="dropdown"
                aria-label="Abrir Acesso Rápido"
              >
                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <div className="br-list">
                <div className="header">
                  <div className="title">Acesso Rápido</div>
                </div>
                <a
                  className="br-item"
                  href="https://www.gov.br/pt-br/orgaos-do-governo"
                >
                  Órgãos do Governo
                </a>
                <a
                  className="br-item"
                  href="https://www.gov.br/acessoainformacao/pt-br"
                >
                  Acesso à Informação
                </a>
                <a
                  className="br-item"
                  href="https://www4.planalto.gov.br/legislacao"
                >
                  Legislação
                </a>
                <a
                  className="br-item"
                  href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital"
                >
                  Acessibilidade
                </a>
              </div>
            </div>
            <span className="br-divider vertical mx-half mx-sm-1"></span>
            <div className="header-functions dropdown">
              <div>
                <ButtonAcess />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header_bottom}>
          <div className={styles.header_menu}>
            <div className={styles.header_menu_trigger}>
              <MenuButtonHeader />
            </div>
            <div className={styles.header_info}>
              <div className={styles.header_title}>
                Sistema de Regimes Próprios de Previdência
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
