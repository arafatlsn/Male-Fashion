import { Table } from "flowbite-react";
import { useRouter } from "next/router";
import QuantityComp from "./QuantityComp";
import { BiTrash } from 'react-icons/bi'

const Handler = ({ cart, setCart }) => {
  const route = useRouter();
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
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // remove from cart
  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product._id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div>
      <Table hoverable={true} className="w-[100%] mx-auto">
        <Table.Head className="w-[100%] text-[14px] text-left font-[400] text-green-800 bg-[#F3F2EE]">
          <Table.HeadCell className="py-[1rem] text-[17px] tracking-wider pl-[1rem]">Product</Table.HeadCell>
          <Table.HeadCell className="py-[1rem] text-[17px] text-center tracking-wider">Quantity</Table.HeadCell>
          <Table.HeadCell className="py-[1rem] text-[17px] whitespace-nowrap tracking-wider pr-[.5rem]">
            Total Price
          </Table.HeadCell>
          <Table.HeadCell className="py-[1rem] text-[17px] tracking-wider pr-[.5rem]">
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="w-[100%] divide-x-0 divide-y">
          {cart?.map((product) => (
            <Table.Row key={product._id} className="w-[100%]">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white p-[1rem] pr-0">
                <div className="flex items-center gap-[1rem]">
                  <div className="w-[80px]">
                    <img
                      src={product.img}
                      className="w-[80px] h-[80px] object-contain"
                      alt="h3llo world"
                    />
                  </div>
                  <div>
                    <h1 className="tracking-wide">
                      {product.title.length > 30
                        ? product.title.slice(0, 30) + "...."
                        : product.title}
                    </h1>
                    <p className="text-[1.1rem] text-gray-800">BDT {product.price}</p>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <QuantityComp
                  product={product}
                  updateQuantity={updateQuantity}
                />
              </Table.Cell>
              <Table.Cell className="text-gray-800 py-[1.5rem] text-center text-[17px] font-[600]">
                BDT {product.price * product.cartQuantity}
              </Table.Cell>
              <Table.Cell className="py-[1.5rem] pr-[1rem]">
              <span onClick={() => removeProduct(product._id)}>
            <BiTrash className="text-[1.5rem] bg-[#F3F2EE] text-red-800 p-[.3rem] box-content cursor-pointer rounded-[4px]" />
          </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Handler;
