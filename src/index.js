import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App_profile_card";
// import App from "./App_date_count1";
// import App from "./App_date_count2";
// import App from "./App_flash_card";
// import App from "./App_accordion";
// import App from "./App_tip_calculator";
import App from "./App_star";
// import App from "./App_showHide";
// import App from "./App_currency_conversion";

// use star rating outside of the component
function Test() {
  const[movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <App maxRating={10} size={30} color="blue" onSetRating= {setMovieRating} />
      <p>This movie is rated {movieRating} stars</p>
    </div>
  );

}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* add aditional design using class */}
    <App
      maxRating={5}
      size={50}
      color="red"
      className="test"
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />

    {/* using outside of the component */}
    <Test/>
  </React.StrictMode>
);
