import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true ,ref :"Product" },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: String }, // Optional field
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },
  items: [itemSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  subTotal: { type: Number, required: true },
  total: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
