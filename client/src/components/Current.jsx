import React from 'react';

const Current = (props) => {
    const {activeTabData} = props
    if (activeTabData) {
        return (
            <div className='container'>
                <div>
                    <h2>
                        Current Weather at <b>{`${activeTabData.location.name} - ${activeTabData.location.region}`}</b>
                    </h2>
                </div>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <div className="card" style={{ width: "18rem", margin: '20px' }}>
                        <div className="card-body">
                            <h5 className="card-title">{activeTabData.current.last_updated}</h5>
                            <h5 className="card-title">
                                <img style={{ width: '40px' }} src={`http:${activeTabData.current.condition.icon}`} className="card-img-top" alt={activeTabData.current.condition.text} />
                                {activeTabData.current.condition.text}
                            </h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                Temperature:{activeTabData.current.temp_f}&#8457;
                            </h6>
                            <p className="card-text">
                                Feels Like: {activeTabData.current.feelslike_f}&#8457;
                            </p>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                Humidity: {activeTabData.current.humidity}%
                            </h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                wind: {activeTabData.current.wind_mph}%
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

};

export default Current;