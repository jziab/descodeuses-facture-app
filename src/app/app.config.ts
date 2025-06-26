import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { provideHttpClient } from '@angular/common/http';
import { ApiFactureService } from './service/api.facture.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(ApiFactureService,{delay:200})
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
