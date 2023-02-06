import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    addEmployee = e => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        // this.setState(({ data }) => {
        //     return { data: data.filter(item => item.name > 0 || item.salary) };
        // });
    };

    onChangeNewEmployee = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.addEmployee}
                >
                    <input
                        onChange={this.onChangeNewEmployee}
                        type="text"
                        name="name"
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                    />
                    <input
                        onChange={this.onChangeNewEmployee}
                        type="number"
                        name="salary"
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                    />
                    <button
                        // onClick={() => onSubmit()}
                        type="submit"
                        className="btn btn-outline-light"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
