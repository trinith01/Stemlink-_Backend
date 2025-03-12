import Order from "../Models/orders.js";
import Product from "../Models/products.js";

export const getOrders = async (req, res) => {
  
  const orders = await Order.find().sort({ createdAt: -1 });
  res.status(200).json(orders);
};

 export  const getOrdersByUserId = async (req, res) => {
  try{
    const orders = await Order.find({userId: req.params.userId});
    res.status(200).json(orders);

  }catch(err){
    res.status(500).json({ message: err.message });

  }
   

 }


export const addOrder = async (req, res) => {
  try {
    const { orderId, userId, paymentStatus, items ,subTotal,total } = req.body;

    // Reduce the quantity of each product in the order
    for (const item of items) {

      const product = await Product.findById(item._id);
      
      console.log(product.productName , "before update the salesCount" , product.saleCount)
      
      if (!product) {
        return res.status(404).json({ message: `Product with ID ${item._id} not found` });
      }

      
     
      // Reduce product quantity
    
      product.saleCount = product.saleCount + item.quantity;
      await product.save();
      
      console.log(product.productName , "after update the salesCount" , product.saleCount)
      
    }

    // Create the order
    const newOrder = await Order.create({ orderId, userId, paymentStatus, items ,subTotal,total });

    res.status(201).json({
      message: 'Order created successfully',
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Order with ID ${id} updated successfully`,
    updatedData: req.body,
  });
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({ message: `Order with ID ${id} deleted successfully` });
};
