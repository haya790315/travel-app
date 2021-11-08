

const useSetNewUserInformation = (userContext) => {
  const setNewUserInformation = ()=>{
    const users = JSON.parse(localStorage.getItem("user"));
    const newUsers = users.map((user) => {
      const {
        account,
        password,
        birthday,
        email,
        firstName,
        gender,
        lastName,
        heartAdded,
        cart,
      } = userContext;
      if (user.account === userContext.account) {
        return {
          account,
          password,
          birthday,
          email,
          firstName,
          gender,
          lastName,
          heartAdded,
          cart,
        };
      } else {
        return user;
      }
    });
    localStorage.setItem("user", JSON.stringify(newUsers));}


  return  setNewUserInformation();
  }
  

export default useSetNewUserInformation
