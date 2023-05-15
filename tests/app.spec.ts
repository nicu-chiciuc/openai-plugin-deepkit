import { test, expect } from "@jest/globals";
import { Logger, MemoryLoggerTransport } from "@deepkit/logger";
import { createTestingApp } from "@deepkit/framework";

test("first test", () => {
  expect(1 + 1).toBe(2);
});
