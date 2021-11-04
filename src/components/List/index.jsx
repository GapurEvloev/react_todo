import React from "react";
import classNames from "classnames";
import axios from "axios";

import removeSvg from "../../assets/img/remove.svg";

import Badge from "../Badge";

import "./List.scss";

const List = ({
  items,
  isRemovable,
  onClick,
  onRemove,
  onClickItem,
  activeItem,
}) => {
  const removeList = (item) => {
    if (window.confirm("Are you sure you want to remove?")) {
      axios.delete("http://localhost:3001/lists/" + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };

  return (
    <ul onClick={onClick} className="todo__list list">
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(
            "list__item",
            {
              active: item.active
                ? item.active
                : activeItem && activeItem.id === item.id,
            },
            item.className
          )}
          onClick={onClickItem ? () => onClickItem(item) : null}
        >
          <span className="list__item_mark">
            {item.icon ? item.icon : <Badge color={item.color.name} />}
          </span>
          <span className="list__item_name">{item.name}</span>
          <span className="list__item_count">
            {item.tasks && `(${item.tasks.length})`}
          </span>
          {isRemovable && (
            <img
              onClick={() => removeList(item)}
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
