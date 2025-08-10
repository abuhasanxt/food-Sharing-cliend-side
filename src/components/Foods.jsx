import React, { Suspense } from 'react';
import Food from './Food';
import { motion } from "motion/react";
const Foods = ({data}) => {
    return (
        <div>
      <motion.h2
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff"],
          transition: { duration: 2, repeat: Infinity },
        }}
        className="text-center text-3xl font-bold"
      >
        Foods
      </motion.h2>

      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((singleFood) => (
            <Food
              key={singleFood.id}
              singleFood={singleFood}
            ></Food>
          ))}
        </div>
      </Suspense>
    </div>
    );
};

export default Foods;