import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyAppBar from "./components/MyAppBar";

const App = () => {

  return (
    <BrowserRouter>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
