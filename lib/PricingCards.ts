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
  // {
  //     price: 99,
  //     title: "Insightful Enterprise",
  //     benefits: [
  //         "Everything In Pro Tier, and:",
  //         "Data-driven recommendations",
  //         "Customizable sales workflows",
  //         "Real-time alerts and notifications",
  //     ],
  //     id: 2,
  //     oneliner: "Comprehensive sales optimization for accelerated revenue gains"
  // },
];

export default pricingCards;
