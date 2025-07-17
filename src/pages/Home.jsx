import { useContext } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && (
        <p className="text-center text-xl font-bold py-2  ">
          Welcome Mr. {user?.displayName} ❤️‍🔥❤️‍🔥. Now You Can Watch All the
          Recipies🍉🍉
        </p>
      )}
      <Banner></Banner>
    </>
  );
};

export default Home;
