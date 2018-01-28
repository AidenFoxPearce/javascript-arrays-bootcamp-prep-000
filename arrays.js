var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, e) {
  return [e, ...a];
}

function destructivelyAddElementToBeginningOfArray(a, e) {
<<<<<<< HEAD
  a.unshift(e);
  
  return a;
=======
  return a.unshift(e);
>>>>>>> ce0ad8395d7973f3f8560c16667d6f71ed8bf94f
}

function addElementToEndOfArray(a, e) {
  return [...a, e];
}

function destructivelyAddElementToEndOfArray(a, e) {
<<<<<<< HEAD
  a.push(e);
  
  return a;
=======
  return a.push(e);
>>>>>>> ce0ad8395d7973f3f8560c16667d6f71ed8bf94f
}

function accessElementInArray(a, i) {
  return a[i];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
<<<<<<< HEAD
  a.shift();
  
  return a;
=======
  return a.shift();
>>>>>>> ce0ad8395d7973f3f8560c16667d6f71ed8bf94f
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(a) {
<<<<<<< HEAD
  a.pop();
  
  return a;
=======
  return a.pop();
>>>>>>> ce0ad8395d7973f3f8560c16667d6f71ed8bf94f
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length - 1);
}

