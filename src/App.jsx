
import WeatherApi from '../components/WeatherApi';
import style from './App.module.css';



const App = () => {

  return (
    <div className={style.ContentApp}>
      <WeatherApi />      
    </div>
  )
}

export default App
