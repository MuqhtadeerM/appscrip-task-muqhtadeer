import { useState } from "react";

export default function useProducts(initialProducts) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState({});

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...filteredProducts];

    switch (order) {
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        sorted = initialProducts;
    }
    setFilteredProducts(sorted);
  };

  const handleFilter = (filters) => {
    let filtered = initialProducts;

    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    setFilteredProducts(filtered);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return {
    filteredProducts,
    sortOrder,
    showFilters,
    favorites,
    handleSort,
    handleFilter,
    toggleFavorite,
    toggleFilters,
  };
}
