const getPhrase = async () => {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const random = Math.floor(Math.random() * data.length);
    return data[random];
  } catch (error) {
    return error;
  }
};

export default getPhrase;
