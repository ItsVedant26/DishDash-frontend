import SearchBar, { SearchForm } from "@/components/SearchBar";
import landingimage from "../assets/burger.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-orange-600">
          Hungry? We have Got You Covered!
        </h1>
        <span className="text-xl">
          "Your Favorite Dishes, Just a click Away!"
        </span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingimage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>"Fast, Fresh, Fabulous - Delivered to You!"</span>
          {/* <img src={foodimage} /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
