// src/app/app.config.server.ts
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // your normal app.config.ts

export const serverConfig: ApplicationConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideServerRendering()
  ]
};
