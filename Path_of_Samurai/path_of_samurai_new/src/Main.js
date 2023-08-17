
import MainLogo from './components/main_components/MainLogo';
import Accordion from './components/main_components/Accordion';

let Main = () => {
  return (
      <main className="App-main">
          <MainLogo titleValue = {"Main Rating"}/>
          <Accordion titleValue = {"Accordion Rating"}/>
      </main>
  );
}


export default Main;
