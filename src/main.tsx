import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import './index.css'
import App from './app/app';
import { store } from './service/store';




const domNode = document.getElementById("root") as HTMLDivElement;
const root = createRoot(domNode)
root.render(
    <Provider store = {store}>
      <App />
    </Provider>
);
