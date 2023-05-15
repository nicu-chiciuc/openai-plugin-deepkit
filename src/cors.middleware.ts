import { HttpMiddleware, HttpRequest, HttpResponse, http } from "@deepkit/http";
import { Response } from "@deepkit/http";
import * as fsPromise from "fs/promises";

export class CorsMiddleware implements HttpMiddleware {
  execute(
    request: HttpRequest,
    response: HttpResponse,
    next: () => void
  ): void | Promise<void> {
    console.log("CorsMiddleware", request.url, request.method, request.headers);

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    return next();
  }
}
