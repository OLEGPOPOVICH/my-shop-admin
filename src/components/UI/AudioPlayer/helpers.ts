import { intervalToDuration } from "@utils";

export const getAudioDuration = (duration: number) => {
  const { hours, minutes, seconds } = intervalToDuration({
    start: 0,
    end: duration * 1000,
  });

  return [hours, minutes, seconds]
    .map((time, index) => {
      if (time && time < 10) {
        return `0${time}`;
      }

      if (!time && ((!index && duration >= 60 * 1000) || index)) {
        return "00";
      }

      return time;
    })
    .filter((time) => time)
    .join(":");
};
