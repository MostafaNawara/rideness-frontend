import models from '../../models';

export default function create(req) {
  return new Promise((resolve, reject) => {

    resolve(models.User.create({
      phoneNumber: req.body.phoneNumber
    }));
  });
}
