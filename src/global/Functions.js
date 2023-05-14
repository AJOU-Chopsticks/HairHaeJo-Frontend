export const AddressToSimple = (address) => {
  let arr = address.split(" ");
  let target = "";

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].charAt(arr[i].length - 1) === "시" ||
      arr[i].charAt(arr[i].length - 1) === "구"
    ) {
      target += " " + arr[i];
    } else if (i === arr.length - 1) return target.slice(1);
  }
};

export const AddressToSearch = (address) => {
  let arr = address.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(arr[i].length - 1) === "구") {
      return arr[i];
    } else if (i === arr.length - 1) return arr[0];
  }
};
