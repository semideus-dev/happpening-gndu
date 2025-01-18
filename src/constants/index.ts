import {
  CircleDollarSignIcon,
  CircleGauge,
  FolderRoot,
  Plus,
  Tags,
  Theater,
  UserRoundCog,
  Users,
} from "lucide-react";

export const nav = {
  overview: [
    {
      title: "Dashboard",
      url: "#",
      icon: CircleGauge,
    },
  ],
  events: [
    {
      title: "New Event",
      url: "#",
      icon: Plus,
    },
    {
      title: "Backstage",
      url: "#",
      icon: Theater,
    },
    {
      title: "Manage Events",
      url: "#",
      icon: FolderRoot,
    },
  ],
  account: [
    {
      title: "Account",
      url: "#",
      icon: UserRoundCog,
    },
    {
      title: "Teams",
      url: "#",
      icon: Users,
    },
  ],

  statistics: [
    {
      title: "Earnings",
      url: "#",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Tickets",
      url: "#",
      icon: Tags,
    },
  ],
};
