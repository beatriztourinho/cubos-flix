import React from "react";

import bagIcon from "../../assets/images/bag-icon.svg";
import cupomIcon from "../../assets/images/coupon-icon.svg";
import personIlustration from "../../assets/images/person-illustration.svg";

import "./sacola.css";

function Sacola() {

  return (
    <div className="sacola">
      <header>
        <img src={bagIcon} alt="sacola" />
        <h1>Sacola</h1>
      </header>
      <div className="sacola-main">
          <h1>Sua sacola está vazia</h1>
          <h2>Adicione filmes agora</h2>
          <img src={personIlustration} alt="" />
        <footer>
          <div>
            Insira seu cupom
            <div className="input-cupom">
              <input
                placeholder="Cupom de desconto"
              />
              <button>
                <img src={cupomIcon} alt="" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Sacola;