import WeatherMainInfo from "./WeatherMainInfo"
import style from './WeatherApi.module.css'
import { motion } from "framer-motion"

import { Formik, Form, Field } from "formik"
import { useState } from "react"


const WeatherApi = () => {
    const [weather, setWeather] = useState()
    console.log({ weather })

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={style.WeatherContainer}>

            <Formik
                initialValues={{ city: '' }}
                onSubmit={async values => {

                    const response = await fetch(`${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY} &q=${values.city}&aqi=no`)

                    const data = await response.json()
                    setWeather(data)
                }}
            >
                <Form>
                    <h4>Escríba el nombre de la ciudad</h4>
                    <Field className={style.Input} name='city'>
                    </Field>
                </Form>
            </Formik>
            <WeatherMainInfo weather={weather} />

        </motion.div>
    )
}

export default WeatherApi