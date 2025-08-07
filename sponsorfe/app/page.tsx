import CarouselWrapper from "@/components/carouselWrapper";
import { Button } from "@/components/ui/button";
import { Gift, Handshake } from "lucide-react";

export default function Home() {
  return (
    <div className="text-center h-9/10 content-center"> 
      <Button variant="link" className="font-bold text-3xl py-10 text-blue-400 "><Gift size={40} />Get Rewards</Button>
      <CarouselWrapper></CarouselWrapper>
      <Button variant="link" className="font-bold text-3xl py-10 text-blue-400"><Handshake size={40} />Partner With Us</Button>
    </div>
  );
}
