function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function Footer() {
  return (
    <div className="section-footer">
      <h3>{generateRandomNumber()} This is footer section!</h3>
    </div>
  );
}

export default Footer;
