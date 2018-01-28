import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import "rxjs/add/operator/map";
import { Headers } from "@angular/http";


@Component({
    selector: "min-app",
    templateUrl: "./app/home/homeView.html"
})

export class home {

    showWelcomeMsg: boolean;
    showCarousel: boolean;

    constructor() {

    }


    ngOnInit() {
        this.showWelcomeMsg = true;
        this.showCarousel = true;
    }
    

}