function evenCheck(int) {
  if (int === 0) {
    return true;
  } else if (int === 1) {
    return false;

  //remember the negative numbers!
  } else if (int < 0) {

  //recursive call to reverse the negative
    return evenCheck(-int);
  } else {
    return evenCheck(int - 2);
  }
}
