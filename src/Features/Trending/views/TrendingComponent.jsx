import { Tab } from "bootstrap"
import { Nav } from "react-bootstrap"
export default function TrendingComponent() {
  return (
    <div className="col-2">
      <div className="trending-products-list">
        <h5>Clothing</h5>
        <Tab.Container defaultActiveKey="accessories">
          <Nav variant="tabs" className="nav-tabs" id="trendingTab">
            <Nav.Item>
              <Nav.Link eventKey="accessories">Accessories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bags">Bags</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bSellers">Best Sellers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="shirts">Shirts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="shoesTwo">Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="travelOut">Travel & Outdoor</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="accessories">Accessories content goes here</Tab.Pane>
            <Tab.Pane eventKey="bags">Bags content goes here</Tab.Pane>
            <Tab.Pane eventKey="bSellers">Best Sellers content goes here</Tab.Pane>
            <Tab.Pane eventKey="shirts">Shirts content goes here</Tab.Pane>
            <Tab.Pane eventKey="shoesTwo">Shoes content goes here</Tab.Pane>
            <Tab.Pane eventKey="travelOut">Travel & Outdoor content goes here</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <p className="offer"><a href="#">Limited-Time Offer!</a></p>
      </div>
    </div>
  )
}
