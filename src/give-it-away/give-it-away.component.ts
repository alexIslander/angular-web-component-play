import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-give-it-away',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './give-it-away.component.html',
  styleUrl: './give-it-away.component.scss'
})
export class GiveItAwayComponent implements OnInit {
  @Input() gift: any;
  @Output() wrapped = new EventEmitter<any>();

  giftSent = false;
  private initialGift: any;

  ngOnInit() {
    this.initialGift = this.gift;
  }

  wrapGift() {
    const wrappedGift = {
      content: this.gift,
      wrappedAt: new Date(),
      wrapperStyle: '🎁'
    };
    this.wrapped.emit(wrappedGift);
    this.giftSent = true;
  }

  resetGift() {
    this.gift = this.initialGift;
    this.giftSent = false;
  }
}
