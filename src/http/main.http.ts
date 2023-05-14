import { HttpBody, http } from "@deepkit/http";
import { Service } from "../app/service";
import * as fsPromise from "fs/promises";

export class MainControllerHttp {
  constructor(private service: Service) {}

  @http.GET("/file/read/:filePath")
  async hello(filePath: string) {
    return fsPromise.readFile(`${__dirname}/${filePath}`, "utf8");
  }

  @http.POST("/file/write/:filePath")
  async write(filePath: string, body: HttpBody<string>) {
    return fsPromise.writeFile(`${__dirname}/${filePath}`, body, "utf8");
  }
}
