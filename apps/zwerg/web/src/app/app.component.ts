import { Component } from '@angular/core';
import { AboutComponent } from './sections/about.component';
import { CharityComponent } from './sections/charity.component';
import { ContactComponent } from './sections/contact.component';
import { FooterComponent } from './sections/footer.component';
import { HeaderComponent } from './sections/header.component';
import { InstagramComponent } from './sections/instagram.component';
import { MerchComponent } from './sections/merch.component';
import { PromoComponent } from './sections/promo.component';
import { SponsorsComponent } from './sections/sponsors.component';
import { TikTokComponent } from './sections/tiktok.component';
import { TwitchComponent } from './sections/twitch.component';
import { TwitterComponent } from './sections/twitter.component';

@Component({
  standalone: true,
  imports: [
    AboutComponent,
    CharityComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    InstagramComponent,
    MerchComponent,
    PromoComponent,
    SponsorsComponent,
    TikTokComponent,
    TwitchComponent,
    TwitterComponent,
  ],
  selector: 'app-root',
  styles: ``,
  template: `
    <!-- <app-header></app-header>
    <app-promo></app-promo>
    <app-about></app-about>
    <app-sponsors></app-sponsors>
    <app-charity></app-charity>
    <app-twitch></app-twitch>
    <app-merch></app-merch>
    <app-tiktok></app-tiktok>
    <app-twitter></app-twitter>
    <app-instagram></app-instagram>
    <app-contact></app-contact>
    <app-footer></app-footer> -->
  `,
})
export class AppComponent {}
