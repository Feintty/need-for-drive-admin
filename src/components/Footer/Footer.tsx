import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a className="footer__link link-default">Главная страница</a>
        <a className="footer__link link-default">Ссылка</a>
      </div>
      <div className="footer__copyright">Copyright © 2020 Simbirsoft</div>
    </footer>
  );
};

export default Footer;
