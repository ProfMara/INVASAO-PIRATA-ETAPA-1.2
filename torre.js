class Torre{

    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imagem = loadImage("torre.png");
    }

    display(){
        imageMode(CENTER)
        image(this.imagem, this.x, this.y, this.w, this.h);
    }
}