let arrRes = [];
export const getApiResult = (page) => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  return (
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        arrRes = [];
      data.results.forEach((element) => {
        arrRes.push({ id: element.id, image: element.image, name: element.name });
        
      });
      return arrRes;
    })
    .then((arrRes) => {
      return arrRes;
    })
  );
};

export const backTo = () => {
  window.location.href = 'index.html'
}