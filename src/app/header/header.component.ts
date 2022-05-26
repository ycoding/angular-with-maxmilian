import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() displayFlag = new EventEmitter<string>();

  onSelect(choice: string) {
    this.displayFlag.emit(choice);
    // console.log(e);
    // console.log(e.target);
    // var tag = (<HTMLAnchorElement>e.target).tagName.toLowerCase();

    // console.log(tag.toUpperCase());

  }
}
