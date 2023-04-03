import "./App.css";
import CustomComponent from "./components/CustomComponent";
import { useStateValue } from "./redux/StateProvider";

function Hello() {
  return <h1>Hello everyone</h1>;
}

function App() {
  const [{ FirstName, APi_Data }, dispatch] = useStateValue();

  console.log(APi_Data);
  return (
    <div className="App">
      <h1>{FirstName}</h1>
      <CustomComponent>
        <h1>REDUX</h1>
        <h1>Roshan</h1>
        <Hello />
      </CustomComponent>
      <button
        onClick={() => {
          dispatch({ type: "APi_Data", value: 10 });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
