function createEmployeeRecord(array){
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []

    }
    return employeeRecord;
};

function createEmployeeRecords(array){
    const twoRows = array.map(createEmployeeRecord);
    return twoRows;
}

function createTimeInEvent(dateTimeString){
    const timeInEvent = {
        type: "TimeIn",
        date: dateTimeString.split(" ")[0],
        hour: parseInt(dateTimeString.split(" ")[1])
      };
      this.timeInEvents.push(timeInEvent);
      return this;
};

function createTimeOutEvent(dateTimeString){
    const timeOutEvent = {
        type: "TimeOut",
        date: dateTimeString.split(" ")[0],
        hour: parseInt(dateTimeString.split(" ")[1])
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
};

function hoursWorkedOnDate(dateTimeString){
    const timeInEvent = this.timeInEvents.find(event => event.date === dateTimeString);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === dateTimeString);
    
    const timeInHour = timeInEvent.hour;
    const timeOutHour = timeOutEvent.hour; 

    const hoursWorked = (timeOutHour - timeInHour) * .01;
    return hoursWorked;
};

function wagesEarnedOnDate(dateTimeString){
    const hoursWorked = hoursWorkedOnDate.call(this, dateTimeString);
    const payRate = this.payPerHour;
    const wagesEarned = hoursWorked * payRate; 
    return wagesEarned; 
    
};

function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, record) => {
      const wagesEarned = allWagesFor.call(record);
      return total + wagesEarned;
    }, 0);
    return totalPayroll;
  }

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
  };

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

