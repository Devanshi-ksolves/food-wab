import React, { useState } from "react";
import "./style.css";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (id) => {
    setSelectedCard(id);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };


  return(
  <div>
  <section className="main-card--cointainer ">
    {menuData.map((currEle) => {
      console.log(currEle);
      return (
        <div key={currEle.id}>
          <div className="card-container" key={currEle.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">
                  {currEle.id}
                </span>
                <h2 className="card-title">{currEle.name}</h2>
              </div>
              <img src={currEle.image} alt="" className="card-media" onClick={() => openModal(currEle.id)}/>
              <span className="card-tag subtle">Order</span>
            </div>
          </div>
        </div>
      );
    })}
      </section>
      {selectedCard !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <h2>{menuData[selectedCard - 1].name}</h2>
            <p>{menuData[selectedCard - 1].description}</p>
            <img
              src={menuData[selectedCard - 1].image}
              alt={menuData[selectedCard - 1].name}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};



  

export default MenuCard;
