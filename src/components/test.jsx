import { useEffect } from "react";
import { BACKEND_URL } from "../config";

export default function TestRoutes() {
  useEffect(() => {
    const backendBase = BACKEND_URL;

    const testEndpoints = [
      `${backendBase}/test`,
      `${backendBase}/api/donor/test`,
      `${backendBase}/api/hospital/test`,
    ];

    testEndpoints.forEach(async (url) => {
      try {
        const res = await fetch(url, {
          method: "GET",
          credentials: "include", // if you use cookies
        });

        const data = await res.json();
        console.log(`✅ ${url}`, data);
      } catch (err) {
        console.error(`❌ ${url}`, err);
      }
    });
  }, []);

  return null; // This component only runs the tests
}