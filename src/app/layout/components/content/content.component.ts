import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector     : 'content',
    templateUrl  : './content.component.html',
    styleUrls    : ['./content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit
{
    /**
     * Constructor
     */
    constructor()
    {
    }

    ngOnInit() {
        console.log('Hello')
    }
}
