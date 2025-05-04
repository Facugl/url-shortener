import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick", token],
    queryFn: async () => {
      const response = await api.get(
        "/api/urls/total-clicks?start-date=2024-04-28&end-date=2024-12-07",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    select: (data) => {
      return Object.keys(data).map((key) => ({
        clickDate: key,
        count: data[key],
      }));
    },
    onError: (error) => {
      if (onError) onError(error);
    },
    staleTime: 5000,
    enabled: !!token,
  });
};
