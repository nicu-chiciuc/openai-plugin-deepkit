import { App } from "@deepkit/app";
import { FrameworkModule } from "@deepkit/framework";
import { Logger, JSONTransport } from "@deepkit/logger";

import { MainControllerHttp } from "./src/main.http";
import { WellKnownControllerHttp } from "./src/well-known.http";
import { OpenAPIModule } from "./local_packages/deepkit-openapi/module";
import { httpMiddleware } from "@deepkit/http";

export class AppConfig {
  // Will read from `APP_ENVIRONMENT` environment variable
  environment: "production" | "development" = "development";

  // Will read from `APP_PUBLIC_URL` environment variable
  publicUrl: string = "http://localhost:8080";
}

new App({
  config: AppConfig,
  middlewares: [],
  controllers: [WellKnownControllerHttp, MainControllerHttp],
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
