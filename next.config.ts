import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 rewrites: async () => {
    return [
      {
        source: "/api/quiz/questions/:path*",
        destination: "http://127.0.0.1:8000/questions/:path*",
      },
      {
        source: "/api/quiz/eval",
        destination: "http://127.0.0.1:5000/eval",
      },
    ];
  },
};

export default nextConfig;
