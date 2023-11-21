export const convertToMilliseconds = (timeString) => {
  // 시:분:초:밀리초 형식의 문자열을 배열로 분리
  const timeParts = timeString.split(/[:.]/).map(Number);

  // 배열의 요소를 밀리초로 변환하고 합산
  const milliseconds =
    timeParts[0] * 60 * 60 * 1000 +
    timeParts[1] * 60 * 1000 +
    timeParts[2] * 1000 +
    timeParts[3];

  return milliseconds;
};

export const convertToTimeString = (milliseconds) => {
  // 총 밀리초를 시, 분, 초로 분리
  const hours = Math.floor(milliseconds / (60 * 60 * 1000));
  const minutes = Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
  const remainingMilliseconds = milliseconds % 1000;

  // 각 부분을 형식에 맞게 조합
  const timeString =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    "." +
    String(remainingMilliseconds).padStart(3, "0");

  return timeString;
};
