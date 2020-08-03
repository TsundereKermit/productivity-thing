import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import StickyNote from "./components/StickyNotes";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container fluid>
          <ItemModal />
          <StickyNote />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
