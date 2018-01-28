import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
/*import { home } from './components/home/home';*/
import { EllenCatch } from './EllenCatch';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, JsonpModule],
    declarations: [EllenCatch],
    bootstrap: [EllenCatch]
})

export class AppModule { }