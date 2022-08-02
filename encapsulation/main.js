import { MyClass } from "./encapuslation-class.js";

const newClass = new MyClass;

function log(thing) {
  console.dir(thing);
};

log(newClass);

log(newClass.publicMember);
log(newClass.publicMethod());

log(newClass.getAllMembers());
log(newClass.getAllMethods());