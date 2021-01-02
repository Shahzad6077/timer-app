export const toHHMMSS = function (centisec: number): string {
  let sec_num: number = Math.round(centisec / 100); // don't forget the second param
  let hours: string | number = Math.floor(sec_num / 3600);
  let minutes: string | number = Math.floor((sec_num - hours * 3600) / 60);
  let seconds: string | number = sec_num - hours * 3600 - minutes * 60;
  let centiSeconds: string | number =
    (centisec / 100).toString().split(".")[1] || "0";

  centiSeconds = parseInt(centiSeconds);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (centiSeconds < 10) {
    centiSeconds = "0" + centiSeconds;
  }

  if (hours > 0) {
    return hours + ":" + minutes + ":" + seconds + ":" + centiSeconds;
  } else {
    return minutes + ":" + seconds + ":" + centiSeconds;
  }
};
