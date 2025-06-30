# AngularWebComponents

This repository provides reusable Angular components packaged as Web Components (Custom Elements). These components can be easily integrated into any web project—regardless of the framework or technology stack—by simply including the generated JavaScript files and using the custom HTML tags.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0-rc.1. updated to version 19.2.14

## Development server

To start a local development server ( on port 4212), run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Build Scripts Explained

In addition to the default build command, this project provides the following npm scripts for building the project with different output options:

### `npm run build:prod`

- **Command:** `ng build --configuration production --output-hashing=none`
- **Description:** Builds the project in production mode, but disables output hashing. This means the output files will not include a content hash in their filenames. Use this if you want predictable filenames (e.g., `main.js`), but be aware that this can cause browser caching issues if you deploy new versions without changing the filename.

### `npm run build-hash`

- **Command:** `ng build --output-hashing=none`
- **Description:** Builds the project in development mode (default configuration), also without output hashing. Like the above, this produces output files with predictable names, but is not optimized for production.

> **Note:**
> By default, the production build (triggered by `ng build` or `npm run build`) uses output hashing as configured in `angular.json` and `custom-webpack.config.js`. This results in filenames like `main.0.0.1-<hash>.js`, which are recommended for production deployments to avoid caching issues and ensure users always get the latest version.

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Using as Web Components

This project builds Angular components as reusable [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) (Custom Elements) that can be used in any web application, regardless of framework.

### How Web Components Are Registered

The registration of web components happens in [`src/main.ts`](src/main.ts):

```ts
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
// ...component imports...

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
```

Each Angular component is wrapped as a custom element and registered with a tag name (e.g., `<like-button>`, `<simple-awesome>`, `<give-it-away>`). When the output JS file is loaded, these custom elements become available globally in the browser.

### Output JS File Versioning and Hash

The build output (in `dist/angular-like-button/`) includes files like:

- `main.0.0.1-<hash>.js`
- `runtime.0.0.1-<hash>.js`

The filename includes the project version (from `package.json`) and a content hash. This is configured in [`custom-webpack.config.js`](custom-webpack.config.js):

```js
config.output.filename = `[name].${appVersion}-[contenthash].js`;
```

**Why is the hash required?**
- The hash ensures that browsers always load the latest version after a new build, avoiding caching issues.
- It allows multiple versions to coexist if needed.

### Using the Web Components in Other Projects

To use these web components in another project (any HTML/JS project):

1. **Copy the output files** from `dist/angular-like-button/` (at least `main.0.0.1-<hash>.js` and `runtime.0.0.1-<hash>.js`).
2. **Include them in your HTML**:

```html
<script src="runtime.0.0.1-<hash>.js" type="module"></script>
<script src="main.0.0.1-<hash>.js" type="module"></script>
```

3. **Use the custom elements** in your HTML:

```html
<like-button size="100px"></like-button>
<simple-awesome></simple-awesome>
<give-it-away></give-it-away>
```

Once the scripts are loaded, the custom elements are available and can be used like any standard HTML element. You can listen to their custom events and set their attributes as documented in their respective Angular components.
