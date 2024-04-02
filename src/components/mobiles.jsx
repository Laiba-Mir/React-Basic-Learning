import React, { useEffect, useState } from "react";

const Mobiles = () => {
  const [mobilesList, setmobilesList] = useState([]);
  const [show, setHide] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  const callMobiles = async () => {
    setLoading(true);
    let mobiles = await fetch("https://freetestapi.com/api/v1/mobiles").then(
      (res) => res.json()
    );
    console.log("mobiles ::::::::::::::: ", mobiles);
    setmobilesList(mobiles);
    setLoading(false);
  };

  // Component Did mount
  useEffect(() => {
    console.log("I am calling Mobiles !!!", show);
    callMobiles();
    return () => {
      // when ever we use this return with callback, it stands for willUnMount.
    };
  }, [show]); // [show] dependency array
  // when there is a value in depenedcy array, it stands component didmount

  const handleClick = () => {
    setShowDetails(true);
  };

  return (
    <div>
      <button
        onClick={() => {
          setHide((prev) => !prev);
        }}
      >
        Show & Hide
      </button>
      <br />
      <br />

      {loading ? (
        <div>Loading...</div>
      ) : show ? (
        <div className="grid-container">
          {mobilesList.map((item, index) => {
            let { model, brand, processor, price, colors, description } = item;
            const randomImageLink = `https://picsum.photos/200/300?random=${Math.floor(
              Math.random() * 1000
            )}`;
            return (
              <div className="grid-item" key={index}>
                <div className="indiviual">
                  <h1>Model: {model}</h1>
                  <h2>Brand: {brand}</h2>
                  <h3>Processor: {processor}</h3>
                  <img src={randomImageLink} alt={`Random Image ${index}`} />
                  <div style={{ marginBottom: "10px" }}> </div>
                </div>

                <div>
                  <button onClick={handleClick}>Show Details</button>
                  {showDetails && (
                    <div className="modal">
                      <div className="modal-content">
                        <h1>Additional Properties</h1>
                        <p>
                          Price: {price}, Color: {colors}
                        </p>
                        <p>Description: {description}</p>
                        <img
                          src={randomImageLink}
                          alt={`${brand} ${model} Image`}
                        />
                        <br />
                        <button onClick={() => setShowDetails(false)}>
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>I am Hide now</div>
      )}
    </div>
  );
};

export default Mobiles;
