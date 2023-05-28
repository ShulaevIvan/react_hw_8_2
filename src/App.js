import './App.css';
import { GetDataExepmle } from './components/GetDataExepmle';

function App() {
  return (
    <div>
      <GetDataExepmle endpoint="data" title="Успешное получение данных" />

      <GetDataExepmle endpoint="error" title="Получение 500 ошибки" />
      
      <GetDataExepmle endpoint="loading" title="Индикатор загрузки" />
    </div>
  );
}

export default App;
