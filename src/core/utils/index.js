import moment from 'moment'
// import 'moment-precise-range-plugin'

export const calculateSumOfNumbers = (numbers) => numbers.reduce((sum, current)=>sum + current, 0);


export const getFormattedTime = (date) =>{
  return  moment(date).format('MMMM Do YYYY, h:mm:ss a');
}