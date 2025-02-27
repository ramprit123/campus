import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Or configure your retry logic
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

export default queryClient;
