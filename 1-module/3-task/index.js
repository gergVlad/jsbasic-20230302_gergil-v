function ucFirst(str) {
  if (str) {
    return str.at(0).toUpperCase() + str.slice(1);
  } else {
    return "";
  }
}
