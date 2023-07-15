import { FiHeart } from "react-icons/fi";
import { BsArrowLeftRight } from "react-icons/bs";
import styles from "../../styles/Card.module.css";
import { Rating } from "flowbite-react";
import { useContext } from "react";
import { ProductsContext } from "../../pages/_app";
import { useRecoilState } from "recoil";
import { cartState, visibleCartUiState } from "../../AtomStates/ProductStates";
import Image from "next/image";

const Handler = ({ product, index, length }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const [showCartUi, setShowCartUi] = useRecoilState(visibleCartUiState);
  const { title, price, img } = product;

  let category;
  if (product?.category.length) {
    if (product?.category === "new") {
      category = (
        <p className="bg-[white] text-lightBlack text-[11px] px-[15px] py-[2px] font-semibold uppercase">
          New
        </p>
      );
    } else {
      category = (
        <p className="text-[white] bg-lightBlack text-[11px] px-[15px] py-[2px] font-semibold uppercase">
          Sale
        </p>
      );
    }
  }

  const addCartHandler = (product) => {
    const id = product._id;
    const findProduct = cart.find((el) => el._id === id);
    if (!findProduct) {
      const updatedObject = {
        ...product,
        cartQuantity: 1,
      };
      setCart([...cart, updatedObject]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setShowCartUi(true);
      setTimeout(() => {
        setShowCartUi(false);
      }, 3000);
    } else {
      const updatedObject = {
        ...product,
        cartQuantity: findProduct.cartQuantity + 1,
      };
      const newCart = [];
      cart.map((el) => {
        if (el._id === id) {
          newCart.push(updatedObject);
        } else {
          newCart.push(el);
        }
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setShowCartUi(true);
      setTimeout(() => {
        setShowCartUi(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.card}>
      <div className="w-[262.5px] h-[260px] lg:mx-0 overflow-hidden relative">
        <Image
          src={img}
          className="w-[100%] lg:w-[262.5px] h-[260px] object-contain"
          alt="h3llo world"
          layout="fill"
        />
        <div className="absolute z-[100] top-[1rem]">{category}</div>
        <div
          className={`absolute z-[100] top-[.9rem] right-[1rem] flex flex-col gap-[.7rem] ${styles.cardHiddenIcon}`}
        >
          <span>
            <FiHeart className="text-lightBlack text-[1.3rem] bg-[white] p-[.5rem] box-content cursor-pointer" />
          </span>
          <span>
            <BsArrowLeftRight className="text-lightBlack text-[1.3rem] bg-[white] p-[.5rem] box-content cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="w-[262.5px] pt-[25px]">
        <p className="truncate">{title}</p>
        <div>
          <Rating>
            <Rating.Star filled={product?.category === "hot"} />
            <Rating.Star filled={product?.category === "hot"} />
            <Rating.Star filled={product?.category === "hot"} />
            <Rating.Star filled={product?.category === "hot"} />
            <Rating.Star filled={false} />
          </Rating>
        </div>
        <div className="flex justify-between items-center w-content overflow-hidden">
          <p className="text-[20px] font-bold text-lightBlack">${price}</p>
          <p
            onClick={() => addCartHandler(product)}
            className={`text-[15px] font-bold whitespace-nowrap mr-[.5rem] text-[#e53637] hover:text-[#ff0000] transition-all cursor-pointer ${styles.cardText}`}
          >
            + Add To Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Handler;
