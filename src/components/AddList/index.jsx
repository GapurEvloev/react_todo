import React, { useState } from "react";
import List from "../List";
import Badge from "../Badge";

import closeSvg from "../../assets/img/close.svg";

import "./AddList.scss";

const AddList = ({ colors, onAdd }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [seletedColor, setSeletedColor] = useState(colors[0].id);
  const [isLoading, setIsLoading] = useState(false);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setSeletedColor(colors[0].id);
  };
  
  const addList = () => {
    if (!inputValue) {
      alert('Введите название списка');
      return;
    }
    setIsLoading(true);
    const color = colors.find(c => c.id === seletedColor).name;
    onAdd({ "id": Math.random(), "name": inputValue, color });
    onClose();
  }

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить список",
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={onClose}
            src={closeSvg}
            alt="Close button"
            className="add-list__popup-close-btn"
          />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Название списка"
          />

          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => setSeletedColor(color.id)}
                key={color.id}
                color={color.name}
                className={seletedColor === color.id && 'active'}
              />
            ))}
          </div>

          <button onClick={addList} className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddList;
