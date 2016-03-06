
export default function signup(req) {
  const user = {
    phoneNumber: req.body.phoneNumber
  };

  req.session.user = user;
  return Promise.resolve(user);
}
