import axios from "axios";
import Orders from "../../Components/OrderHistoryPage/Orders";

const Handler = ({ result }) => {
  return (
    <div className="w-[1170px] mx-auto">
      <div className="w-[50%] mx-auto flex flex-col gap-[2.5rem]">
        {result.map((order) => (
          <Orders key={order?._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Handler;

export async function getServerSideProps(context) {
  const email = context?.query.email;
  const {
    data: { data },
  } = await axios.get(
    `https://male-fashion-arafatlsn.vercel.app/api/loadorders?email=${email}`
  );
  return {
    props: {
      result: data,
    },
  };
}
