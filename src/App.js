import './App.css';
import Home from './components/Home';
import Card from './components/Card';
import Cardset from './components/Cardset';
import Moral from './components/Moral';
import Fact from './components/Fact';
import Video from './components/Video';

function App() {
  return(
    <div className='App'>
      <Home></Home>
      <Card></Card>
      <Cardset></Cardset>
      <Video></Video>
      <Moral></Moral>
      <Fact></Fact>
    </div>
  )
}

export default App;
