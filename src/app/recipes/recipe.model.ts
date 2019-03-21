export class Recipe {
  public neme: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, disc: string, imagePath: string){
    this.neme = name;
    this.description = disc;
    this.imagePath = imagePath;

  }
}
