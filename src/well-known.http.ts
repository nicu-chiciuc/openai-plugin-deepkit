import { HttpBody, http, Response } from "@deepkit/http";
import * as fsPromise from "fs/promises";

import { aiPluginTemplate } from "./ai-plugin.template";
import { AppConfig } from "../app";

export class WellKnownControllerHttp {
  constructor(private config: AppConfig) {}

  @http.OPTIONS("/.well-known/ai-plugin.json")
  options() {
    return new Response("", "text/plain");
  }

  @http.GET(".well-known/ai-plugin.json")
  async getAiPluginJson() {
    const aiPlugin = aiPluginTemplate(this.config.publicUrl);

    return new Response(JSON.stringify(aiPlugin), "text/json");
  }
}
