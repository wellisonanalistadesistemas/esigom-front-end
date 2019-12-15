## --#-- Criar Branch Local (sempre que for desenvolver algo novo) --#-- 

1. Acessar Issue -> Nova Issue
2. Created Merge Request - relacionando branch master
3. Atualizar Branchs Local "git remote update origin --prune"
4. Em localhost, apontar para a nova branch criada <git checkout nomeBranch>.

## --#-- Procedimento de Juntada Branch Local x Branch Master --#-- 

1. Atualizar branch local, considerando Alterações da Master "git pull origin master"
2. Realizar commit da branch local "git push origin ...."
3. Acessar "Repositório" -> "Branches" -> [Comparar] -> [Criar Merge Request] -> [Submit] -> [Merge].

## --#-- Procedimento para Publicação de Versão em Ambiente de Desenvolvimento --#-- 
1. Acessar CDI/CD -> Pipelines
2. Escolher Commit desejável, para geração do Build;
3. No Status de "Passou", realizar Deploy em ambiente DEV.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
