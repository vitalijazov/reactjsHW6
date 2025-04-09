import { Provider } from "react-redux";
import GoodsItemsList from "./components/GoodsItemsList";
import NewGoodsItemForm from "./components/NewGoodsItem";
import goodsStore from "../storage/goodsStore";

function App() {
  return (
    <div className="App">
      <Provider store={goodsStore}>
        <NewGoodsItemForm />
        <GoodsItemsList />
      </Provider>
    </div>
  );
}

export default App;