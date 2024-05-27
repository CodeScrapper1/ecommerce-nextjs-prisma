import { BookA, Home, Settings, UsersRound } from "lucide-react";

export const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const profile = [
  {
    title: "Profile",
    img: "/banner1.png",
    text: "Select your favored vehicle, timetable, and objective effortlessly. Secure your booking on the web now for a consistent encounter.",
    icon: "paint-brush",
  },
  {
    title: "Quotes",
    text: "Your definitive decision for lavish or high-limit transport, whenever, anyplace in Melbourne.",
    icon: "quote-left",
    img: "/banner2.png",
  },
  {
    title: "Inspiration",
    text: "Find our spic and span Limolux vehicle administration, conveying unmatched class and accommodation.",
    img: "/banner3.png",
    icon: "lightbulb",
  },
];

export const staticTime = [
  {
    count: 23,
    time: "Hours",
  },
  {
    count: 10,
    time: "Days",
  },
  {
    count: 59,
    time: "Minutes",
  },
  {
    count: 35,
    time: "Seconds",
  },
];

export const sidebarRoutes = [
  {
    id: 1,
    title: "Dashboard",
    route: "/dashboard",
    icon: <Home className="h-5 w-5 text-gray-500" />,
  },
  {
    id: 2,
    title: "Users",
    route: "/dashboard/users",
    icon: <UsersRound className="h-5 w-5 text-gray-500" />,
  },
  {
    id: 3,
    title: "Orders",
    route: "/dashboard/orders",
    icon: <BookA className="h-5 w-5 text-gray-500" />,
  },
  {
    id: 4,
    title: "Products",
    route: "/dashboard/products",
    icon: <BookA className="h-5 w-5 text-gray-500" />,
  },
  {
    id: 5,
    title: "Categories",
    route: "/dashboard/categories",
    icon: <BookA className="h-5 w-5 text-gray-500" />,
  },
  {
    id: 6,
    title: "Settings",
    route: "/dashboard/settings",
    icon: <Settings className="h-5 w-5 text-gray-500" />,
  },
];

// users list
export const userList = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];
