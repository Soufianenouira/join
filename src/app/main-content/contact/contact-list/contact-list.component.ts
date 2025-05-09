import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../../services/contact.service';
import { OverlayService } from '../../../services/overlay.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  constructor(
    public contactService: ContactService,
    private overlayService: OverlayService
  ) {}

    @Output() singleContactTransform = new EventEmitter<string>()
  setOverlayButtonsFromList(leftButton:string, rightButton: string) {
    this.overlayService.setOverlayButtons(leftButton, rightButton)    
    this.overlayService.openOverlay('add-contact');
  }

  toggleSingleContact(){
    this.singleContactTransform.emit('translateX(0%)')
  }
}
