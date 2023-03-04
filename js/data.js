class Character {
  constructor(name,id, image, status, species, gender, origin){
      this.id = id;
      this.name = name;
      this.image = image;
      this.status = status;
      this.species = species;
      this.origin = origin;
      this.gender = gender;
  }
}

export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
  .then(function (res){
      return res.json();
  })
  .then(function (characterRawObjects) {
      let slicedCharObj = characterRawObjects.results;
      return slicedCharObj.map(({name, id, image}) => new Character(name, id, image)) 
  })
}

export const getSingleCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`) 
  .then(function(res){return res.json();})
  .then(function(characterRawObject){
      
      const originArray = characterRawObject.origin;
      const origin = originArray.name
      return new Character(
          characterRawObject.name,
          characterRawObject.id,
          characterRawObject.image,
          characterRawObject.status,
          characterRawObject.species,
          characterRawObject.gender,
          origin
      )
  })
}
export const searchCharacter = (term) => {
  if (term === ''){
      return Promise.resolve([]);
  }
  return fetch (`https://rickandmortyapi.com/api/character/?name=${term}`)
  .then(function (res){
      return res.json();
  })
  .then(function (characterRawObjects){
      let slicedSearchCharObj = characterRawObjects.results;
      return slicedSearchCharObj.map(({name, id, image}) => new Character(name,id, image));
  });
}