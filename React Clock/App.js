//Imports
import {useState, useEffect} from 'react';
import "./styles.css";

export default function App(){
    // State
    const [time, setTime] = useState('')

    function formatTime(val){
        if(val < 10){
            return '0'
        } else{
            return '';
        }
    }

    useEffect(() => {
        //Interval
        const timerID = setInterval(
            () => tick(), 1000)

        //Cleanup
        return function cleanup(){
            clearInterval(timerID)
        }
    })

    function tick(){
        const d = new Date();
        const h = d.getHours;
        const m = d.getMinutes;
        const s = d.getSeconds;

        //Set the state to the formatted time
        setTime(formatTime(h) + h + ':' + formatTime(m) +
        m + ':' + formatTime(s) + s)
    }

    //Return the JSX
    //Insert the state
    return(
        <div className="clock">
            <div className="screen">
                <h1 className="time">{time}</h1>
            </div>
        </div>
    )
}