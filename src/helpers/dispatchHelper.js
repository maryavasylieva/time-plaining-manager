import msConverter from '../constants/msConverter';
import taskTypes from '../constants/taskTypes';

const defineDispatcher = ({ date }) => {
  const dateToDay = new Date(date).getTime();
  const currentDay =
    new Date().getTime() -
    new Date().getHours() * msConverter.msInHour -
    new Date().getMinutes() * msConverter.msInMinute -
    new Date().getSeconds() * msConverter.msInSecond -
    new Date().getMilliseconds();
  if (dateToDay < currentDay) {
    return taskTypes.BURNED;
  }
  if (dateToDay < currentDay + msConverter.msInDay) {
    return taskTypes.TODAY;
  }
  if (dateToDay < currentDay + msConverter.msInDay * 2) {
    return taskTypes.TOMORROW;
  }
  if (dateToDay < currentDay + msConverter.msInDay * 7) {
    return taskTypes.NEXT;
  }
  if (dateToDay >= currentDay + msConverter.msInDay * 7) {
    return taskTypes.AFTER;
  }
  return taskTypes.DONE;
};

export default defineDispatcher;
