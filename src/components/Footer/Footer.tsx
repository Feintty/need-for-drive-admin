import React, { useState } from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  const [createError, setCreateError] = useState(false);

  if (createError) {
    setCreateError(false);
    throw new Error();
  }
  return (
    <footer className="footer">
      <div className="footer__links">
        <a className="footer__link link-default">Главная страница</a>
        <a
          className="footer__link link-default"
          onClick={() => setCreateError(true)}
        >
          Сгенерировать ошибку
        </a>
      </div>
      <div className="footer__copyright">Copyright © 2020 Simbirsoft</div>
    </footer>
  );
};

export default Footer;
