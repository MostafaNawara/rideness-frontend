const stripe = require('stripe')('sk_test_TQ9kqyQTMsEKoIZaoEipFOe2');

export default function(req) {
  return new Promise((resolve, reject) => {
    stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
      plan: 'premium_plan'
    }, (err, customer) => {
      if (err) reject({ err, redirect: '/?error=Payment error'});

      resolve((res) => res.redirect('/?success=Payment accepted'));
    });
  });
}
