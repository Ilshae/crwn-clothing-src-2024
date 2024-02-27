import CheckoutItem from "./checkout-item/CheckoutItem.tsx";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSelectors.ts";
import { Container, Header, HeaderCell, Total } from "./CheckoutStyles.ts";
import { CartItemType } from "../../types.ts";
import PaymentForm from "./payment-form/PaymentForm.tsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Container>
      <Header>
        <HeaderCell>Product</HeaderCell>
        <HeaderCell>Description</HeaderCell>
        <HeaderCell>Quantity</HeaderCell>
        <HeaderCell>Price</HeaderCell>
        <HeaderCell>Remove</HeaderCell>
      </Header>
      {cartItems.map((cartItem: CartItemType) => (
        <CheckoutItem key={cartItem.name} {...cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </Container>
  );
};

export default Checkout;
