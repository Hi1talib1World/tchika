import Dashboard from "@/components/Dashboard.vue";
import Venues from "@/components/Venues.vue";
import Connections from "@/components/Connections.vue";
import EventDetail from "@/components/EventDetail.vue";
import Messages from "@/components/Messages.vue";
import Settings from "@/components/Settings.vue";
import Splash from "@/components/Splash.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

// Mobile Components
import MobileLayout from "@/components/mobile/MobileLayout.vue";
import MobileSplash from "@/components/mobile/MobileSplash.vue";
import MobileOnboarding from "@/components/mobile/MobileOnboarding.vue";
import MobileHome from "@/components/mobile/MobileHome.vue";
import MobileTheTable from "@/components/mobile/MobileTheTable.vue";
import MobileIcebreakers from "@/components/mobile/MobileIcebreakers.vue";
import MobileConnect from "@/components/mobile/MobileConnect.vue";

const routes = [
  {
    path: "/splash",
    name: "WebSplash",
    component: Splash,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/venues",
    name: "Venues",
    component: Venues,
  },
  {
    path: "/connections",
    name: "Connections",
    component: Connections,
  },
  {
    path: "/events/:id",
    name: "EventDetail",
    component: EventDetail,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/mobile/splash",
    name: "MobileSplash",
    component: MobileSplash,
  },
  {
    path: "/mobile",
    component: MobileLayout,
    children: [
      {
        path: "",
        redirect: "/mobile/home"
      },
      {
        path: "onboarding",
        name: "MobileOnboarding",
        component: MobileOnboarding
      },
      {
        path: "home",
        name: "MobileHome",
        component: MobileHome
      },
      {
        path: "table",
        name: "MobileTheTable",
        component: MobileTheTable
      },
      {
        path: "icebreakers",
        name: "MobileIcebreakers",
        component: MobileIcebreakers
      },
      {
        path: "connect",
        name: "MobileConnect",
        component: MobileConnect
      }
    ]
  }
];

export default routes;
