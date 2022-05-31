export const getCount = (count: number, overflowCount?: number) => {
  if (!count) {
    return 0;
  }

  if (overflowCount && overflowCount < count) {
    return `${overflowCount}+`;
  }

  if (count > 99) {
    return "99+";
  }

  if (count > 999) {
    return "999+";
  }

  return count;
};
