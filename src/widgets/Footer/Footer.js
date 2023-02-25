import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://github.com/Yanabonne" target="_blank" rel="noreferrer">
          <button
            type="button"
            className="footer__icon footer__icon_github"
          ></button>
        </a>
        <a href="mailto:yanamormmm@gmail.com" target="_blank" rel="noreferrer">
          <button
            type="button"
            className="footer__icon footer__icon_gmail"
          ></button>
        </a>
        <a href="https://t.me/chek_ess" target="_blank" rel="noreferrer">
          <button
            type="button"
            className="footer__icon footer__icon_tg"
          ></button>
        </a>
      </div>
      <p className="footer__author">Яна Морозова, 2023</p>
    </footer>
  );
}

export default Footer;
