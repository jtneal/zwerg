import { Component } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-header',
  styles: `
    ////////////////////////////////////////////////////////////////////////////
    // MOBILE
    ////////////////////////////////////////////////////////////////////////////

    header {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0.25rem 1rem #000;
      height: 56px;
      padding: 0.5rem;
      position: fixed;
      text-align: right;
      width: 100%;
      z-index: 100;
    }

    .logo {
      left: 0.5rem;
      position: absolute;
      top: 0.5rem;

      img {
        height: 40px;
      }
    }

    i {
      cursor: pointer;
      position: absolute;
      right: 1rem;
      top: 0.2rem;
    }

    nav {
      background-color: rgba(0, 0, 0, 0.5);
      height: 100vh;
      padding: 1rem;
      position: fixed;
      right: -320px;
      top: 4rem;
      transition: all 500ms ease-out;
      width: 320px;

      &.show-nav {
        box-shadow: -0.25rem 0 1rem #000;
        right: 0;
      }

      a {
        margin-bottom: 1rem;
        width: 100%;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // TABLET
    ////////////////////////////////////////////////////////////////////////////

    @media (min-width: 768px) {
      header {
        height: 72px;
      }

      .logo {
        img {
          height: calc(56px);
        }
      }

      i {
        display: none;
      }

      nav {
        background-color: initial;
        display: flex;
        height: initial;
        justify-content: right;
        padding: 0.5rem 0;
        position: initial;
        right: initial;
        top: initial;
        width: initial;

        a {
          margin: 0 0.5rem;
          width: initial;
        }
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    // DESKTOP
    ////////////////////////////////////////////////////////////////////////////

    @media (min-width: 860px) {
      nav {
        justify-content: center;
      }
    }
  `,
  template: `
    <header>
      <a class="logo" href="#top">
        <img alt="iiizwerg white polar bear logo" src="/assets/images/iiizwerg-polar-bear-white.png" />
      </a>
      @if (showNav) {
      <i class="bi bi-x" (click)="hideNavigation()"></i>
      } @else {
      <i class="bi bi-list" (click)="showNavigation()"></i>
      }
      <nav [class.show-nav]="showNav">
        @for (link of service.links; let i = $index; track i) {
        <a class="btn btn-primary" (click)="hideNavigation()" [href]="link.link">{{ link.name }}</a>
        }
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  public showNav = false;

  public constructor(public readonly service: LinkService) {}

  public hideNavigation(): void {
    this.showNav = false;
  }

  public showNavigation(): void {
    this.showNav = true;
  }
}
