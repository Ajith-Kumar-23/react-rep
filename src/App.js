import './App.css';
import Login from './Components/Login';
import { Container, Row , Col } from 'react-bootstrap';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter ,FiFacebook, FiLinkedin } from 'react-icons/fi';



function App() {
  return (
    <div className="App">
      {/* Nav Section Start*/}
      
        <nav className="navbar navbar-light justify-content-between">
          <Container>
            <a className="navbar-brand tealvue"><span className="title-t">T</span>EAL<sapn className="title-t">V</sapn>UE</a>
                <button className="btn btn-outline my-2 my-sm-0" id="sign-in" type="submit">Sign In</button>
          </Container>
        </nav>
      
      {/* Nav Section End */}

      {/* Body Section Starts */}

      <Container>
        <Row>
          <Col md={8} sm={12} lg={8} >
            <div className="background">
              
            </div>
          </Col>
          <Col md={4} sm={10} lg={4}>
            <div className="login-page">
              <Login />
            </div>
          </Col>
        </Row>
        <br />
      </Container>
      {/* Body Section Ends */}

      {/* Footer Section Starts */}

      <footer className="footer">
        <div className="footer-flex">
          <div className="box-1">
            <b>Copyrights &copy; 2021 All rights reserved</b>
          </div>
          <div className="box-2">
            <span className="footer-icon"><AiOutlineInstagram />&nbsp;.&nbsp;<FiTwitter />&nbsp;.&nbsp;<FiFacebook />&nbsp;.&nbsp;<FiLinkedin /></span>
            <br />
            <small>Follow us for more updates</small>
          </div>
        </div>
      </footer>

      {/* Footer Section Ends */}
    </div>
  );
}

export default App;
