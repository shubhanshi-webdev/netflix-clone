import Body from './Components/Body';
import Header from './Components/Header';
import './App.css';
import { Provider} from 'react-redux';
import store from './Store/Slics/store';

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
