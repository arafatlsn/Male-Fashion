import imgOne from "../../Assets/Homepage/blog-1.jpg";
import imgTwo from "../../Assets/Homepage/blog-2.jpg";
import imgThree from "../../Assets/Homepage/blog-3.jpg";
import LatestCard from "./LatestCard";

const Handler = () => {
  const data = [
    {
      id: 1,
      img: imgOne,
      text: "What Curling Irons Are The Best Ones",
      date: "16 February 2020",
    },
    {
      id: 2,
      img: imgTwo,
      text: "Eternity Bands Do Last Forever",
      date: " 21 February 2020",
    },
    {
      id: 3,
      img: imgThree,
      text: "The Health Benefits Of Sunglasses",
      date: "28 February 2020",
    },
  ];

  return (
    <div className="w-[1170px] mx-auto py-[5rem]">
      <div>
        <p className="text-center text-[15px] text-red-500 font-bold tracking-wide uppercase">
          Latest News
        </p>
        <h1 className="text-[2rem] font-bold  text-center text-lightBlack tracking-wide mt-[.5rem] mb-[2rem]">
          Fashion New Trends
        </h1>
      </div>
      <div className="flex justify-between">
        {data?.map((el) => (
          <LatestCard key={el.id} el={el} />
        ))}
      </div>
    </div>
  );
};

export default Handler;
