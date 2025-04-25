import React, { useState } from 'react';

const Forecast = (props) => {
    const [hourly, setHourly] = useState([])
    const { activeTabData } = props;
    if (activeTabData) {
        return (
            <div className='container'>
                <div>
                    <h2>
                        {`${activeTabData.location.name}, ${activeTabData.location.region}`}
                    </h2>
                </div>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    {activeTabData.forecast.forecastday.map((day, index) => {
                        const condition = day.day.condition;
                        const dailyData = day.day
                        return (
                            <div key={index} className="card" style={{ width: "18rem", margin: '20px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{day.date}</h5>
                                    <h5 className="card-title">
                                        <img style={{width: '40px'}} src={`http:${condition.icon}`} className="card-img-top" alt={condition.text} />
                                        {condition.text}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Temperature:{dailyData.avgtemp_f}&#8457; 
                                    </h6>
                                    <p className="card-text">
                                        min: {dailyData.mintemp_f}&#8457;, max: {dailyData.maxtemp_f}&#8457;
                                    </p>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Humidity: {dailyData.avghumidity}
                                    </h6>
                                    <a href="#" className="btn btn-primary" onClick={() => setHourly(day.hour)}>View Hourly</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {hourly.length> 0 && hourly.map((hour, index) => {
                        const condition = hour.condition;
                        return (
                            <div key={index} className="card" style={{ width: "18rem", margin: '5px' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{hour.time.substr(hour.time.length - 5)}</h5>
                                    <h5 className="card-title">
                                        <img style={{width: '40px'}} src={`http:${condition.icon}`} className="card-img-top" alt={condition.text} />
                                        {condition.text}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Chance of Rain: {hour.chance_of_rain}%
                                    </h6>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Temperature: {hour.temp_f}&#8457;
                                    </h6>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">
                                        Humidity: {hour.humidity}
                                    </h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return null
    }

};

export default Forecast;