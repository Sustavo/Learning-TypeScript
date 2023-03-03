type VerifyUserfn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUserfn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joão', password: '123456' };
const sentUser = { username: 'joão', password: '123456' };
const loggedIn = VerifyUser(bdUser, sentUser);

console.log(loggedIn);
