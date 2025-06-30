import { ApplicationConfig, inject, InjectionToken, Injector, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SimpleAwesomeComponent } from './simple-awesome/simple-awesome.component';
import { LikeButtonComponent } from './like-button/like-button.component';

export const REGISTER_ELEMENTS = new InjectionToken('register-elements');


export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideAnimations(),
  ]
};
