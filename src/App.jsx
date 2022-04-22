import React from "react";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import ProductListWithThunk from "./components/ProductListWithThunk";

export const ThemeContext = React.createContext("");

const App = () => {

  const [theme, setTheme] = React.useState("#fff");

  const changeThemeHandler = () => {
    let num = Math.floor(Math.random()*10) % 7;
    const colors = ["#658532","#1fe7dd","#393b35","#cc1f84","#2d5feb","#6d1e46","#dcf311"];
    setTheme(colors[num]);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container-fluid">
        <h1>Redux Sample</h1>
        <button className="btn btn-primary" onClick={changeThemeHandler}>Current: {theme}</button>
        <hr />
        <div className="row">
          <div className="col">
            <ProductList />
          </div>
          <div className="col">
            <ProductDetails />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ProductListWithThunk />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
