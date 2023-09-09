---
title: "Random - Angular Interview Questions"
date: "2023-05-15"
image: random-angular-image.jpg
excerpt: Random Angular framework interview questions which interviewer may or may not ask
pathName: secrets
---

## Random - Angular Interview Questions
#### 1. TypeScript and JavaScript difference ?
| Feature      | TypeScript | JavaScript |
| ----------- | ----------- | ---------- |
| Typing | Provides static typing|  Dynamically typed |
| Tooling | Comes with IDEs and code editors |Limited built-in tooling|
|Syntax|Similar to JavaScript, with additional features | Standard JavaScript syntax|
|Compatibility|Backward compatible with JavaScript| Cannot run TypeScript in JavaScript files|
|Debugging|Stronger typing can help identify errors|May require more debugging and testing|
|Learning curve|Can take time to learn additional features|Standard JavaScript syntax is familiar|


#### 2. Explain the execution cycle of an Angular application
Every Angular app consists of a file named angular.json. This file will contain all the configurations of the app. 
While building the app, the builder looks at this file to find the entry point of the application. 
Following is an image of the angular.json file:
```
"build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
        "outputPath": "dist/angular-starter",
        "index": "src/index.html",
        "main": "src/main.ts",
        "polyfills": "src/polyfills.ts",
        "tsConfig": "tsconfig.app.json",
        "aot": false,
        "assets": [
            "src/favicon.ico",
            "src/assets"
        ],
        "styles": [
            "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
            "src/style.css"
        ]
    }
}
```
Inside the build section, the main property of the options object defines the entry point of the application which in this case is main.ts.
The main.ts file creates a browser environment for the application to run, and, along with this, it also calls a function called bootstrapModule, which bootstraps the application. 
These two steps are performed in the following order inside the main.ts file:
```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule)
```
In the above line of code, ```AppModule``` is getting bootstrapped.
The ```AppModule``` is declared in the ```app.module.ts``` file.
This module contains declarations of all the components. Below is an example of ```app.module.ts``` file:
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    entryComponents: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
As one can see in the above file, ```AppComponent``` is getting bootstrapped.
This component is defined in ```app.component.ts``` file. This file interacts with the webpage and serves data to it.
Below is an example of ```app.component.ts``` file:
```
import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular';
}
```
Each component is declared with three properties:
● Selector - used for accessing the component
● Template/TemplateURL - contains HTML of the component
● StylesURL - contains component-specific stylesheets
After this, Angular calls the ```index.html``` file. This file consequently calls the root component that is app-root. 
The root component is defined in ```app.component.ts```. This is how the index.html file looks:
```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Angular</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <app-root></app-root>
    </body>
</html>
```
The HTML template of the root component is displayed inside the ```<app-root>``` tags.
This is how every angular application works.

#### 3. string interpolation 
one way data binding using {{ data }}

#### 4. What are pipes?
Pipes are functions that simplify the process of wiring up your JavaScript expressions and transforming them into their desired output. They can be compared to, say, string functions in other programming languages. 
Pipes also allow you to combine multiple expressions together, whether they're all values or some values and some declarations.
For example:
```var css = myTheme.color | "red" ;```
This line would assign a value to css , and it's equivalent to writing out the following code:
Pipes have several built-in functions that allow you to transform data, such as value and extract. We can also create our own custom pipes.
Pipes are data transformers that execute on an Angular Component's output.
They take in data and return transformed data. For example, if you have an expression such as ```number | 1000```, the number pipe will take data from the output and transform it into 1000. In Angular, there are many built-in pipes that you can use. You can also create your own custom pipes by implementing the PipeTransform interface in a class.
Pipes receive an input which can be a value expression, a function returning an expression, or even a component property., that outputs a number with a value of 1,000. With a pipe, you can transform this output into a formatted string of ```"1,000"``` or ```"1.000"```

![N|Create routes via your file + folder structure](pipes_in_Angular.png)

Example:
```
import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `{{ title | uppercase}}`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'this is an example of custom pies in angular';
}
```
Output:
THIS IS AN EXAMPLE OF CUSTOM PIPES IN ANGULAR


#### 6. What are directive ?
A directive is a class in Angular that is declared with a ```@Directive``` decorator.
Every directive has its own behaviour and can be imported into various components of an application.
When to use a directive?
Consider an application, where multiple components need to have similar functionalities. The norm thing to do is by adding this functionality individually to every component but, this task is tedious to perform. In such a situation, one can create a directive having the required functionality and then, import the directive to components which require this functionality.
Types of directives:
1. Component directives
These form the main class in directives. Instead of ```@Directive``` decorator we use ```@Component``` decorator to declare these directives. These directives have a view, a stylesheet and a selector property.
2. Structural directives
- These directives are generally used to manipulate DOM elements.
- Every structural directive has a ‘ * ’ sign before them.
- We can apply these directives to any DOM element.

Let’s see some built-in structural directives in action:
```
<div *ngIf="isReady" class="display_name">
    {{name}}
</div>
<div class="details" *ngFor="let x of details" >
    <p>{{x.name}}</p>
    <p> {{x.address}}</p>
    <p>{{x.age}}</p>
</div>
```
In the above example, we can ```*ngIf``` and ```*ngFor``` directives being used. ```*ngIf``` is used to check a boolean value and if it’s truthy,the div element will be displayed. ```*ngFor``` is used to iterate over a list and display each item of the list.
3. Attribute Directives
These directives are used to change the look and behaviour of a DOM element. Let’s understand attribute directives by creating one:
How to create a custom directive? 
We’re going to create an attribute directive:
In the command terminal, navigate to the directory of the angular app and type the following command to generate a directive: ng g directive blueBackground

The following directive will be generated. Manipulate the directive to look like this:
```
import { Directive, ElementRef } from '@angular/core';
@Directive({
    selector: '[appBlueBackground]'
})
export class BlueBackgroundDirective {
    constructor(el:ElementRef) {
        el.nativeElement.style.backgroundColor = "blue";
    }
}
```
Now we can apply the above directive to any DOM element: ```<p appBlueBackground>Hello World!</p>```

#### 7. What is dependency injection in Angular?
Dependency injection is an application design pattern which is implemented by Angular. It also forms one of the core concepts of Angular. So what is dependency injection in simple terms?
Let’s break it down, dependencies in angular are nothing but services which have functionality. The functionality of a service, can be needed by various components and directives in an application. Angular provides a smooth mechanism by which we can inject these dependencies into our components and directives. So basically, we are just making dependencies which are injectable across all components of an application.

![Create routes via your file + folder structure](Dependency_Injection.png)

Let’s understand how DI (Dependency Injection) works:
Consider the following service, which can be generated using: ```ng g service test```
```
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class TestService {
    importantValue:number = 42;
    constructor() { }
    returnImportantValue(){
        return this.importantValue;
    }
}
```
As one can notice, we can create injectable dependencies by adding the ```@Injectable``` decorator to a class.
We inject the above dependency inside the following component:
```
import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    value:number;
    constructor(private testService:TestService) { }
    ngOnInit() {
        this.value = this.testService.returnImportantValue();
    }
}
```
One can see we have imported our TestService at the top of the page. Then, we created an instance inside the constructor of the component and implemented the returnImportantValue function of the service. From the above example, we can observe how angular provides a smooth way to inject dependencies in any component.

#### 8. Routing, Modules - BrowserModule & Common Module, Component, Services

|   |  | |
| ----------- | ----------- | --------- |
| BrowserModule | @angular/platform-browser |To run your application in a browser. |
| CommonModule    | @angular/common | To use NgIf and NgFor |
|FormsModule |@angular/forms|To build template driven forms (includes NgModel).|
|ReactiveFormsModule |@angular/forms |To build reactive forms.|
|RouterModule |@angular/router|To use RouterLink, .forRoot(), and .forChild()|
|HttpClientModule |@angular/common/http|To communicate with a server using the HTTP protocol.|

#### 9.  Explain Components, Modules and Services in Angular
For better understanding, I would like you to create an Angular application by running the following inside the command terminal: ```ng new angularApp```
The above command will create an angular application in the directory. Next, let's move on to understand Components, Modules, and Services.
● Components
In Angular, components are the basic building blocks, which control a part of the UI for any application. A component is defined using the ```@Component``` decorator. Every component consists of three parts, the template which loads the view for the component, a stylesheet which defines the look and feel for the component, and a class that contains the business logic for the component.
For creating a component, inside the command terminal, navigate to the directory of the application created, and run the following command:
```ng generate component test``` Or ```ng g c test```
One can see the generated component inside src/app/test folder. The component will be defined inside test.component.ts and this is how it looks:
```
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export lass TestComponent implements OnInit {
    constructor() {}
        ngOnInit() {
    }
}
```
As we can see in the above image, our component is defined with ```@Component``` decorator.
● Modules
A module is a place where we can group components, directives, services, and pipes. Module decides whether the components, directives, etc can be used by other modules, by exporting or hiding these elements. Every module is defined with a ```@NgModule``` decorator.
By default, modules are of two types:
● Root Module
● Feature Module
Every application can have only one root module whereas, it can have one or more feature modules. A root module imports BrowserModule, whereas a feature module imports CommonModule.
In the application that we created before, one can see that the root module is defined inside app.module.ts and this is how it looks:
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/text.component';
@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
We can see in the above image that the component we created earlier is already imported in the declarations array.
To create a feature module, run the following command: ```ng g m test-module```
The module is created inside the ```src/app/test-module/test-module.module.ts``` file:
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class TestModuleModule { }
```
As one can see, CommonModule is imported since this is a feature module.
● Services
Services are objects which get instantiated only once during the lifetime of an application. The main objective of a service is to share data, functions with different components of an Angular application. A service is defined using a @Injectable decorator. A function defined inside a service can be invoked from any component or directive.
To create a service, run the following command: ```ng g s test-service``` The service will be created inside ```src/app/test-service.service.ts```:
```
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class TestServiceService {
    constructor() { }
}
```
Any method/function defined inside the TestServiceService class can be directly used inside any component by just importing the service

#### 10. How do we share data between components in angular?
A common pattern in Angular is sharing data between a parent component and one or more child components. Implement this pattern with the @Input() and @Output() decorators.
Consider the following hierarchy:
content_copy
```
<parent-component>
    <child-component></child-component>
</parent-component>
```
The ```<parent-component>``` serves as the context for the ```<child-component>```. ```@Input()``` and ```@Output()``` give a child component a way to communicate with its parent component. ```@Input()``` lets a parent component update data in the child component. Conversely, ```@Output()``` lets the child send data to a parent component.

#### 11. Angular lifecycle, hooks, template-driven form, reactive forms,
Every component in Angular has a lifecycle, and different phases it goes through from the time of creation to the time it's destroyed. Angular provides hooks to tap into these phases and trigger changes at specific phases in a lifecycle.

![Create routes via your file + folder structure](lifecycle_hooks_in_Angular.png)

● ngOnChanges( ) This hook/method is called before ngOnInit and whenever one or more input properties of the component change. This method/hook receives a SimpleChanges object which contains the previous and current values of the property.
● ngOnInit( ) This hook gets called once, after the ngOnChanges hook. It initializes the component and sets the input properties of the component.
● ngDoCheck( ) It gets called after ngOnChanges and ngOnInit and is used to detect and act on changes that cannot be detected by Angular. We can implement our change detection algorithm in this hook. ngAfterContentInit( ) It gets called after the first ngDoCheck hook. This hook responds after the content gets projected inside the component.
● ngAfterContentChecked( ) It gets called after ngAfterContentInit and every subsequent ngDoCheck. It responds after the projected content is checked.
● ngAfterViewInit( ) It responds after a component's view, or a child component's view is initialized.
● ngAfterViewChecked( ) It gets called after ngAfterViewInit, and it responds after the component's view, or the child component's view is checked.
● ngOnDestroy( ) It gets called just before Angular destroys the component. This hook can be used to clean up the code and detach event handlers.
##### template-driven
To enable template-driven forms, i.e. to make ```ngModel``` and other form-related directives available for use in our project, we have to import them explicitly to our ```AppModule```
##### Reactive Forms
Let's have a look at the other approach now - Reactive Forms, which are also known as model-driven forms. In this approach, we design our forms in the component (Typescript code) and then bind them or relate them to our HTML template. They need the ```ReactiveFormsModule``` imported in ```app.module.ts```. So this is how our AppModule would look like for a reactive form.

#### 12. HTTP methods - difference
GET, POST, PUT, DELETE

#### 13. Cors
The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. 
CORS for any unknown routes 
```
const cors = require(cors) 
app.use(cors())
```
CORS for a specified route 
```
let corsOptions = { origin : ['http://localhost:5500'], }
app.use(cors(corsOptions))
```
JavaScript - arrays, map, forEach, arrow function/anonymous function Subscribe/Unsubscribe

#### 14. Use of Router-outlet in angular
Router-outlet in angular acts as a placeholder that let the user to load the components dynamically based on the current route state. The router outlet selector enables as soon as you enable routing in your application i.e., you need to ```import 'Router Module' in 'App Module'```

#### 15. AOT vs JIT
|JIT|AOT|
|-----|-----|
|JIT downloads the compiler and compiles code exactly before Displaying in the browser.| AOT has already complied with the code while building your application, so it doesn’t have to compile at runtime.|
|Loading in JIT is slower than the AOT because it needs to compile your application at runtime. |AOT is much suitable in the case of Production mode.|
|Bundle size is higher compare to AOT. |Bundle size optimized in AOT, in results AOT bundle size is half the size of JIT bundles.|
|You can run your app in JIT with this command: ```ng build``` OR ``` ng serve```|To run your app in AOT you have to provide –aot at the end like: ```ng build --aot``` OR ```ng serve --aot```|
|You can catch template bindingerror at display time. |You can catch the template error at building your application|

#### 15. Diff between jquery and js
|JavaScript| JQuery|
|---|----|
|JavaScript is a language, obviously, it would be heavier than JQuery. |While JQuery is a library, derived from JavaScript hence, it is lightweight. |
|JavaScript is an independent language and can exist on its own|JQuery is a JavaScript library. It would not have been invented had JavaScript was not there. jQuery is still dependent on JavaScript as it has to be converted to JavaScript for the browser in-built JavaScript engine to interpret and run it.|
|JavaScript is a programming language.|jQuery is an Application Programming Interface (API).|
|There are no special symbols to define JavaScript like JQuery| There are special symbols to define JQuery. |
|The disadvantage of JavaScript is that it is not easy to use it.|The advantage of JQuery is the ease in which one can use JQuery.|


#### 16. pseudo-classes
A pseudo-class is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer. They tend to act as if you had applied a class to some part of your document, often helping you cut down on excess classes in your markup, and giving you more flexible, maintainable code.
Pseudo-classes are keywords that start with a colon. For example, :hover is a pseudo-class.

#### 17. CSS display properties - flex, block, inline, inline-flex

● Inline: Just as the name suggests, inline displays an element in the same line as the rest. Specifying any height and width properties will be of no use, as it follows the height and width of the line, of which it is a part.
● Block: Displays an element as a block element. It starts on a new line and takes up take up as much horizontal space as it can. Block-level elements do not appear in the same line but break the existing line and appear in the next line.
● Flexbox is a one-dimensional layout system that we can use to create a row or a column axis layout. It makes our life easier to design and build responsive web pages without having to use tricky hacks and a lot of float and position properties in our CSS code.

#### 18. Which module is used for reactive forms to work?
```FormBuilder```, ```FormControl```, ```FormGroup```, ```FormArray```

#### 19. async/await
Async/Await makes it easier to write promises. The keyword 'async' before a function makes the function return a promise, always. And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.

#### 20. Angular Observables vs Promises
The first difference is that an Observable is lazy whereas a Promise is eager.
|Promise|Observable|
|---|----|
|Emits a single value |Emits multiple values over a period of time|
|Not Lazy|Lazy. An observable is not called until we subscribe to the observable|
|Cannot be cancelled|Can be cancelled by using the unsubscribe() method|
||Observable provides operators like map, forEach, filter, reduce, retry, retryWhen etc|

Consider the following Observable:
```
const observable = rxjs.Observable.create(observer => {
    console.log('Text inside an observable');
    observer.next('Hello world!');
    observer.complete();
});

console.log('Before subscribing an Observable');
observable.subscribe((message)=> console.log(message));
```
When you run the above Observable, you can see messages being displayed in the following order:
```
Before subscribing an Observable 
Text inside an observable 
Hello world!
```
As you can see, observables are lazy. Observable runs only when someone subscribes to them hence, the message “Before subscribing…” is displayed ahead of the message inside the observable.
Now let’s consider a Promise:
```
const promise = new Promise((resolve, reject) => {
    console.log('Text inside promise');
    resolve('Hello world!');
});
console.log('Before calling then method on Promise');
greetingPoster.then(message => console.log(message));
```
Running the above promise, the messages will be displayed in the following order:
```
Text inside promise
Before calling then method on Promise
Hello world!
```
As you can see the message inside Promise is displayed first. This means that a promise runs before the then method is called. Therefore, promises are eager. The next difference is that Promises are always asynchronous. Even when the promise is immediately resolved. Whereas an Observable, can be both synchronous and asynchronous.
The above example of an observable is the case to show that an observable is synchronous. Let’s see the case where an observable can be asynchronous:
```
const observable = rxjs.Observable.create(observer => {
    setTimeout(()=>{
        observer.next('Hello world');
        observer.complete();
        },3000)
    });
console.log('Before calling subscribe on an Observable');
observable.subscribe((data)=> console.log(data));
console.log('After calling subscribe on an Observable');
```
The messages will be displayed in the following order:
```
Before calling subscribe on an Observable
After calling subscribe on an Observable
Hello world!
```
You can see in this case, observable runs asynchronously.
The next difference is that Observables can emit multiple values whereas Promises can emit only one value. 
The biggest feature of using observables is the use of operators. 
We can use multiple operators on an observable whereas, there is no such feature in a promise

#### 21. Auth guard
are use to guard routes

#### 22. RxJs
RxJS is an acronym that stands for Reactive Extensions for JavaScript. It is used to enable the use of observables in our JavaScript project, allowing us to do reactive programming. RxJS is utilized in many popular frameworks, including Angular since it allows us to compose our asynchronous or callback-based code into a sequence of operations executed on a data stream that releases values from a publisher to a subscriber. Other programming languages, such as Java and Python, offer packages that allow them to develop reactive programs utilizing observables.
Most of the time, rxJs is used in HTTP calls with angular. Because http streams are asynchronous data, we can subscribe to them and apply filters to them.
Example: The following is a simple example of how RxJs can be utilized with HTTP calls.
```
let stream1 = httpc.get("https://www.example.com/somedata");
let stream2 = stream1.pipe(filter(x=>x>3));
stream2.subscribe(res=>
    this.Success(res),
    res=>this.Error(res)
);
```

#### 23. Benefits of CDN vs js file
By using a CDN, you can leverage the cached copies of your JavaScript libraries on the nearest server, and avoid the overhead of downloading them from your own server or a third-party source. 
This can improve your website's performance, user experience, and SEO ranking.

#### 24. Code question: Show example of FormArray - create formarray and display in html
The ```FormArray``` is a way to manage the collection of Form Controls in Angular. The controls can be a ```FormGroup```, ```FormControl```, or another ```FormArray```.
We can group Form Controls in Angular forms in two ways. One is using the ```FormGroup``` and the other one is ```FormArray```. The difference is how they implement it. In FormGroup controls becomes a property of the ```FormGroup```. Each control is represented as key-value pair. While in ```FormArray```, the controls become part of an array Because it is implemented as an Array, it makes it easier dynamically add controls.

```app.component.ts```
```
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'FormArray Example in Angular Reactive forms';
    skillsForm: FormGroup;
    constructor(private fb:FormBuilder) {
        this.skillsForm = this.fb.group({
            name: '',
            skills: this.fb.array([]) ,
        });
    }
    get skills() : FormArray {
        return this.skillsForm.get("skills") as FormArray
    }
    newSkill(): FormGroup {
        return this.fb.group({
            skill: '',
            exp: '',
        })
    }
    
    addSkills() {
        this.skills.push(this.newSkill());
    }
    removeSkill(i:number) {
        this.skills.removeAt(i);
    }
    onSubmit() {
        console.log(this.skillsForm.value);
    }
}

export class country {
    id: string;
    name: string;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
```
```app.component.html```
```
<form [formGroup]="skillsForm" (ngSubmit)="onSubmit()">
    <p>
        <label for="name">Name </label>
        <input type="text" id="name" name="name" formControlName="name">
    </p>
    Skills:
    <div formArrayName="skills">
        <div *ngFor="let skill of skills().controls; let i=index">
            <div [formGroupName]="i">
                {{i}}
                skill name :
                <input type="text" formControlName="skill">
                exp:
                <input type="text" formControlName="exp">
                <button (click)="removeSkill(i)">Remove</button>
            </div>
        </div>
    </div>
    <p>
        <button type="submit">Submit</button>
    </p>
</form>
<p>
    <button type="button" (click)="addSkills()">Add</button>
</p>

{{this.skillsForm.value | json}}
```
