import React from "react";
import classNames from 'classnames';

import Badge from '../Badge';

import "./List.scss";

const List = ({ items, isRemovable, onClick }) => {
  console.log(isRemovable);

  return (
    <ul className="todo__list list">
      {items.map((item, index) => (
        <li key={index} className={classNames('list__item', {'active' : item.active}, item.className)} onClick={onClick}>
          <span className="list__item_mark">
            {item.icon ? (
              item.icon
            ) : (
              <Badge color={item.color} />
            )}
          </span>
          <span className="list__item_name">{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
