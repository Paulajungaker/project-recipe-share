import "./styling/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <img className="footerLogo" src="/icons/logoIcon.png" alt="Logotype" />
        <h4 className="contact">Contact</h4>
        <p className="footerEmail">reciply@mailaccount.com</p>
        <p className="footerNumer">+46 070 000 000</p>
        <h4 className="privacyPolicy">Privacy Policy</h4>
        <h4 className="about">About</h4>
      </div>
    </div>
  );
};

export default Footer;
