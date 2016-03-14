import superagent from 'superagent';

import config from '../../config/config';

export default function(req) {
  return new Promise((resolve, reject) => {
    superagent.get(`${config.apiUrl}${req.originalUrl}`).end((err, { body }) => {
      if (err) reject(err);

      resolve(body);
    });
  });
}
