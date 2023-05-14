import { MaxLength } from "@deepkit/type";
import { HttpMiddleware, HttpRequest, HttpResponse, http } from "@deepkit/http";
import { Response } from "@deepkit/http";
import { Service } from "../app/service";
import * as fsPromise from "fs/promises";
import * as path from "path";

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

export class PublicControllerHttp {
  constructor(private service: Service) {}

  @http.OPTIONS("/.well-known/ai-plugin.json")
  options() {
    return new Response("", "text/plain");
  }

  @http.GET("/.well-known/ai-plugin.json")
  async aiPlugin() {
    const data = await fsPromise.readFile(
      `${__dirname}/ai-plugin.json`,
      "utf8"
    );

    // return as text/html
    return new Response(data, "text/json");
  }
}
