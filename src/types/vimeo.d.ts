// Vimeo Player API type declarations
interface VimeoPlayer {
  on(event: string, callback: () => void): void;
  play(): Promise<void>;
  pause(): Promise<void>;
  setVolume(volume: number): Promise<void>;
  getVolume(): Promise<number>;
  destroy(): Promise<void>;
}

interface VimeoPlayerConstructor {
  new (element: HTMLIFrameElement | HTMLElement | string, options?: Record<string, unknown>): VimeoPlayer;
}

interface Window {
  Vimeo?: {
    Player: VimeoPlayerConstructor;
  };
}
