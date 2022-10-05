import style from './WeatherMainInfo.module.css'

const WeatherMainInfo = ({ weather }) => {
    return (
        <div>
            <div><img src={weather?.current.condition.icon} /></div>
            <div><span className={style.labels}>País:</span> {weather?.location.country}</div>
            <div><span className={style.labels}>Region:</span> {weather?.location.region}</div>
            <div><span className={style.labels}>Fecha y hora actual:</span> {weather?.location.localtime}</div>
            <div><span className={style.labels}>Temperatura actual:</span> {weather?.current.temp_c}°</div>
            <div>
                <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )

}

export default WeatherMainInfo