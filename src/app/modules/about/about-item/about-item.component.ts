import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.css']
})
export class AboutItemComponent {
  @Input() public title: string = "";
  @Input() public description: string= "";
  @Input() public isActive: boolean= false;

  @Output() public activeChange = new EventEmitter<void>();

  toggleActive() {
    this.activeChange.emit();
  }
}
