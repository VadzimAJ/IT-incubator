function MainStar(props) {
  if (props.selected === true) {
    return <span className="Main-star"><b>Star</b></span>;
  } else {
    return <span className="Main-star">Star</span>;
  }
}

export default MainStar;
