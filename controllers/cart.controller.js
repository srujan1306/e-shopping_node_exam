import {
  createCart,
  getCartByUserId,
  deleteCart,
} from "../services/cart.service.js";

async function createCartCtr(req, res) {
  const data = req.body;
  if (!data.userId || !data.productId || !data.quantity || !data.price) {
    return res.status(400).send({ msg: "Insufficient data" });
  }
  const userId = data.userId;
  const totalPrice = data.quantity * data.price;
  const cartData = {
    userId,
    products: [{ productId: data.productId, quantity: data.quantity }],
    totalPrice,
  };
  try {
    const newCart = await createCart(cartData);
    res.status(201).send(newCart.data);
  } catch (error) {
    res.status(500).send({ msg: "Error in creation of cart" });
  }
}

async function getCartCtr(req, res) {
  const userId = req.params.id;
  const cart = await getCartByUserId(userId);
  if (cart.data) {
    res.send(cart.data);
  } else {
    res.status(404).send({ msg: "Cart not found" });
  }
}

async function deleteCartCtr(req, res) {
  const userId = req.params.id;

  const deletedCart = await deleteCart(userId);
  if (deletedCart.data) {
    res.send({ msg: "Cart deleted", deletedCart: deletedCart.data });
  } else {
    res.status(404).send(`Cart didn't exist for the UserId ${userId}`);
  }
}

export { createCartCtr, getCartCtr, deleteCartCtr };
