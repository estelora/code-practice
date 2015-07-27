for (var line = 1; line <= 5; line++) {
  for(var j = 1; j <= (-1 * line + 5); j++){
    console.log('.');
  }
  console.log(line);
}

// Output:
// ....1
// ...2
// ..3
// .4
// 5

for (var line = 1; line <= 5; line ++) {
  for (var j = 1; j <= (-1 * line + 5); j++) {
    console.log('.');
  }
  for (var k = 1; k <= line; k++) {
    console.log(line);
  }
}

// Output:
// ....1
// ...22
// ..333
// .4444
// 55555

for (var line = 1; line <= 5; line ++) {
  for (var j = 1; j <= (-1 * line + 5); j++) {
    console.log('.');
  }
  console.log(line);
  for (var j = 1; j <= (line- 1); j++) {
    console.log('.');
  }
}

// Output:
// ....1
// ...2.
// ..3..
// .4...
// 5....

for (var line = 1; line <= 5; line ++) {
  for (var j = 1; j <= (-1 * line + 5); j++) {
    console.log(' ');
  }
  console.log(line);
  for (var j = 1; j <= (line- 1); j++) {
    console.log(' ');
  }
}

// Output:
//     1
//    2 
//   3
//  4   
// 5

