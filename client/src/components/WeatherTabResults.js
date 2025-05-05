import React from 'react';
import Forecast from './Forecast';
import Alert from './Alert'
import Current from './Current';

const WeatherTabResults = (props) => {
    const { activeTab, activeTabData } = props;
    switch (activeTab) {
        case ('f'):
            return <Forecast activeTabData={activeTabData?.f} />
        case ('c'):
            return <Current activeTabData={activeTabData?.c} />
        case ('a'):
            return <Alert activeTabData={activeTabData?.a} />
        default:
            return null;
    }
};

export default WeatherTabResults;