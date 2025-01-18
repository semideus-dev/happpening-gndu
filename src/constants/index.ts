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
      url: "/",
      icon: CircleGauge,
    },
  ],
  events: [
    {
      title: "All Events",
      url: "/events",
      icon: FolderRoot,
    },
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

export const events = [
  {
    id: 1,
    title: "SkillSprint by StatusBrew",
    category: "Technology",
    date: "2025-07-15",
    location: "MaKiChu Street",
  },
  {
    id: 2,
    title: "Diluminati",
    category: "Music",
    date: "2025-08-10",
    location: "Luhdiana, Punjab",
  },
  {
    id: 3,
    title: "NVIDIA GTC",
    category: "Technology",
    date: "2025-09-05",
    location: "Aaukat de bahr",
  },
  {
    id: 4,
    title: "Youth Festival",
    category: "Arts",
    date: "2025-10-20",
    location: "Amritsar",
  },
  {
    id: 5,
    title: "Marathon",
    category: "Sports",
    date: "2025-11-12",
    location: "Gully main",
  },
  {
    id: 6,
    title: "Business Summit",
    category: "Business",
    date: "2025-12-01",
    location: "Grand Hotel",
  },
];
