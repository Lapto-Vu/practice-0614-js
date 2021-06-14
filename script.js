class ObjectUtilities {
    mergeObjects = (pine, apple) => {
      return { ...pine, ...apple };
    };
    removePassword = (potato) => {
      const { password, ...rest } = potato;
      return rest;
    };
  
    freezeObj = (tomato) => {
      return Object.freeze(tomato);
    };
  
    getOnlyValues = (water) => {
      return Object.values(water);
    };
  
    getOnlyProperties = (melon) => {
      return Object.keys(melon);
    };
  }
  
  const ObjectUtilitie = new ObjectUtilities();
  
  const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
  };
  
  const objB = {
    password: "12345"
  };
  
  const user = ObjectUtilitie.mergeObjects(objA, objB);
  console.log(user);
  
  const cleanUser = ObjectUtilitie.removePassword(user);
  console.log(cleanUser);
  
  const frozenUser = ObjectUtilitie.freezeObj(cleanUser);
  
  const onlyValues = ObjectUtilitie.getOnlyValues(frozenUser);
  console.log(onlyValues);
  
  const onlyProperties = ObjectUtilitie.getOnlyProperties(frozenUser);
  console.log(onlyProperties);
  
  frozenUser.name = "Hello!"; // This should show an error
  