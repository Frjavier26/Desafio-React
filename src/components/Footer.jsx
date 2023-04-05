import Badge from 'react-bootstrap/Badge';

function Footer({footerText}) {
  return (
    <h1>
    Esta es una galeria de: <Badge bg="success">{footerText}</Badge>
  </h1>
  );
}

export default Footer;