import { useMealsStore } from "../_libs/use-meals-store";
import { getMeal, getMeals } from "../_services/mealQueries";
import { useQuery } from "@tanstack/react-query";

const useMeals = () => {
  const { mealFilters } = useMealsStore();

  return useQuery({
    queryKey: ["meals", mealFilters],
    queryFn: () => getMeals(mealFilters),
  });
};

const useMeal = () => {
  const { selectedMealId } = useMealsStore();

  return useQuery({
    queryKey: ["meals", { selectedMealId }],
    queryFn: () => getMeal(selectedMealId!),
    enabled: !!selectedMealId,
  });
};

export { useMeals, useMeal };
