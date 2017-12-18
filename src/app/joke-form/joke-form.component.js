"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var joke_1 = require("../joke");
var JokeFormComponent = (function () {
    function JokeFormComponent() {
        this.jokeCreated = new core_1.EventEmitter();
    }
    JokeFormComponent.prototype.ngOnInit = function () {
    };
    JokeFormComponent.prototype.createJoke = function (setup, punchline) {
        this.jokeCreated.emit(new joke_1.Joke(setup, punchline));
    };
    return JokeFormComponent;
}());
__decorate([
    core_1.Output()
], JokeFormComponent.prototype, "jokeCreated", void 0);
JokeFormComponent = __decorate([
    core_1.Component({
        selector: 'joke-form',
        templateUrl: './joke-form.component.html',
        styleUrls: ['./joke-form.component.css']
    })
], JokeFormComponent);
exports.JokeFormComponent = JokeFormComponent;
