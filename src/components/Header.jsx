import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/StarWars.png";
import useGlobalData from "../hooks/useGlobalData";
import { Link, useNavigate } from "react-router-dom";
export default function HeaderBar() {
  const { store, dispatch } = useGlobalData();
  const title = `Favorites ${store.favorite?.length || "0"}`;
  const navigate = useNavigate();
  const handleRemove = (item) => {
    dispatch({ type: "DELETE", payload: item.id });
  };
  const handleDetails = (info) => {
    navigate("/details", {
      state: info,
    });
  };
  return (
    <header>
      <Navbar bg="dark" className="text-light pe-3 ps-3 pt-3" fixed="top">
        <Navbar.Brand>
          <Link to={"/"}>
            <img src={logo} className="w-25" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown
            title={title}
            id="basic-nav-dropdown"
            className="ms-auto "
            align="end"
          >
            {store.favorite?.length > 0
              ? store.favorite.map((item, index) => {
                  return (
                    <div className="d-flex" key={index}>
                      <NavDropdown.Item
                        onClick={() => handleDetails(item)}
                      >
                        {item.data.name}
                      </NavDropdown.Item>
                      <Button variant="outline">
                        <i
                          className="bi bi-trash-fill"
                          onClick={() => handleRemove(item)}
                        ></i>
                      </Button>
                    </div>
                  );
                })
              : null}
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
