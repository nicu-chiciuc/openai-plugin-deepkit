import { expect, test } from "@jest/globals";
import { createTestingApp } from "@deepkit/framework";
import { MainControllerHttp } from "../src/main.http";
import { HttpRequest } from "@deepkit/http";

test("http controller", async () => {
  const testing = createTestingApp({
    controllers: [MainControllerHttp],
  });

  await testing.startServer();

  try {
    const response = await testing.request(HttpRequest.GET("/hello/World"));
    expect(response.statusCode).toBe(200);
    expect(response.json).toEqual({ hello: "World" });
  } finally {
    await testing.stopServer();
  }
});
