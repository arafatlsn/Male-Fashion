import axios from "axios";
import Orders from "../../Components/OrderHistoryPage/Orders";
import useAthentication from "../../Authentication/useAuthentication";
import DisplayPaths from "../../Components/Shared/DisplayPaths";
import { useRouter } from "next/router";

const Handler = ({ result }) => {
  const { userLoad } = useAthentication();
  const route = useRouter();

  if (!userLoad?.email) {
    route.push("/");
  }

  return (
    <div>
      <DisplayPaths
        heading={"order history"}
        paths={["home", "order history"]}
      />
      <div className="w-[100vw] lg:w-[1170px] px-[.5rem] lg:px-0 mx-auto min-h-[45vh]">
        <div className="lg:w-[50%] mx-auto flex flex-col gap-[2.5rem]">
          {result?.length ? (
            result?.map((order) => <Orders key={order?._id} order={order} />)
          ) : (
            <p className="text-center text-[22px] tracking-wide text-[dimgray]">{`You didn't any order before.`}</p>
          )}
        </div>
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
    `https://male-fashion-tau.vercel.app/api/loadorders?email=${email}`
  );
  return {
    props: {
      result: data,
    },
  };
}
