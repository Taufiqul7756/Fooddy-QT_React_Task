"use client";
import React, { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";
import RecommendedCard from "./RecommendedCard";

const ProductCards = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        const data = await response.json();
        setMenuItems(data.Items);
      } catch (error) {
        console.error("Error fetching menu data:", error);
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
      <div className="py-10">
        <PopularProduct popularItems={popularItems} />
      </div>
      <div>
        <RecommendedCard recommendedItems={recommendedItems} />
      </div>
    </div>
  );
};

export default ProductCards;
