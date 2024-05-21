import "@/app/globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./components/Layout";
import { DetailPage, HomePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <HomePage />
            </Container>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Container>
              <DetailPage />
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
