"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <p className="w-full">
        <CountUp decimal="," decimals={2} prefix="$" start={0} end={amount} />
      </p>
    </div>
  );
};

export default AnimatedCounter;
