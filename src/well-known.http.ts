import { HttpBody, http, Response } from "@deepkit/http";
import * as fsPromise from "fs/promises";

import { aiPluginTemplate } from "./ai-plugin.template";

export class WellKnownControllerHttp {
  @http.OPTIONS("/.well-known/ai-plugin.json")
  options() {
    return new Response("", "text/plain");
  }

  @http.GET(".well-known/ai-plugin.json")
  async getAiPluginJson() {
    const aiPlugin = aiPluginTemplate("https://234eccd88ba4.ngrok.app");

    return new Response(JSON.stringify(aiPlugin), "text/json");
  }
}
