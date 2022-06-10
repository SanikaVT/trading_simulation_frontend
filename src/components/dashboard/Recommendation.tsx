import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import StockCard from "./StockCard";

function Recommendation() {
  return (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ color: "black" }}>Recommeded Stocks</h3>
      <Splide
        options={{
          perPage: 5,
          arrow: "true",
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
        <SplideSlide>
          <StockCard />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Recommendation;
