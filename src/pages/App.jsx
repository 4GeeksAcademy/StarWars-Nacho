import { Col, Container, Row } from "react-bootstrap";
import HeaderBar from "../components/Header";
import CardsWars from "../components/CardData";

function App() {
  return (
    <>
      <HeaderBar></HeaderBar>
      <Container
        fluid
        className="bg-dark text-white min-vh-100  align-items-center justify-content-center w-100 "
      >
        <Row>
          <CardsWars dataName="people" />
        </Row>
        <Row>
          <CardsWars dataName="vehicles" />
        </Row>
        <Row>
          <CardsWars dataName="planets" />
        </Row>
      </Container>
    </>
  );
}

export default App;
