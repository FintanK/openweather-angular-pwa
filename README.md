# OpenWeather Angular PWA

This Angular 7 project was created to showcase the core concepts of the Angular framework along with progressive web app
capabilities.

It also produces are reusable NPM module along with NPM scripts for publishing that can be installed and imported into
any other Angular project with minimal dependencies.

- Components (Data Binding)
- Services (Geolocation, OpenWeather API)
- Resolvers
- Interceptors
- Pipes
- Service Workers
- Unit Tests
- Protractor E2E Testing with Cucumber and out of the box steps.

## Dependencies

The only dependency for this project is Node.js (with NPM).

I used v10.5.0 for this project. Earlier versions may be fine.

All other node modules for the NPM scripts in this project point 
at the binaries under node_modules

I am running binaries locally within the project, as such I require 
files path references to use the format for my operating system. In this case, Windows.

If you are not using Windows you will need to run the following steps..


## Setting up your development environment

### Operating systems other than Windows (Optional)

Run these commands in the root directory of your project via the CLI.

```
npm i -g @angular/cli@latest
npm install
ng build ngx-openweather
ng serve
```

### Windows Operating Systems

Simply run this command in the root directory of this project via the CLI.

```
npm start
```

### Accessing the application via your browser

Once the project dependencies have been installed, the project built and
the development server spun up, you will be able to access the application
at 

http://localhost:4200


## Unit Tests

```
npm test
```


## E2E Integration / Behavioural Tests

```
npm run e2e
```

## Documentation

#### Compodoc documentation

```cmd
npm run compodoc
```

[Click here to open the Compodoc html file for the documentation in this project](./documentation/index.html)

#### Istanbul code coverage reporting.

```cmd
npm run compodoc
```

[Click here to view the Istanbul html file for the code coverage in this project](./coverage/index.html)


#### Cucumber HTML Reports

Run the following command with your application running on http://localhost:4200

```cmd
npm run e2e 
```

[Code coverage for this project](./reports/report/index.html)


##
