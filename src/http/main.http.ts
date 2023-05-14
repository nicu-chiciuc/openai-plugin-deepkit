import { HttpBody, http } from "@deepkit/http";
import { Service } from "../app/service";
import * as fsPromise from "fs/promises";

export class MainControllerHttp {
  constructor(private service: Service) {}

  @http.GET("/file/read/:filePath")
  async readFile(filePath: string) {
    return fsPromise.readFile(`${__dirname}/${filePath}`, "utf8");
  }

  @http.POST("/file/write/:filePath")
  async writeFile(filePath: string, { content }: HttpBody<{ content: string }>) {
    return fsPromise.writeFile(`${__dirname}/${filePath}`, content, "utf8");
  }
}
