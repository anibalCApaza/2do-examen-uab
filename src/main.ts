import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();

// Configuración con hash routing
const configWithRouter = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes, withHashLocation()), // << Hash routing activado
  ],
};

bootstrapApplication(AppComponent, configWithRouter).catch((err) =>
  console.error(err),
);
