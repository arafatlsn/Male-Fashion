import Image from "next/image";

const Handler = ({ product }) => {
  const { title, img, description, cartQuantity, price } = product;

  return (
    <div className="bg-[white] px-[1rem] py-[.6rem] rounded-[8px] flex gap-[.7rem] items-start">
      {/* img div  */}
      <div className="min-w-[60px] min-h-[60px] relative">
        <Image src={img} alt="product-img" layout="fill" />
      </div>
      {/* text div  */}
      <div className="grow">
        <div className="flex justify-between gap-[.5rem]">
          <h1 className="grow text-[13px] text-gray-600 tracking-wide font-bold">
            {title}
          </h1>
          <p className="text-[14px] text-gray-500 font-bold whitespace-nowrap tracking-wide">
            BDT : {cartQuantity * price}
          </p>
        </div>
        <div>
          <p className="text-[13px] text-gray-500 tracking-wide">
            Quantity: {cartQuantity}
          </p>
          <p className="text-[12px] text-gray-500 tracking-wide">
            {description}
          </p>
          <p className="text-[13px] text-gray-500 tracking-wide text-right">
            Each Item: {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Handler;
