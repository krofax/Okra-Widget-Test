import Okra from "okra-js"
import logo from './logo.svg';
import './App.css';

function App() {
  const widgetOkra = () => {

    Okra.buildWithOptions({
        name: 'Peter the Builder',
        env: 'sandbox',
        app_id: '',// app_id from your app builder
        key: '5aa2bcb4-a198-5c20-8d69-7dcf78207755', 
        token: '5da6358130a943486f33dced',
        products: ['auth','identity','balance','transactions', 'income'],
        //selfieVerify: true, //in lowercase
        onSuccess: function(data){
            console.log('options success', data)
        },
        onClose: function(){
            console.log('options close')
        }
    })
  
      }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => widgetOkra()}>
          Run widget
        </button>
      </header>
    </div>
  );
}

export default App;