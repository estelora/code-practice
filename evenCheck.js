function evenCheck(int) {
  if (int === 0) {
    return true;
  } else if (int === 1) {
    return false;
  } else if (int < 0) {
    return evenCheck(-int);
  } else {
    return evenCheck(int - 2);
  }
}
