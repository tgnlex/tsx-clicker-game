export class MainService {
  static game: any;
  static start(): void {
    this.game = new Game({})
  }
  this.game.initialize();
  this.game.load();
  this.game.start();
}
