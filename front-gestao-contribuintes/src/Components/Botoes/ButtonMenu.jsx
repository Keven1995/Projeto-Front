import React, { useState } from "react";
import styles from "./ButtonMenu.module.css";

const MenuButton = ({ isOpenProp }) => {
  const [isOpen, setIsOpen] = useState(isOpenProp || false);
  const [contribuintesOpen, setContribuintesOpen] = useState(false);
  const [dependentesOpen, setDependentesOpen] = useState(false);
  const [arvoreOpen, setArvoreOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleContribuintes = () => {
    setContribuintesOpen(!contribuintesOpen);
    setDependentesOpen(false);
    setArvoreOpen(false);
  };

  const toggleDependentes = () => {
    setDependentesOpen(!dependentesOpen);
    setContribuintesOpen(false);
    setArvoreOpen(false);
  };

  const toggleArvore = () => {
    setArvoreOpen(!arvoreOpen);
    setContribuintesOpen(false);
    setDependentesOpen(false);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuButtonContainer}>
        <button
          className={`br-button small circle ${styles.menuButton}`}
          type="button"
          aria-label="Menu"
          data-toggle="menu"
          data-target="#main-navigation"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <div
        className={`br-menu push active ${isOpen ? "" : "d-none"} ${
          styles.menu
        }`}
        id="main-navigation"
      >
        <div className="menu-panel">
          {isOpen && (
            <nav className="menu-body" role="tree">
              <div className="menu-folder">
                <a
                  className="menu-item"
                  role="treeitem"
                  href={process.env.REACT_APP_FRONT_URL}
                >
                  <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                  </span>
                  <span className="content">Home</span>
                </a>
                <a
                  className="menu-item"
                  role="treeitem"
                  onClick={toggleContribuintes}
                  style={{ cursor: "pointer" }}
                >
                  <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                  </span>
                  <span className="content">Contribuintes</span>
                </a>
                <ul className={`${contribuintesOpen ? "" : "d-none"}`}>
                  <li>
                    <a
                      className="menu-item"
                      href={process.env.REACT_APP_FRONT_URL + "/cadastroContribuintes"}
                      role="treeitem"
                    >
                      <span className="icon">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </span>
                      <span className="content">Cadastro</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="menu-item"
                      href={process.env.REACT_APP_FRONT_URL + "/cadastro"}
                      role="treeitem"
                    >
                      <span className="icon">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </span>
                      <span className="content">Dados Contribuinte</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="menu-item"
                      href={process.env.REACT_APP_FRONT_URL + "/atualizaCadastro"}
                      role="treeitem"
                    >
                      <span className="icon">
                        <i className="fas fa-archive" aria-hidden="true"></i>
                      </span>
                      <span className="content">Atualiza Cadastro</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="menu-item"
                      href={process.env.REACT_APP_FRONT_URL + "/infoContribuicao"}
                      role="treeitem"
                    >
                      <span className="icon">
                        <i
                          className="fas fa-address-book"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="content">
                        Informação de Contribuição
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-folder">
                <a
                  className="menu-item"
                  role="treeitem"
                  onClick={toggleDependentes}
                  style={{ cursor: "pointer" }}
                >
                  <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                  </span>
                  <span className="content">Dependentes</span>
                </a>
                <ul className={`${dependentesOpen ? "" : "d-none"}`}>
                  <li>
                    <a
                      className="menu-item"
                      href={`${process.env.REACT_APP_FRONT_URL}/cadastroDependentes`}
                      role="treeitem"
                    >
                      <span className="icon">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </span>
                      <span className="content">Cadastro</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-folder">
                <a
                  className="menu-item"
                  role="treeitem"
                  onClick={toggleArvore}
                  style={{ cursor: "pointer" }}
                >
                  <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                  </span>
                  <span className="content">Arvore Genealógica</span>
                </a>
                <ul className={`${arvoreOpen ? "" : "d-none"}`}>
                  <li>
                    <a
                      className="menu-item"
                      href={process.env.REACT_APP_FRONT_URL + "/arvoregenealogica"}
                      role="treeitem"
                    >
                      <span className="icon">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </span>
                      <span className="content">Familiares</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </div>
      </div>
      <div
        className={styles.menuScrim}
        data-dismiss="menu"
        tabIndex="0"
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default MenuButton;
