// Function to format the date using moment
import moment from 'moment';


export const DDMMYY = (date) => {
    return moment(date).format('DD-MM-YYYY');
};
