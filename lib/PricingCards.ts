interface IPricingCard {
  price: number;
  title: string;
  benefits: string[];
  id: number;
  oneliner: string;
}

const pricingCards: IPricingCard[] = [
  {
    price: 20,
    title: "Imagi-Sync Pro",
    benefits: [
      "Unlimited Conversation",
      "Unlimited Music Generation",
      "Unlimited Image Generation",
      "Unlimited Video Generation",
      "Unlimited Code Generation",
    ],
    id: 1,
    oneliner: "AI-powered Platform for Creative Professionals",
  },
];

export default pricingCards;
