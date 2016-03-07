import models from '../../models';
import config from '../../config/config';

const authy = require('authy')(config.authyKey);

export default function login(req) {
  const phoneNumber = req.body.phoneNumber.toString();

  return new Promise((resolve, reject) => {
    authy.phones().verification_start(phoneNumber, '1', 'sms', (err, authData) => {
      if (err) {
        resolve(err);
      }

      resolve(authData);
    });
  });
}
