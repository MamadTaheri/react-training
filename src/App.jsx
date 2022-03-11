import UseMemoComponent from "./components/06-useMemo/UseMemoComponent";
import UseMemoComponent2 from "./components/06-useMemo/UseMemoComponent2";

const App = () => {
  return (
    <div className="container text-center border border-primary rounded p-2 ">
      <div className="row">
        <UseMemoComponent />
        <hr />
        <hr />
        <UseMemoComponent2 />
      </div>
    </div>
  );
};

export default App;
