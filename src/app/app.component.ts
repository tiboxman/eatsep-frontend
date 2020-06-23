import { Component } from '@angular/core';
import { FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = [{tilte: 'recherche' , icon: 'search', link: './search' }, {tilte: 'profile' , icon: 'person', link: './profile' }, {tilte: 'chef' , icon: 'restaurant', link: './cook' }];
  selected = new FormControl(0);
  scrollTop(event) {
      window.scroll(0,0);
  }

}
