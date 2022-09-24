const stripe = require("stripe")(process.env.NEXT_PUBLIC_SECRET_KEY);

export default async (req, res) => {
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

    const session = await stripe?.checkout?.sessions?.create({
      payment_method_types: ["card"],
      line_items: transformedCart,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failed",
      metadata: {
        email,
        images: JSON.stringify(cart.map((product) => product.img)),
      },
    });
    console.log(session)
    res.status(200).json({id: session?.id})
  }
};
