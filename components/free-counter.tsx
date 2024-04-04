import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { MAX_FREE_COUNTS } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use-pro-modal";

export const FreeCounter = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean,
  apiLimitCount: number
}) => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return null;
  }

  if (loading) {
    return (
      <div className="px-3">
        <Card className="bg-white/10 border-0">
          <CardContent className="py-6">
            {/* Skeleton loading UI */}
            <div className="animate-pulse">
              <div className="text-center text-sm text-white mb-4 space-y-2">
                <p>0 / {MAX_FREE_COUNTS} Free Generations</p>
                <div className="h-3 bg-gray-300 rounded-md"></div> {/* Skeleton loading for progress */}
              </div>
              <Button disabled variant="premium" className="w-full">
                <span className="animate-pulse">Loading...</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress className="h-3" value={(apiLimitCount / MAX_FREE_COUNTS) * 100} />
          </div>
          <Button onClick={proModal.onOpen} variant="premium" className="w-full">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
