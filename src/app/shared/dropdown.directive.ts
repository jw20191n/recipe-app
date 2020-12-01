import { Directive, 
         HostListener, 
         HostBinding,
         ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    //listen to clicks and toggle some property that decides whether a class should be attached or not
    //open class is the css class that we need to attach
    constructor(private elRef: ElementRef) {}

    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

}