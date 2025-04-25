import React from 'react';
import Forecast from './Forecast';

const WeatherTabResults = (props) => {
    const { activeTab, activeTabData } = props;
    switch (activeTab) {
        case ('f'):
            return <Forecast activeTabData={activeTabData.f} />
        case ('c'):
            return <>Current under construction</>
        case ('a'):
            return <>Alert under construction</>
        default:
            return null;
    }
};

export default WeatherTabResults;