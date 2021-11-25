
import './App.css';
import HeaderLogo from './componants/Header/MainHeader/HeaderLogo';
import Topbar from './componants/Header/Topbar';
import HeaderButtom from './componants/Headerbutton/HeaderButtom';
import MainSection from './componants/mainSection/MainSection';

function App() {
  return (
    <div className="App">
      <Topbar />
      <HeaderLogo />
      <HeaderButtom />
      <MainSection />
    </div>
  );
}

export default App;
