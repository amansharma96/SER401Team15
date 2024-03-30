export const formatDate = (date) => {
  if (!date) {
    return "No date selected";
  }

  let dateObject = new Date(date);

  return `${(dateObject.getMonth() + 1).toString().padStart(2, "0")}/${dateObject
    .getDate()
    .toString()
    .padStart(2, "0")}/${dateObject.getFullYear()} ${dateObject
    .getHours()
    .toString()
    .padStart(2, "0")}:${dateObject.getMinutes().toString().padStart(2, "0")}`;
};