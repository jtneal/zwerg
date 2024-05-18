import { Injectable } from '@angular/core';

export interface Link {
  name: string;
  link: string;
}

export interface Social {
  icon: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  public links: Link[] = [
    { name: 'About', link: '#about' },
    { name: 'Charity', link: '#charity' },
    { name: 'Twitch', link: '#twitch' },
    { name: 'Merch', link: '#merch' },
    { name: 'TikTok', link: '#tiktok' },
    { name: 'Twitter', link: '#twitter' },
    { name: 'Instagram', link: '#instagram' },
    { name: 'Contact', link: '#contact' },
  ];

  public socials: Social[] = [
    { icon: 'twitch', link: 'https://www.twitch.tv/iiizwerg' },
    { icon: 'youtube', link: 'https://www.youtube.com/channel/UCSJ0XLlYkUGjSDHmiTxSJZA' },
    { icon: 'tiktok', link: 'https://www.tiktok.com/@iiizwerg' },
    { icon: 'twitter-x', link: 'https://twitter.com/iiizwerg' },
    { icon: 'instagram', link: 'https://www.instagram.com/iiizwerg' },
    { icon: 'discord', link: 'https://discord.gg/iiizwerg' },
    { icon: 'envelope-at', link: 'mailto:mailto:iiizwerg3@gmail.com' },
  ];
}
