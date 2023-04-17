const getRandomID = () => {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const randomPosition = () => Math.floor(Math.random() * 61);

  const idPattern = "XXXX-AAAA-BBBB-CCCC";

  return idPattern
    .split("")
    .map((e) => {
      if (e !== "-") {
        return (e = letters[randomPosition()]);
      }
      return "-";
    })
    .join([]);
};
console.log(getRandomID());
