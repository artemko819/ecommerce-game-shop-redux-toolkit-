import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "./redux";
import Header from "./components/Header/Header";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/game/:title" element={<DetailsPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
