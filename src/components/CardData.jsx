import { Card, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { fecthData } from "../api/api";
import { useEffect, useState } from "react";
import useGlobalData from "../hooks/useGlobalData";
import { useNavigate } from "react-router-dom";

export default function CardsWars({ dataName }) {
  const [data, setData] = useState([]);
  const { store, dispatch } = useGlobalData();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fecthData(dataName);
        setData(result);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [dataName]);

  const handleFavorite = (item) => {
    const dataFavorite = {
      data: item.properties,
      id: item._id,
      category: dataName,
    };
    if (!store.favorite.some((store) => store.id === item._id)) {
      dispatch({ type: "ADD", payload: dataFavorite });
    }
  };
  const handleDetails = (item) => {
    const info = {
      data: item.properties,
      id: item._id,
      category: dataName,
    };
    navigate("/details", { state: info });
  };
  console.log(data);
  return (
    <Container fluid style={{ marginTop: "150px" }}>
      <h1 className="star-wars-text">{dataName}</h1>
      <Row
        className="flex-nowrap overflow-auto p-3"
        style={{
          whiteSpace: "nowrap",
          display: "flex",
          gap: "10px",
        }}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <Col key={index} xs="auto">
              <Card
                bg="dark"
                style={{ minWidth: "300px", width: "auto" }}
                text="danger"
                className="border-info"
              >
                <Card.Header>
                  <h1 className="h5">{item.properties.name}</h1>
                </Card.Header>
                <Card.Body>
                  {dataName === "people" && (
                    <>
                      <h5> Gender: {item.properties.gender || "nada"}</h5>
                      <h5>
                        Hair Color: {item.properties.hair_color || "nada"}
                      </h5>
                      <h5>Eye Color: {item.properties.eye_color || "nada"}</h5>
                      <h5>aaaa{item.uid}</h5>
                    </>
                  )}
                  {dataName === "vehicles" && (
                    <>
                      <h5> Model: {item.properties.model}</h5>
                      <h5>Passengers: {item.properties.passengers}</h5>
                    </>
                  )}
                  {dataName === "planets" && (
                    <>
                      <h5>Population: {item.properties.population}</h5>
                      <h5>Climate: {item.properties.climate}</h5>
                    </>
                  )}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <Button onClick={() => handleDetails(item)}>
                    Learn more
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => handleFavorite(item)}
                  >
                    <h3>
                      <i className="bi bi-suit-heart"></i>
                    </h3>
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </Row>
    </Container>
  );
}
