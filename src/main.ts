import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { LikeButtonComponent } from './like-button/like-button.component';
import { appConfig } from './app.config';
import { SimpleAwesomeComponent } from './simple-awesome/simple-awesome.component';
import { InjectionToken, Injector } from '@angular/core';
import { inject } from '@angular/core';
import { GiveItAwayComponent } from './give-it-away/give-it-away.component';

createApplication(appConfig)
    .then((app) => {
        const SimpleAwesome = createCustomElement(SimpleAwesomeComponent, { injector: app.injector });
        customElements.define('simple-awesome', SimpleAwesome);
        const LikeButton = createCustomElement(LikeButtonComponent, { injector: app.injector });
        customElements.define('like-button', LikeButton);
        const GiveItAway = createCustomElement(GiveItAwayComponent, { injector: app.injector });
        customElements.define('give-it-away', GiveItAway);
    })
    .catch((err) => console.error(err));