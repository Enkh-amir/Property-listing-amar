import { StarIcon } from "@/public/svg/StarIcon";

const Card = ({ item }) => {
  return (
    <div className="w-[45%] h-[14vw] flex items-center shadow-lg rounded-[20px] p-3 ">
      <img
        className="w-[50%] h-[100%] object-cover rounded-[20px] "
        src={item.imageUrl}
        alt=""
      />
      <div className="w-[50%] h-[80%] flex flex-col ml-4 gap-[14px] ">
        <div className="text-[#3E4958] font-extrabold text-lg ">
          {item.title}{" "}
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <StarIcon /> {item.star}
          </div>
          <div>{item.address} </div>
        </div>
        <div>
          {item.bedrooms} bedroom {item.bathrooms} bathroom{" "}
        </div>
        <div>{item.type} </div>
      </div>
    </div>
  );
};
export default Card;
