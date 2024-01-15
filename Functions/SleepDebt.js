const getSleepHours = day => {

    if (day === 'Monday') {
        return 8;
    } 
    else if (day === 'Tuesday') {
      return 4;
    } 
    else if (day === 'Wednesday') {
        return 5;
    } 
    else if (day === 'Thursday') {
        return 6;
    }
     else if (day === 'Friday') {
        return 3;
    }
     else if (day === 'Saturday') {
        return 7;
    }
     else if (day === 'Sunday') {
        return 2;
    }
     else {
        return 'Error';
    }

};


const getActualSleepHours = () => {

    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday')
    + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

};

const getIdealSleepHours = () => {

    let idealSleepHours = 8;
    return idealSleepHours * 7;
};

const calculateSleepDebt = () => {

    const idealSleepHours = getIdealSleepHours();
    const actualSleepHours = getActualSleepHours();

    if (idealSleepHours === actualSleepHours) {

        return'Your sleep hours are perfect !';

    } else if (idealSleepHours > actualSleepHours) {

        return 'You need ' + (idealSleepHours - actualSleepHours) + ' more sleeping hours';
    } else if (idealSleepHours < actualSleepHours) {

        return 'You have more sleep hours than enough';
    }
    }
    console.log(calculateSleepDebt());