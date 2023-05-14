import { MaxLength } from "@deepkit/type";
import { http } from "@deepkit/http";
import { Service } from "../app/service";
import * as fsPromise from "fs/promises";

export class TestControllerHttp {
  constructor(private service: Service) {}

  @http.GET("/test/read/:name")
  async hello(name: string & MaxLength<6> = "World") {
    const path = `./${name}`;

    fsPromise.readFile(path, "utf8");
  }
}
