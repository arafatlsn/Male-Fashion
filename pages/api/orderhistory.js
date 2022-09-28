const stripe = require("stripe")(process.env.NEXT_PUBLIC_SECRET_KEY);

const Handler = async() => {
  const transaction = await stripe.issuing.transactions.retrieve(
    'cs_test_b1q6otXW0DQUjDedPUzwhUZAWSWEGkeSZBbu5BSclImgE71T64qlp7r6Rd'
  );
  res.status(200).json(transaction)
}

export default Handler;