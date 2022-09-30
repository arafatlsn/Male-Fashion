import Order from "./Order";

const Handler = ({ order }) => {
  const { date, email, sessionId, order: orders } = order;

  return (
    <div className="bg-[whitesmoke] px-[1rem] py-[.6rem] overflow-hidden rounded-[8px] h-min">
      <div className="mb-[1.5rem]">
        <ul>
          <li
            className="text-[14px] tracking-wide text-[dimgray] truncate"
            title={sessionId}
          >
            Order ID: {sessionId}
          </li>
          <li className="text-[14px] tracking-wide text-[dimgray]">
            User Email: {email}
          </li>
          <li className="text-[14px] tracking-wide text-[dimgray]">
            Date: {date}
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-[1rem]">
        {orders?.map((product) => (
          <Order key={product.cartQuantity * Math.random() * 100000} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Handler;
