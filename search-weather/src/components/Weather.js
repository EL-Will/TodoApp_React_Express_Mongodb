import React, { useState, useEffect, useMemo } from 'react';
import FormInput from './FormInput';
import './weather.css';

export default function Weather() {
    const [currentLocation, setLocation] = useState({});
    let x = new Date();
    let month = x.getMonth() + 1;
    let day = x.getDate();
    let year = x.getFullYear();
    if (month < 10) { month = '0' + month; }
    if (day < 10) { day = '0' + day; }
    let x3 = month + '/' + day + '/' + year;
    let hour = x.getHours();
    let minute = x.getMinutes();
    let second = x.getSeconds();
    if (hour < 10) { hour = '0' + hour; }
    if (minute < 10) { minute = '0' + minute; }
    if (second < 10) { second = '0' + second; }
    let x4 = hour + ':' + minute + ':' + second
    const [time, setTime] = useState(x4);
    const date = new Date();
    const today = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    const handleSearch = (e) => {
        e.preventDefault();
        let city = '';
        city = e.target.location.value;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=20c04dcb2200db4d43bd03e5034a01e4&units=metric&lang=vi`;
        if (city !== '') {
            fetch(URL)
                .then(res => res.json())
                .then((data) => {
                    setLocation(data);
                    console.log(data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            alert('Please input city')
        }
    }
    

    // time part //
    useEffect(() => {
        setTimeout(()=>{
            var x = new Date();
            let hour = x.getHours();
            let minute = x.getMinutes();
            let second = x.getSeconds();
            if (hour < 10) { hour = '0' + hour; }
            if (minute < 10) { minute = '0' + minute; }
            if (second < 10) { second = '0' + second; }
            let x4 = hour + ':' + minute + ':' + second;
            setTime(x4);
        },1000)  
    },[time])

    return (
        <section className='container mt-20'>
            <div className='row'>
                <div className='col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2'>
                </div>
                <div className='col-lg-8 col-xl-8 col-md-8 col-sm-8 col-8'>
                    <h1 style={{ textAlign: 'center', color: "white" }}>Weather</h1>
                    <FormInput
                        handleSearch={handleSearch} />
                    <div className='m-t-30 border-5'>
                        <div className='box-icon-weather'>
                            <img src={currentLocation.hasOwnProperty('weather') ? `http://openweathermap.org/img/w/${(currentLocation.weather)[0].icon}.png` : null} className="size-img"></img>
                        </div>
                        <div className='row format-row box-h'>
                            <div className='temp col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4 padding-0'>
                                {currentLocation.hasOwnProperty('main') ? 
                                <span>
                                {currentLocation.main.temp}
                                <sup>o</sup>C
                                </span> : null}
                            </div>
                            <div className='location col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4 padding-0'>
                                <span style={{color: 'gray', fontSize: '20px'}}>
                                    {currentLocation.hasOwnProperty('weather') ? (currentLocation.weather)[0].main : null}
                                </span>
                                <span>
                                    {currentLocation.hasOwnProperty('name') ? currentLocation.name : null}
                                </span>
                            </div>
                            <div className='date-time col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4 padding-0'>
                                <span>
                                    {x3}
                                </span>
                                <span>
                                    {time}
                                </span>
                            </div>
                        </div>
                        <div className='row format-row'>
                            <div className='one-infor col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3 padding-0'>
                            <i className="fa-solid fa-sun" style={{color: 'red'}}></i>
                                <span>
                                    <span>{currentLocation.hasOwnProperty('main') ? currentLocation.main.temp : null}</span>
                                    
                                    <br></br>
                                    <span>Sunset</span>
                                </span>
                            </div>
                            <div className='one-infor col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3 padding-0'>
                            <i className="fa-solid fa-hand-holding-droplet" style={{color: 'red'}}></i>
                                <span>
                                    <span>{currentLocation.hasOwnProperty('main') ? currentLocation.main.humidity : null}</span>
                                    <br></br>
                                    <span>Humidity</span>
                                </span>
                            </div>
                            <div className='one-infor col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3 padding-0'>
                                <i className="fa-solid fa-cloud" style={{color: 'red'}}></i>
                                <span>
                                    <span>{currentLocation.hasOwnProperty('main') ? currentLocation.main.pressure : null}</span>
                                    <br></br>
                                    <span>Pressure</span>
                                </span>
                            </div>
                            <div className='one-infor col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3 padding-0'>
                                <i className="fa-solid fa-wind" style={{color: 'red'}}></i>
                                <span>
                                    <span>{currentLocation.hasOwnProperty('wind') ? currentLocation.wind.speed : null}</span>
                                    <br></br>
                                    <span>Speed</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2'>
                </div>
            </div>
        </section>
    )
}