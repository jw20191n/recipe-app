//define what a single recipe looks like in the class

export class Recipe {
    public name: string;
    public description: string;
    public imageUrl: string;

    constructor(name: string, desc: string, imageUrl: string){
        this.name = name;
        this.description = desc;
        this.imageUrl = imageUrl;
    }
}