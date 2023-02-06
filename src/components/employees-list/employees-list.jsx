import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
    const elem = data.map(el => {
        const { id, ...itemProps } = el;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={e =>
                    onToggleProp(
                        id,
                        e.currentTarget.getAttribute('data-toggle'),
                    )
                }
            />
        );
    });

    return <ul className="app-list list-group">{elem}</ul>;
};

export default EmployeesList;
