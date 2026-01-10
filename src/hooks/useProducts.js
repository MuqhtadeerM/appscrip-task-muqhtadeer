import { useState, useEffect } from "react";

export default function useProducts(initialProducts) {
  // Always initialize with an array (SSR-safe)
  const [filteredProducts, setFilteredProducts] = useState(
    Array.isArray(initialProducts) ? initialProducts : []
  );

  const [sortOrder, setSortOrder] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState({});

  // Sync when SSR props arrive / change
  useEffect(() => {
    if (Array.isArray(initialProducts)) {
      setFilteredProducts(initialProducts);
    }
  }, [initialProducts]);

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
        sorted = Array.isArray(initialProducts) ? initialProducts : [];
    }

    setFilteredProducts(sorted);
  };

  const handleFilter = (filters) => {
    let filtered = Array.isArray(initialProducts) ? initialProducts : [];

    if (filters?.category && filters.category !== "all") {
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


