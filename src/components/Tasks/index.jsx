import React from 'react';

import editSvg from '../../assets/img/edit.svg';

import './Tasks.scss';

const Tasks = ({list}) => {
    console.log(list);
    return (
        <div className="tasks">
            <h2 className="tasks__title">
                {list.name}
                <img src={editSvg} alt="Edit" />
            </h2>
            <div className="tasks__items">

            {
                list.tasks.map((task) => {
                    return (
                        <div key={task.id} className="tasks__items-row">
                            <div className="checkbox">
                                <input
                                    // onChange={onChangeCheckbox}
                                    id={`task-${task.id}`}
                                    type="checkbox"
                                    // checked={completed}
                                />
                                <label 
                                    htmlFor={`task-${task.id}`}
                                    >
                                    <svg
                                        width="11"
                                        height="8"
                                        viewBox="0 0 11 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                                        stroke="#000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                    </svg>
                                </label>
                            </div>
                            <input readOnly value={task.text} />
                            <div className="tasks__items-row-actions">

                            </div>
                        </div>
                    )
                })
            }

                
            </div>
        </div>
    );
};

export default Tasks;