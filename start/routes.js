"use strict";

const Route = use("Route");

Route.get("/", ({ request }) => {
  return { greeting: "Hello world in JSON" };
});

Route.post("/users", "UserController.create");
Route.post("/sessions", "SessionController.create");

Route.resource("properties", "PropertyController")
  .apiOnly()
  .middleware("auth");
