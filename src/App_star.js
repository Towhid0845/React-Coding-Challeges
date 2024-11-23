import React, { useState } from "react";
import PropTypes from 'prop-types';

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

App_star.propTypes = {
  // maxRating: PropTypes.number.isRequired,  // you can make it required
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.array,
  defaultRating: PropTypes.number,
  className: PropTypes.string,
  // onSetRating: PropTypes.func,
}

function App_star({
  maxRating = 5,
  color = "#ff6a00",
  size = 50,
  className = "",
  message = [],
  defaultRating = 0,
  // onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "0px",
    margin: "0px",
    padding: "0px",
    color: `${color}`,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(rating) {
    // onSetRating(rating);
    setRating(rating);
    //for external use
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      {/* <p style={textStyle}>{rating || 0 }</p> */}
      <p style={textStyle}>{message.length === maxRating ? message[tempRating ? tempRating-1 : rating - 1] : tempRating || rating || 0}</p>
    </div>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
    color: { color },
  };

  return (
    <span onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {/* <span onClick={onRate}> */}
      {full ? (
        <svg
          viewBox="-0.5 -0.5 16 16"
          fill={color}
          stroke={color}
          strokeWidth="1"
          xmlns="http://www.w3.org/2000/svg"
          id="Star--Streamline-Solar-Ar"
          height="16"
          width="16"
          style={starStyle}
        >
          <desc>Star Streamline Icon: https://streamlinehq.com</desc>
          <path d="M5.720725 3.3802375000000002C6.5123750000000005 1.96008125 6.9081875 1.25 7.5 1.25c0.5918125 0 0.987625 0.710075 1.77925 2.13023125l0.2048125 0.36741250000000003c0.22499999999999998 0.40356250000000005 0.33743750000000006 0.6053499999999999 0.512875 0.7384875000000001 0.175375 0.1331375 0.39375 0.18255625 0.830625 0.2814l0.39775 0.0899875c1.53725 0.34783125 2.3059374999999998 0.5217437500000001 2.4888125 1.1098125 0.182875 0.58804375 -0.34112499999999996 1.20085625 -1.3891875 2.42635625l-0.271125 0.31706249999999997c-0.2978125 0.34825 -0.44675 0.522375 -0.5137499999999999 0.7378125000000001 -0.0669375 0.2154375 -0.0444375 0.44775000000000004 0.0005625 0.9124375l0.041 0.423c0.1584375 1.635125 0.23768750000000002 2.4526875 -0.24106249999999999 2.816125 -0.4788125 0.3634375 -1.1985 0.0320625 -2.637875 -0.630625l-0.372375 -0.17149999999999999c-0.409 -0.1883125 -0.6135 -0.28250000000000003 -0.8303125 -0.28250000000000003s-0.42131250000000003 0.09418750000000001 -0.8303125 0.28250000000000003l-0.372375 0.17149999999999999c-1.4393875 0.6626875 -2.159075 0.9940625000000001 -2.63784375 0.630625 -0.47876874999999997 -0.3634375 -0.39954375 -1.181 -0.24109375 -2.816125l0.040987499999999996 -0.423c0.04503125 -0.46468750000000003 0.06754375 -0.697 0.00055 -0.9124375 -0.0669875 -0.2154375 -0.21589375 -0.3895625 -0.5137125 -0.7378125000000001l-0.2711375 -0.31706249999999997c-1.04803125 -1.2255 -1.5720500000000002 -1.8383125 -1.389175 -2.42635625 0.182875 -0.58806875 0.951525 -0.76198125 2.4888250000000003 -1.1098125l0.39771875 -0.0899875c0.43685 -0.09884375000000001 0.655275 -0.1482625 0.8306562500000001 -0.2814s0.28786875 -0.33491875 0.51283125 -0.7384875000000001l0.20480625 -0.36740625Z"></path>
        </svg>
      ) : (
        <svg
          viewBox="-0.5 -0.5 16 16"
          fill="none"
          stroke={color}
          strokeWidth="1"
          xmlns="http://www.w3.org/2000/svg"
          id="Star--Streamline-Solar-Ar"
          height="16"
          width="16"
          style={starStyle}
        >
          <desc>Star Streamline Icon: https://streamlinehq.com</desc>
          <path d="M5.720725 3.3802375000000002C6.5123750000000005 1.96008125 6.9081875 1.25 7.5 1.25c0.5918125 0 0.987625 0.710075 1.77925 2.13023125l0.2048125 0.36741250000000003c0.22499999999999998 0.40356250000000005 0.33743750000000006 0.6053499999999999 0.512875 0.7384875000000001 0.175375 0.1331375 0.39375 0.18255625 0.830625 0.2814l0.39775 0.0899875c1.53725 0.34783125 2.3059374999999998 0.5217437500000001 2.4888125 1.1098125 0.182875 0.58804375 -0.34112499999999996 1.20085625 -1.3891875 2.42635625l-0.271125 0.31706249999999997c-0.2978125 0.34825 -0.44675 0.522375 -0.5137499999999999 0.7378125000000001 -0.0669375 0.2154375 -0.0444375 0.44775000000000004 0.0005625 0.9124375l0.041 0.423c0.1584375 1.635125 0.23768750000000002 2.4526875 -0.24106249999999999 2.816125 -0.4788125 0.3634375 -1.1985 0.0320625 -2.637875 -0.630625l-0.372375 -0.17149999999999999c-0.409 -0.1883125 -0.6135 -0.28250000000000003 -0.8303125 -0.28250000000000003s-0.42131250000000003 0.09418750000000001 -0.8303125 0.28250000000000003l-0.372375 0.17149999999999999c-1.4393875 0.6626875 -2.159075 0.9940625000000001 -2.63784375 0.630625 -0.47876874999999997 -0.3634375 -0.39954375 -1.181 -0.24109375 -2.816125l0.040987499999999996 -0.423c0.04503125 -0.46468750000000003 0.06754375 -0.697 0.00055 -0.9124375 -0.0669875 -0.2154375 -0.21589375 -0.3895625 -0.5137125 -0.7378125000000001l-0.2711375 -0.31706249999999997c-1.04803125 -1.2255 -1.5720500000000002 -1.8383125 -1.389175 -2.42635625 0.182875 -0.58806875 0.951525 -0.76198125 2.4888250000000003 -1.1098125l0.39771875 -0.0899875c0.43685 -0.09884375000000001 0.655275 -0.1482625 0.8306562500000001 -0.2814s0.28786875 -0.33491875 0.51283125 -0.7384875000000001l0.20480625 -0.36740625Z"></path>
        </svg>
      )}
    </span>
  );
}

export default App_star;
