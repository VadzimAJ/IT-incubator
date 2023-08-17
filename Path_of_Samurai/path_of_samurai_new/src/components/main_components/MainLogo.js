import logo from './logo.svg';
import PageTitle from './PageTitle';


let MainLogo = (props) => {
  return (
      <div className="Main-logo">
        <PageTitle title={props.titleValue}/>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
  );
}

export default MainLogo;
