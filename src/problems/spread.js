const person = {
  name: "Gregor",
  lastname: "Mandella",
  age: 34,
  roles: [
    { name: "Manager", method: "get" },
    { name: "Client", method: "post" },
    { name: "User", method: "get" },
  ],
  address: {
    address: {
      street: "3914 Woodruff Ave",
      location: "Oakland, CA 94602Glenview",
    },
    position: {
      lat: 123.221,
      lng: 124.544,
    },
  },
};
const addIdUser = (person, id) => {
  return { ...person, id };
};
console.log(addIdUser(person, 123456));
