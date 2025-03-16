import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  const { cartList, total } = useCart();
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length} /${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
