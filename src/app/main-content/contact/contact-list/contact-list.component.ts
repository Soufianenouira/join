import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {


  constructor(public contactService: ContactService){
    
  }

  selectedIndex: number | null = null;
  selectItem(index: number) {
    this.selectedIndex = index;
  }

  addContact(){
    
      let contact = {
        'id': 'string',
        'name': 'String',
        'email': 'string',
        'phone': 'string'
      }
      this.contactService.addContact(contact);
  }

  openOverlay(){
    
  }
}
