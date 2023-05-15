import { HttpBody, HttpRegExp, http } from "@deepkit/http";
import * as fsPromise from "fs/promises";

export class MainControllerHttp {
  @http.GET("/file/read/*")
  async readFile(filePath: HttpRegExp<string, ".*">) {
    return fsPromise.readFile(`${filePath}`, "utf8");
  }

  @http.POST("/file/write/*")
  async writeFile(
    filePath: HttpRegExp<string, ".*">,
    { content }: HttpBody<{ content: string }>
  ) {
    return fsPromise.writeFile(`${filePath}`, content, "utf8");
  }

  @http.GET("/file/list/*")
  async listFiles(dirPath: HttpRegExp<string, ".*">) {
    return fsPromise.readdir(`${dirPath}`);
  }
}
