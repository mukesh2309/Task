import {Platform} from 'react-native';

export const getTimestamp = (time: string, onlyDayAndMonth?: boolean) => {
  if (time) {
    console.log('time: ', time);
    const inputDate = new Date(time);
    const currentDate = new Date();
    const yesterdayDate = new Date();
    yesterdayDate.setDate(currentDate.getDate() - 1);
    var timeZone = 'Asia/' + (Platform.OS === 'ios' ? 'Calcutta' : 'Kolkata');
    const options: any = {
      timeZone: timeZone,
      day: 'numeric',
      month: 'short',
    };
    const timeOptions: any = {
      timeZone: timeZone,
      hour: 'numeric',
      minute: 'numeric',
    };
    if (!onlyDayAndMonth) {
      options.hour = 'numeric';
      options.minute = 'numeric';
    }
    if (
      inputDate.getDate() === currentDate.getDate() &&
      inputDate.getMonth() === currentDate.getMonth() &&
      inputDate.getFullYear() === currentDate.getFullYear()
    ) {
      return inputDate.toLocaleTimeString('en-US', timeOptions);
    }
    if (
      inputDate.getDate() === yesterdayDate.getDate() &&
      inputDate.getMonth() === yesterdayDate.getMonth() &&
      inputDate.getFullYear() === yesterdayDate.getFullYear()
    ) {
      return 'Yesterday, ' + inputDate.toLocaleTimeString('en-US', timeOptions);
    }
    return inputDate.toLocaleString('en-US', options);
  }
};


export function convertTo12HourFormat(isoTimestamp:string) {
  const date = new Date(isoTimestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  return formattedTime;
}