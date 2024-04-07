"use client";

import axios from "axios";
import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { toast } from "react-hot-toast";

<<<<<<< HEAD
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
=======
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { tools } from "@/constants";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
<<<<<<< HEAD
              Upgrade to Imagi-Sync
=======
              Upgrade to Genius
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
<<<<<<< HEAD
              <Card
                key={tool.href}
                className="p-3 border-black/5 flex items-center justify-between"
              >
=======
              <Card key={tool.href} className="p-3 border-black/5 flex items-center justify-between">
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
<<<<<<< HEAD
                  <div className="font-semibold text-sm">{tool.label}</div>
=======
                  <div className="font-semibold text-sm">
                    {tool.label}
                  </div>
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
<<<<<<< HEAD
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
=======
          <Button disabled={loading} onClick={onSubscribe} size="lg" variant="premium" className="w-full">
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
