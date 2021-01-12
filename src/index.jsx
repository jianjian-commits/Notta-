import reactDOM from "react-dom";
import App from "./App";
import "./style/reset.scss";
import "./style/global.scss";
import store from "./store";
import { Provider } from "react-redux";


reactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root")
)