import Body from './components/Body';
import './App.css';
import { Provider } from 'react-redux';
import appStore from './utilities/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div className="text-xl">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
