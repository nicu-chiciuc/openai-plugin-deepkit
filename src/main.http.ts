import { HttpBody, HttpRegExp, http } from "@deepkit/http";
import * as fsPromise from "fs/promises";

export class MainControllerHttp {
  @http.GET("/file/read/:filePath")
  async readFile(filePath: HttpRegExp<string, ".*">) {
    try {
      return await fsPromise.readFile(`${filePath}`, "utf8");
    } catch (error: any) {
      return { error: error.message };
    }
  }

  @http.POST("/file/write/:filePath")
  async writeFile(
    filePath: string,
    { content }: HttpBody<{ content: string }>
  ) {
    try {
      return await fsPromise.writeFile(`${filePath}`, content, "utf8");
    } catch (error: any) {
      return { error: error.message };
    }
  }

  @http.GET("/file/list/:dirPath")
  async listFiles(dirPath: string) {
    try {
      return await fsPromise.readdir(`${dirPath}`);
    } catch (error: any) {
      return { error: error.message };
    }
  }

  @http.GET("/file/list")
  async listCurrentFiles() {
    try {
      return await fsPromise.readdir(".");
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
