import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      let response = await axios.get(
        `  https://newsapi.org/v2/top-headlines?country=in&apiKey=a9d82d0e1b554990a9384038a13c7e52`
      );
      if (response.status === 200) {
        setItems(response.data.articles);
        console.log(response);
      } else {
        console.log("Not Found ");
      }
    } catch (error) {
      console.log("Something went wrong!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-6xl mb-8 text-sky-500 font-bold">Today's News </h1>
      <div className="flex justify-between flex-wrap gap-8   ">
        {items?.slice(0, 12).map((item, index) => (
          <div key={index} className="">
            <div
              className="max-w-sm rounded overflow-hidden
           shadow-lg hover:shadow-cyan-500/50  border border-slate-700">
              {item?.urlToImage ? (
                <img
                  className="w-full"
                  src={item?.urlToImage}
                  alt="Sunset in the mountains"
                />
              ) : (
                <img
                  className="w-full"
                  src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
                  alt="Sunset in the mountains"
                />
              )}

              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2 text-white">
                  {item?.title}
                </div>
                <p className="text-gray-400 text-base">{item?.description}</p>
                <a
                  href={item?.url}
                  className="text-pink-500 background-transparent font-semibold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">
                  Read More ...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
