import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockEmpty = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="276" rx="0" ry="0" width="280" height="27" /> 
    <rect x="0" y="317" rx="0" ry="0" width="280" height="88" /> 
    <rect x="2" y="425" rx="0" ry="0" width="119" height="24" /> 
    <rect x="161" y="415" rx="0" ry="0" width="114" height="44" />
  </ContentLoader>
)

export default PizzaBlockEmpty;