import { Table } from "flowbite-react";
import { useRouter } from "next/router";
import QuantityComp from "./QuantityComp";

const Handler = ({ cart, setCart }) => {
  const route = useRouter()
  // update quantity
  const updateQuantity = (id, quantity) => {
    const newCart = [];
    cart.map((product) => {
      if (product._id === id) {
        product.cartQuantity = quantity;
        newCart.push(product);
      } else {
        newCart.push(product);
      }
    });
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // remove from cart 
  const removeProduct = (id) => {
    const newCart = cart.filter(product => product._id !== id);
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <div>
      <Table hoverable={true} className="w-[100%] mx-auto">
        <Table.Head className="text-[14px] text-left font-[400] text-green-800 bg-green-200">
          <Table.HeadCell className="py-[.5rem] pl-[.5rem]">
            Image
          </Table.HeadCell>
          <Table.HeadCell className="py-[.5rem]">Product name</Table.HeadCell>
          <Table.HeadCell className="py-[.5rem]">Quantity</Table.HeadCell>
          <Table.HeadCell className="py-[.5rem]">Unit Price</Table.HeadCell>
          <Table.HeadCell className="py-[.5rem] pr-[.5rem]">
            Total Price
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {cart?.map((product) => (
            <Table.Row key={product._id} className="bg-[whitesmoke] w-[100%]">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pl-[.5rem]">
                <img
                  src={product.img}
                  className="w-[60px] h-[60px] object-contain"
                  alt="h3llo world"
                />
              </Table.Cell>
              <Table.Cell className="py-[1.5rem]">
                {product.title.length > 30
                  ? product.title.slice(0, 30) + "...."
                  : product.title}
              </Table.Cell>
              <Table.Cell>
                <QuantityComp
                  product={product}
                  updateQuantity={updateQuantity}
                  removeProduct={removeProduct}
                />
              </Table.Cell>
              <Table.Cell className="py-[1.5rem]">{product.price}</Table.Cell>
              <Table.Cell className="py-[1.5rem]">
                {product.price * product.cartQuantity}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Handler;
