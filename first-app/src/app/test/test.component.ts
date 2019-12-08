import { Component } from '@angular/core';

@Component({
    selector : 'app-test',
    template : `<h1>{{testMessage}}</h1>`,
    styles : ['h1{color : green}']
})
export class TestComponent{
    testMessage : string = 'Test Message';
}