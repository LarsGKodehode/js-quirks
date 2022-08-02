// helpers
function log(thing) {
  console.dir(thing);
};

function breakLine() {
  console.log(`====================`)
};


breakLine()
console.log(`Utilizing:\nClasses`)
breakLine()

import { MyClass } from "./encapuslation-class.js";
const newClass = new MyClass;

log(newClass);

log(newClass.publicMember);
log(newClass.publicMethod());

log(newClass.getAllMembers());
log(newClass.getAllMethods());

breakLine()
console.log(`Utilizing:\nObject Design Pattern`)
breakLine()

import { MyObject } from "./encapsulation-odp.js";

log(MyObject);

log(MyObject.publicMember);
log(MyObject.publicMethod());

log(MyObject.getAllMembers());
log(MyObject.getAllMethods());