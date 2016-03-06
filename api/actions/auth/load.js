import models from '../../models';

export default function load(req) {
  return new Promise((resolve, reject) => {
    resolve(req.session.user || null);
  });
}
