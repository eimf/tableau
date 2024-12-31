"use client";

import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useSelector } from 'react-redux';
// import { RootState } from '@/lib/store';

export function NavButtons() {

  return (
    <>
      {/* Back center - top middle */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          size="lg"
          className="bg-gold-500 hover:bg-gold-600 text-black animate-bounce"
          onClick={() =>
        window.open(
          "https://www.vagaro.com/tableaudekatia/book-now",
          "_blank"
        )
          }
        >
          <Scissors className="h-6 w-6 text-black-400" />
          Book Now
        </Button>
      </div>
    </>
  );
}
