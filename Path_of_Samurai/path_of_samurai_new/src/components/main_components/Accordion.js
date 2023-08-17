
import MainRating from './MainRating';
import PageTitle from './PageTitle';

let Accordion = (props) => {
  return (
      <div className="Main-accordion">
        <PageTitle title={props.titleValue}/>
          <MainRating value = {0}/>
          <MainRating value = {1}/>
          <MainRating value = {2}/>
          <MainRating value = {3}/>
          <MainRating value = {4}/>
          <MainRating value = {5}/>
          <MainRating value = {-1}/>
      </div>
  );
}


export default Accordion;
