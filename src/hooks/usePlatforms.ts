import platformsService from "@/services/platforms-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface PlatformResult {
  id: number;
  name: string;
  slug: string;
}

interface Platform {
  label: string;
  value: number;
}

const supportedPlatformSlugs = new Set([
  "pc",
  "playstation5",
  "xbox-series-x",
  "ios",
  "android",
  "macos",
  "linux",
]);

function usePlatforms() {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = platformsService.getAll<PlatformResult>();
    request
      .then((res) => {
        console.log(res.data.results);
        const platformsData: Platform[] = res.data.results
          .filter((platform) => supportedPlatformSlugs.has(platform.slug))
          .map((platform) => ({
            label: platform.name,
            value: platform.id,
          }));
        setPlatforms(platformsData);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
      });

    return () => cancel();
  }, []);

  return { platforms, error };
}

export default usePlatforms;
