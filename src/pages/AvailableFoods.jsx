import axios from "axios";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://mission-scic11-server-template-ecru.vercel.app/available-food"
      )
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return (
    <div className="min-h-screen mt-20">
      <motion.h2
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff"],
          transition: { duration: 2, repeat: Infinity },
        }}
        className="text-center text-3xl font-bold"
      >
        Available Foods
      </motion.h2>

      {loading && (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      {!loading && (
        <>
          {foods.length === 0 ? (
            <div className="text-center space-y-4">
              <p className="text-gray-500 text-xl">No Available foods yet.</p>
              <Link to="/add-food" className="btn btn-primary w-sm">
                Add Food
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 gap-5">
              {foods.map((food) => (
                <div
                  key={food._id}
                  className="p-4 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={food.img}
                    alt="photo"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm text-gray-600">
                      🍔 Food Name: {food.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      ⏳ Expires on:{" "}
                      <span className="font-medium">{food.date}</span>
                    </p>
                    <p>🟢Status: {food.status}</p>
                    <Link to={`/details/${food._id}`} className="btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AvailableFoods;
