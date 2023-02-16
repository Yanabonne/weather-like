import "./Footer.css";

function Footer() {  
  return (
    <footer className="footer">
        <div className="footer__icons">
            <button type='button' className="footer__icon footer__icon_github"></button>
            <button type='button' className="footer__icon footer__icon_gmail"></button>
            <button type='button' className="footer__icon footer__icon_tg"></button>
        </div>
      <p className="footer__author">Яна Морозова, 2023</p>
    </footer>
  );
}

export default Footer;