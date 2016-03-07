import models from '../../models';
import config from '../../config/config';

const authy = require('authy')(config.authyKey);

export default function verify(req) {
  const phoneNumber = req.body.phoneNumber.toString();
  const plan = req.body.plan;

  return new Promise((resolve, reject) => {
    authy.phones().verification_check(phoneNumber, '1', req.body.code, (err, authData) => {
      if (err) {
        resolve(err);
      } else {
        models.User
          .findOrCreate({
            where: { phoneNumber },
            defaults: { authData, plan }
          })
          .spread((user, created) => {
            req.session.user = user;

            resolve(user.get({plain: true}));
          });
      }
    });
  });
}
