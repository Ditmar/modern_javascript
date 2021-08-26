const loadData = () => {
  //QXJ4KZ3vs2At3nYRZV4ubN2A8GuKn4qD
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=QXJ4KZ3vs2At3nYRZV4ubN2A8GuKn4qD&q=cheeseburgers";
  fetch(url)
    .then((result) => result.json())
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
loadData();
