import { App } from "@deepkit/app";
import { FrameworkModule } from "@deepkit/framework";
import { Logger, JSONTransport } from "@deepkit/logger";

import { MainControllerHttp } from "./src/main.http";
// import { CorsMiddleware } from "./src/cors.middleware";
import { OpenAPIModule } from "./local_packages/deepkit-openapi/module";
import { httpMiddleware } from "@deepkit/http";

export class AppConfig {
  environment: "production" | "development" = "development";
}

new App({
  config: AppConfig,
  middlewares: [],
  controllers: [MainControllerHttp],
  providers: [],
  imports: [
    new OpenAPIModule(),
    new FrameworkModule({
      debug: true,

      // This is the default value for the publicDir option
      publicDir: "publicDir",
    }),
  ],
})
  .loadConfigFromEnv({ envFilePath: ["production.env", ".env"] })
  .setup((module, config: AppConfig) => {
    if (config.environment === "production") {
      //enable logging JSON messages instead of formatted strings
      module.setupGlobalProvider<Logger>().setTransport([new JSONTransport()]);

      //disable debugging
      module
        .getImportedModuleByClass(FrameworkModule)
        .configure({ debug: false });
    }
  })

  .run();
