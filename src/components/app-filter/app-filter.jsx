import { Component } from 'react';
import './app-filter.css';

const AppFilter = props => {
    const btnData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'like', label: 'На повышение' },
        { name: 'moreThen1000', label: 'ЗП больше 1000$' },
    ];

    const buttons = btnData.map(({ name, label }) => {
        const active = props.filter === name;

        const classNames = active ? 'btn btn-light' : 'btn btn-outline-light';

        return (
            <button
                className={classNames}
                type="button"
                key={name}
                onClick={() => {
                    props.onFilterSelect(name);
                }}
            >
                {label}
            </button>
        );
    });

    return <div className="btn-group onClick=">{buttons}</div>;
};

export default AppFilter;
