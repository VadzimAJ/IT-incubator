
import MainRating from './components/main_components/MainRating'
import MainLogo from './components/main_components/MainLogo';
let Main = () => {
  return (
      <main className="App-main">
          <MainLogo />
          
          <MainRating value = {0}/>
          <MainRating value = {1}/>
          <MainRating value = {2}/>
          <MainRating value = {3}/>
          <MainRating value = {4}/>
          <MainRating value = {5}/>
          <MainRating value = {6}/>
      </main>
  );
}


export default Main;
