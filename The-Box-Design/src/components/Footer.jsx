import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <section>
        <div className="bottom-wrapper">
          <div className="bottom-container">
            <div className="bottom-left">
              <div className="bottom-labels">
                <label>Address:</label>
                <p>6391 Elgin St. Celina, Delaware 10299</p>
              </div>
              <div className="bottom-labels">
                <label>Phone:</label>
                <p>+84 1102 2703</p>
              </div>
              <div className="bottom-labels">
                <label>EMAIL:</label>
                <p>hello@thebox.com</p>
              </div>
              <div className="header-logo mt-7">
                <img src="/public/Group.png" alt="" />
                <h1>
                  <span className="italic">The</span>Box
                </h1>
              </div>
            </div>
            <div className="bottom-right">
              <div className="bottom-newsletter ">
                <p>NEWSLETTER:</p>
                <input
                  type="email"
                  placeholder="Your Email Here"
                  className="mt-5"
                />
                <button>Subscribe</button>
              </div>

              <div className="bottom-socials mt-5">
                <p>SOCIAL:</p>
                <div className="icons flex gap-5 mt-5">
                  <FaFacebook className="fav-icons" />
                  <TiSocialLinkedin className="fav-icons bg-black text-white " />
                  <AiFillTwitterCircle className="fav-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-container ">
            <p>TheBox Company © 2022. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// const createOrder = async (userId, items) => {
//   let totalAmount = 0;

//   // Start transaction (VERY IMPORTANT)
//   const connection = await db.getConnection();
//   await connection.beginTransaction();

//   try {
//     // Insert empty order first
//     const [orderResult] = await connection.execute(
//       `INSERT INTO ${TABLE_NAMES.ORDERS} (user_id, total_amount) VALUES (?, ?)`,
//       [userId, 0]
//     );

//     const orderId = orderResult.insertId;

//     for (const item of items) {

//       // 1️⃣ Get coffee base price
//       const [coffee] = await connection.execute(
//         `SELECT price FROM ${TABLE_NAMES.COFFEES} WHERE coffee_id = ?`,
//         [item.coffee_id]
//       );

//       if (coffee.length === 0) {
//         throw new Error("Invalid coffee ID");
//       }

//       let itemPrice = coffee[0].price;

//       // 2️⃣ Add size price
//       if (item.size_id) {
//         const [size] = await connection.execute(
//           `SELECT price_increment FROM ${TABLE_NAMES.SIZES} WHERE size_id = ?`,
//           [item.size_id]
//         );

//         itemPrice += size[0]?.price_increment || 0;
//       }

//       // 3️⃣ Add milk price
//       if (item.milk_id) {
//         const [milk] = await connection.execute(
//           `SELECT price_increment FROM ${TABLE_NAMES.MILK_TYPES} WHERE milk_id = ?`,
//           [item.milk_id]
//         );

//         itemPrice += milk[0]?.price_increment || 0;
//       }

//       const finalItemPrice = itemPrice * item.quantity;

//       totalAmount += finalItemPrice;

//       // 4️⃣ Insert order item with correct price
//       await connection.execute(
//         `INSERT INTO ${TABLE_NAMES.ORDER_ITEM}
//          (order_id, coffee_id, size_id, milk_id, quantity, price)
//          VALUES (?, ?, ?, ?, ?, ?)`,
//         [
//           orderId,
//           item.coffee_id,
//           item.size_id,
//           item.milk_id,
//           item.quantity,
//           finalItemPrice
//         ]
//       );
//     }

//     // 5️⃣ Update order total
//     await connection.execute(
//       `UPDATE ${TABLE_NAMES.ORDERS}
//        SET total_amount = ?
//        WHERE order_id = ?`,
//       [totalAmount, orderId]
//     );

//     await connection.commit();
//     connection.release();

//     return {
//       order_id: orderId,
//       total_amount: totalAmount,
//     };

//   } catch (error) {
//     await connection.rollback();
//     connection.release();
//     throw error;
//   }
// };
