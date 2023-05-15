import { HttpBody, http } from "@deepkit/http";
import * as fsPromise from "fs/promises";

export class MainControllerHttp {
  @http.GET("/hello/:name")
  helloWorld(name: string) {
    return { hello: name };
  }

  @http.GET("/file/read/:filePath")
  async readFile(filePath: string) {
    try {
      return await fsPromise.readFile(`${__dirname}/${filePath}`, "utf8");
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
      return await fsPromise.writeFile(
        `${__dirname}/${filePath}`,
        content,
        "utf8"
      );
    } catch (error: any) {
      return { error: error.message };
    }
  }

  @http.GET("/file/list/:dirPath")
  async listFiles(dirPath: string) {
    try {
      return await fsPromise.readdir(`${__dirname}/${dirPath}`);
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
