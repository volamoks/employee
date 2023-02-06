import { Component, useState } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Nikolay Gogol',
                    salary: 800,
                    increase: false,
                    like: true,
                    id: 1,
                },
                {
                    name: 'Mark Twain',
                    salary: 3000,
                    increase: true,
                    like: false,
                    id: 2,
                },
                {
                    name: 'Stephen King',
                    salary: 15000,
                    increase: false,
                    like: false,
                    id: 3,
                },
            ],
            term: '',
            filter: 'all',
        };
        this.maxId = 4;
    }

    deleteEmployees = id => {
        this.setState(({ data }) => {
            return { data: data.filter(item => item.id !== id) };
        });
    };

    addEmployee = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => {
            const newArr = [...data, newEmployee];
            return {
                data: newArr.filter(
                    item => item.name.length > 3 && item.salary,
                ),
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item =>
                item.id === id ? { ...item, [prop]: !item[prop] } : item,
            ),
        }));
    };

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    };

    onUpdateSearch = term => {
        this.setState({ term: term });
    };

    filter = (data, filter) => {
        switch (filter) {
            case 'like':
                return data.filter(item => item.like);
            case 'moreThen1000':
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    };

    onFilterSelect = filter => {
        this.setState({ filter });
    };

    render() {
        const { data, term, filter } = this.state;
        const numofEmployees = this.state.data.length;
        const numOfIncreased = this.state.data.filter(
            item => item.increase,
        ).length;

        const visibleData = this.filter(
            this.searchEmployee(data, term),
            filter,
        );

        return (
            <div className="app">
                <AppInfo
                    numOfIncreased={numOfIncreased}
                    numofEmployees={numofEmployees}
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteEmployees}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addEmployee} />
            </div>
        );
    }
}

export default App;
