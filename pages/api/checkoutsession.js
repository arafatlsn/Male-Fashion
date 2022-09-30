const stripe = require("stripe")(process.env.NEXT_PUBLIC_SECRET_KEY);

const Handler = async (req, res) => {
  if (req.method === "POST") {
    const { cart, email } = req.body;

    const transformedCart = cart.map((product) => ({
      description: product.description,
      quantity: product.cartQuantity,
      price_data: {
        currency: "bdt",
        unit_amount: product.price * 100,
        product_data: {
          name: product.title,
          images: [product.img],
        },
      },
    }));

    
    const obj = {
      titles: JSON.stringify(cart?.map((product) => product.title)),
      descriptions: JSON.stringify(
        cart?.map((product) => product.description)
      ),
      images: JSON.stringify(cart?.map((product) => product.img)),
      prices: JSON.stringify(cart?.map((product) => product.price)),
      quantities: JSON.stringify(
        cart?.map((product) => product.cartQuantity)
      ),
    }

    try {
      const session = await stripe?.checkout?.sessions?.create({
        payment_method_types: ["card"],
        line_items: transformedCart,
        mode: "payment",
        success_url: `${req?.headers?.origin}/success?sessionId={CHECKOUT_SESSION_ID}`,
        cancel_url: "http://localhost:3000/failed",
        metadata: obj,
      });
      res.status(200).json({ id: session?.id });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ message: "Payment is Unsuccessful!" });
    }
  }
};

export default Handler;