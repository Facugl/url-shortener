import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick", token],
    queryFn: async () => {
      const response = await api.get(
        "/api/urls/total-clicks?start-date=2025-04-28&end-date=2025-12-07",
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

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls", token],
    queryFn: async () => {
      const response = await api.get("/api/urls/my-urls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    select: (data) => {
      const sortedDate = data.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      return sortedDate;
    },
    onError: (error) => {
      if (onError) onError(error);
    },
    staleTime: 5000,
    enabled: !!token,
  });
};
