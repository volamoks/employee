import './app-info.css';

const AppInfo = ({ numofEmployees, numOfIncreased }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {numofEmployees}</h2>
            <h2>Премию получат: {numOfIncreased}</h2>
        </div>
    );
};

export default AppInfo;
