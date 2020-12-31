import "./App.css";
import CreatePost from "./components/CreatePost";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreatePost />
      </div>
    </Provider>
  );
}

export default App;
