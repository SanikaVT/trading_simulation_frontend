import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import StockCard from "./StockCard";

function Favorites() {
  return (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ color: "black" }}>Favorite Stocks</h3>
      <Splide
        options={{
          perPage: 5,
          arrowa: "false",
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

export default Favorites;
