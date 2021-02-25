import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/ecomerce",
  app: () => System.import("@mfe/ecomerce"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
