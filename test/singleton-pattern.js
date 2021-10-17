class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
// let u1 = new User('kk');
// let u2 = new User('zy');

let user = null;
function getUser() {
  if (user) {
    return user;
  } else {
    user = new User('admin');
  }
}

export { getUser };
// export default getUser;
