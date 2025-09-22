import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

registerSwiperElements();

// Configuración con hash routing
const configWithRouter = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes, withHashLocation()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }), // << Hash routing activado
  ],
};

bootstrapApplication(AppComponent, configWithRouter).catch((err) =>
  console.error(err),
);
