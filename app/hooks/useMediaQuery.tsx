import { useEffect, useMemo, useState } from "react";

export function useMediaQuery(query: string) {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(query);
      const onChange = () => setMatch(mediaQuery.matches);

      // Set initial match value
      setMatch(mediaQuery.matches);
      mediaQuery.addEventListener("change", onChange);

      // Cleanup function to remove event listener
      return () => mediaQuery.removeEventListener("change", onChange);
    }
  }, [query]);

  return match;
}