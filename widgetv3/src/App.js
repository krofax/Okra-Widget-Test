import Okra from "okra-js"
import logo from './logo.svg';
import './App.css';

function App() {
  const widgetOkra = () => {

    Okra.buildWithOptions({
        name: 'Peter the Builder',
        env: 'production',
        app_id: '',// app_id from your app builder
        //key: 'e5ac7db7-be2c-50e5-b75a-e3715a67587e', //Sandbox
        key: 'xxxxxxxxx',//prod
        token: 'xxxxxxx',
        callback_url:"https://webhook.site/c2de8555-39a3-4062-8c78-08d425756071",
        clientName:"client",
        products: ['auth','transactions'],
  //       payment: true,
  //       charge: {
  //       type: 'one-time',
  //       amount: 100, //user will be prompted to enter amount
  //       currency: 'NGN', //supports 'NGN'
  //       account: '5f450b2689a23801307c8b5b'// Your companies Okra account id
  // },
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