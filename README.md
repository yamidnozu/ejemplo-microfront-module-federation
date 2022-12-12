# Workspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Comandos usados
ng new workspace --create-application=false
cd workspace

ng g application host --style=scss --routing=true
ng g application mfsimulador --style=scss --routing=true

---- host ----
ng g c home --project=host
ng s home -o

---- mf ----
ng g m simulador --project=mfsimulador --routing
ng g c simulador --project=mfsimulador 
ng g c default --project=mfsimulador
ng s mfsimulador -o


----- configuracion webpack module federation -----
  
ng add @angular-architects/module-federation --project host --port 5000
ng add @angular-architects/module-federation --project mf --port 4242
