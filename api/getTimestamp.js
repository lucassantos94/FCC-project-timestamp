
const getTimeStamp = (date)=>{
  let dateInput;
  if(/[^\d]/.test(date)){
    dateInput = date
  }else{
    dateInput = parseInt(date)
  }
  const dateTime = new Date(dateInput)
  if (dateTime === 'Invalid Date')
    throw new Error(dateTime)

  return {unix:dateTime.getTime(), utc: dateTime.toUTCString()}
}

module.exports = { getTimeStamp }