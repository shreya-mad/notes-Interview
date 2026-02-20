Basic flow in MERN:

1.User clicks Pay Now
2.Your backend creates an Order
3.Payment gateway (Razorpay/Stripe etc.) opens checkout
4.User pays
5.Gateway sends payment success/failure
6.Your backend verifies payment
7.You update DB (order status = paid)


we can use RazorPay or stripe but RazorPay is beginner friendly for indians and stripe is for international use ande it has bit more configuration as compare RazorPay. 