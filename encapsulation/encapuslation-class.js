/**
 * Class example test
 */
class MyClass {
  constructor() {

  };

  // Public
  // members
  publicMember = `This is a public member of ${this.name}`;

  // methods
  publicMethod() {
    return `This is a public method of ${this.name}`;
  };

  getAllMembers() {
    return {public: this.publicMember, private: this.#privateMember}
  };

  getAllMethods() {
    return {public: this.publicMethod, private: this.#privateMethod}
  };
  

  // Private
  // members
  #privateMember = `This is a private member of ${this.name}`

  // methods
  #privateMethod() {
    return `This is a private method of ${this.name}`;
  };

};

export {
  MyClass,
};