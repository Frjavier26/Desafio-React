import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Headernav({ navtittle }) {
    return (        
            <Navbar>
                <Container>
                <h1>{navtittle}</h1>
                </Container>
            </Navbar>
        );
}

export default Headernav;