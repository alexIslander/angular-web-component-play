import { booleanAttribute, Component, input, linkedSignal, output } from '@angular/core';

@Component({
    selector: 'app-like-button',
    template: `
        <button (click)="toggleLike()">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path
                        d="M24,44.9l-17.7-17.7c-4.3-4.3-4.3-11.3,0-15.6c2.1-2.1,4.9-3.3,7.9-3.3c3,0,5.8,1.2,7.9,3.3L24,13.5l1.9-1.9 c2.1-2.1,4.9-3.3,7.9-3.3c3,0,5.8,1.2,7.9,3.3c4.3,4.3,4.3,11.3,0,15.6L24,44.9z"
                        fill="none"
                        stroke="#E57373"
                        stroke-width="5"/>
                <path
                        d="M24,44.9l-17.7-17.7c-4.3-4.3-4.3-11.3,0-15.6c2.1-2.1,4.9-3.3,7.9-3.3c3,0,5.8,1.2,7.9,3.3L24,13.5l1.9-1.9 c2.1-2.1,4.9-3.3,7.9-3.3c3,0,5.8,1.2,7.9,3.3c4.3,4.3,4.3,11.3,0,15.6L24,44.9z"
                        [attr.fill]="_liked() ? '#E57373' : 'transparent'"/>
            </svg>
        </button>
    `,
    styles: `
      button {
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 5px;
        width: 100%;
        height: 100%;

        &:hover {
          background-color: #e573732e;
          border-radius: 50%;
        }
      }

      svg {
        width: 100%;
        height: 100%;
      }
    `
})
export class LikeButtonComponent {
    liked = input(false, { transform: booleanAttribute });
    _liked = linkedSignal(() => this.liked());
    
    likedChange = output<boolean>({ alias: 'likedchange' });
    
    toggleLike() {
        this._liked.update(value => !value);
        this.likedChange.emit(this._liked());
    }
}
