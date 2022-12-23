class Settings {
  private port: string = process.env.PORT! || '';

  getPort(): string {
    return this.port;
  }
}

let settings = new Settings();

export = {
  settings,
};