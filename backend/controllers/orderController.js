import AsyncHandler from "express-async-handler";
import Order from "../models/OrderModel.js";

//@desc  Create new order
//@route POST /api/orders
//@access Private

const addOrderItems = AsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
});
