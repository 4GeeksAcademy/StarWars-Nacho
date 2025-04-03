import { Container, Row, Col } from "react-bootstrap";
import HeaderBar from "../components/Header";
import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const info = location.state;
  console.log(info);
  return (
    <>
      <HeaderBar></HeaderBar>
      <Container
        fluid
        className="bg-dark text-white min-vh-100 d-flex  w-100 text-center"
      >
        {info.category === "people" && (
          <>
            <Col>
              <h1 style={{ fontSize: "50px", marginTop: "450px" }}>
                {info.data.name}
              </h1>
            </Col>
            <Col style={{ fontSize: "30px", marginTop: "300px" }}>
              <Row className="border text-center">
                Gender: {info.data.gender}
              </Row>
              <Row className="border text-center">
                {" "}
                Height: {info.data.height}
              </Row>
              <Row className="border text-center">Mass: {info.data.mass}</Row>
              <Row className="border text-center">
                Skin color: {info.data.skin_color}
              </Row>
              <Row className="border text-center">
                Hair color: {info.data.hair_color}
              </Row>
              <Row className="border text-center">
                Eyec color: {info.data.eye_color}
              </Row>
              <Row className="border text-center">
                Birth year: {info.data.birth_year}
              </Row>
            </Col>
          </>
        )}
        {info.category === "vehicles" && (
          <>
            <Col>
              <h1 style={{ fontSize: "50px", marginTop: "450px" }}>
                {info.data.name}
              </h1>
            </Col>
            <Col style={{ fontSize: "30px", marginTop: "300px" }}>
              <Row className="border text-center">Model: {info.data.model}</Row>
              <Row className="border text-center"> Crew: {info.data.crew}</Row>
              <Row className="border text-center">
                Cargo capacity: {info.data.cargo_capacity}
              </Row>
              <Row className="border text-center">
                Passengers: {info.data.passengers}
              </Row>
              <Row className="border text-center">
                Manufacturer: {info.data.manufacturer}
              </Row>
              <Row className="border text-center">Length: {info.length}</Row>
              <Row className="border text-center">
                vehicle class: {info.data.vehicle_class}
              </Row>
              <Row className="border text-center ">
                Cost in credits: {info.data.cost_in_credits}
              </Row>
            </Col>
          </>
        )}
        {info.category === "planets" && (
          <>
            <Col>
              <h1 style={{ fontSize: "50px", marginTop: "450px" }}>
                {info.data.name}
              </h1>
            </Col>
            <Col style={{ fontSize: "30px", marginTop: "300px" }}>
              <Row className="border text-center">
                Climate: {info.data.climate}
              </Row>
              <Row className="border text-center">
                Diameter: {info.data.diameter}
              </Row>
              <Row className="border text-center">
                Gravity: {info.data.gravity}
              </Row>
              <Row className="border text-center">
                Orbital period: {info.data.orbital_period}
              </Row>
              <Row className="border text-center">
                Population: {info.data.population}
              </Row>
              <Row className="border text-center">
                Rotation period: {info.rotation_period}
              </Row>
              <Row className="border text-center">
                Terrain: {info.data.terrain}
              </Row>
              <Row className="border text-center ">
                Surface water: {info.data.surface_water}
              </Row>
            </Col>
          </>
        )}
      </Container>
    </>
  );
}
