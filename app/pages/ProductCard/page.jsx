"use client";
import React, { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";
import RecommendedCard from "./RecommendedCard";

const ProductCards = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        const data = await response.json();
        setMenuItems(data.Items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  // Filter items based on IsPopular and IsRecommended
  const popularItems = menuItems.filter((item) => item.IsPopular === true);
  const recommendedItems = menuItems.filter(
    (item) => item.IsRecommended === true
  );

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="">
            <PopularProduct popularItems={popularItems} />
          </div>
          <div>
            <RecommendedCard recommendedItems={recommendedItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCards;
