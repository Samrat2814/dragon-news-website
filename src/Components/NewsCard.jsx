/* eslint-disable react/prop-types */
import { FaRegBookmark, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-4">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-semibold">{news.author.name}</h3>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <FaRegBookmark className="text-gray-500 cursor-pointer text-lg" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{news.title}</h2>

      {/* Thumbnail Image */}
      <img
        src={news.thumbnail_url}
        alt="News Thumbnail"
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Description */}
      <p className="text-sm text-gray-700 mt-2 line-clamp-3">
        {news.details}
      </p>

      {/* Read More Button */}
      <button className="text-orange-500 mt-2 font-semibold">Read More</button>

      {/* Rating & Views */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center text-yellow-500 gap-1">
          <FaStar />
          <span className="font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
