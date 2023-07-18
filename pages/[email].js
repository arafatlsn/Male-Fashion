import axios from "axios";
import Orders from "../Components/OrderHistoryPage/Orders";
import DisplayPaths from "../Components/Shared/DisplayPaths";
import Head from "next/head";

const Handler = ({ result }) => {
  return (
    <>
      {/* head  */}
      <Head>
        <title>Male Fashion - Order History</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
};

export default Handler;

export async function getStaticPaths() {
  const emailArr = await axios.get(
    "https://male-fashion1.netlify.app/api/loadorders"
  );
  const filteredEmail = [];
  emailArr?.data?.map((el) => {
    if (filteredEmail?.indexOf(el?.email) === -1) {
      filteredEmail.push(el?.email);
    }
  });
  const allPaths = filteredEmail?.map((el) => {
    return {
      params: {
        email: el,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const email = context?.params?.email;
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://male-fashion1.netlify.app/api/loadorders?email=${email}`
    );
    return {
      props: {
        result: data,
      },
    };
  } catch (err) {
    console.log("history order 81", err.message);
    return {
      props: {
        result: [],
      },
    };
  }
}
