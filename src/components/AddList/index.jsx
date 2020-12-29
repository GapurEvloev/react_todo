import React from 'react';
import List from '../List/';
import Badge from '../Badge';

import "./AddList.sass";

import closeSvg from "../../assets/img/close.svg"

const AddList = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = React.useState(true);
    const [selectedColor, selectColor] = React.useState(colors[0].id);

    console.log(selectedColor);

    return (
            
        <div className="add-list">
            <List
                onClick ={ () => setVisiblePopup(true)}
                items={[
                {
                    className: "list__add-button",
                    icon: (
                    <svg className="list__icon" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 8H15" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    ),
                    name: "Добавить папку",
                }
                ]} 
            />
            {visiblePopup && (
                <div className="add-list__popup add-popup">
                    <img onClick={() => setVisiblePopup(false)} src={closeSvg} alt="Close" className="add-popup__close"/>
                    <input className="field add-popup__field" type="text" name="add-popup-input" id="add-popup-input" placeholder="Название списка"/>
                    <ul className="add-popup__colors">
                        
                        {/* <li className="add-popup__color"><Badge color="green" /></li> */}
                        {colors.map(color => (
                            <li key={color.id} className="add-popup__color"><Badge onClick={() => selectColor(color.id)} color={color.name} className={selectedColor === color.id && "active"} /></li>
                        ))}
                    </ul>
                    <button className="button add-popup__button">Добавить</button>
                </div>
            )}
        </div>
        
    )
};

export default AddList;