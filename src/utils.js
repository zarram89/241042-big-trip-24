function capitalizeFirstLetter(value) {
  return value[0].toUpperCase() + value.slice(1);
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export {capitalizeFirstLetter, getRandomArrayElement};
