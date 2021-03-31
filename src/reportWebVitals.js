import { getFCP } from 'web-vitals';

const reportWebVitals = onPerfEntry => {
    if(onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({getCLS, getFID, getLCP, getTTFB}) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        })
    }
}

export default reportWebVitals;