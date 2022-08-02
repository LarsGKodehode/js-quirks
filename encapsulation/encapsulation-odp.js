const myObject = () => {
  // Public
  // members
  const publicMember = `This is a public member of MyObject`;

  // methods
  function publicMethod() {
    return `This is a public method of MyObject`;
  };

  function getAllMembers() {
    return {public: publicMember, private: privateMember}
  };

  function getAllMethods() {
    return {public: publicMethod(), private: privateMethod()}
  };
  

  // Private
  // members
  const privateMember = `This is a private member of MyObject`

  // methods
  function privateMethod() {
    return `This is a private method of MyObject`;
  };


  // Things returned here can be considered public
  // Refrences within returned functions are still accessible
  // Everything else will get garbage collected sooner or later
  return {
    publicMember,
    publicMethod,
    getAllMembers,
    getAllMethods,
  };
};

export const MyObject = myObject();