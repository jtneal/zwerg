declare namespace Twitch {
  interface EmbedOptions {
    channel: string;
    height: string;
    width: string;
  }

  class Embed {
    constructor(id: string, options: EmbedOptions): void;
  }
}
