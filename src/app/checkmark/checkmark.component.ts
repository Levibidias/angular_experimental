import { Component,HostBinding,ElementRef,ViewChild, viewChild } from '@angular/core';
import { trigger, 
  state, 
  style, 
  animate, 
  transition 
  //...
} from '@angular/animations'


@Component({
  selector: 'app-checkmark',
  standalone: true,
  imports: [],
  templateUrl: './checkmark.component.html',
  styleUrl: './checkmark.component.css',
  animations: [
    trigger('checkmarkAnimation', [
      state('unchecked', 
      style({ 
        display:'none',
        opacity: 0
    })
      ),
      state('checked', 
      style({display: 'block', 
        transform: 'scale(1)',
        opacity:1 
      }
      )),
      transition('unchecked => checked', [animate('1s ease')]),
    ]),
  ],
})
export class CheckmarkComponent { 
  @ViewChild('monElementHtml') inputElement: ElementRef | undefined;
  isChecked = false;

  toggleCheckmark() {
    this.isChecked = !this.isChecked;
  }
}
