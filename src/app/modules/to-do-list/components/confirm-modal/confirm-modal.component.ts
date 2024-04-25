import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class ConfirmModalComponent {
  @Input() isOpen: boolean = false;
  @Input() confirmationMessage: string = '';
  @Output() confirmAction: EventEmitter<void> = new EventEmitter<void>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  confirm() {
    this.confirmAction.emit();
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
