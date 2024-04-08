import {
  AlarmClockOff,
  ArrowUpNarrowWide,
  LucideIcon,
  TrendingUp,
} from "lucide-react";

interface IInfoCard {
  title: string;
  icon: LucideIcon;
  bodyText: string;
  id: number;
}

const infoCards: IInfoCard[] = [
  {
    title: "Increased Productivity",
    bodyText:
      " Imagi-Sync's advanced AI algorithms streamline workflows, identifying optimal approaches and automating repetitive tasks, resulting in up to 30% increased productivity for teams.",
    icon: ArrowUpNarrowWide,
    id: 1,
  },
  {
    title: "Efficiency Maximization",
    bodyText:
      "Imagi-Sync automates personalized content generation, liberating valuable time for creative pursuits and revenue-generating endeavors, fostering unparalleled efficiency across teams.",
    icon: AlarmClockOff,
    id: 2,
  },
  {
    title: "Enhanced Creativity",
    bodyText:
      " Imagi-Sync's dynamic AI tools inspire innovative solutions by generating diverse ideas, designs, and content, fostering creativity and driving projects forward with unparalleled efficiency.",
    icon: TrendingUp,
    id: 3,
  },
];

export default infoCards;
