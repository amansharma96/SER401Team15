export const formatDate = (date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  if (!(date instanceof Date)) {
    console.error(
      "formatDate was called with an argument that is not a Date object:",
      date,
    );
    return "Invalid date";
  }
  if (!date) {
    return "No date selected";
  }
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
};
