import * as PIXI from 'pixi.js'

class App {
    constructor() {
        this.renderer = PIXI.autoDetectRenderer(800, 600, { antialias: true });
        
        // create the root of the scene graph
        this.stage = new PIXI.Container();

        this.speed = 0.01;
        this.frame = 0;

        this.render();

        // run the render loop
        this.animate();
    }

    render() {
        const richText = new PIXI.Text('PIXI.js',{
            fontFamily : 'Arial',
            fontSize : '240px',
            fontStyle : 'italic',
            fontWeight : 'bold',
            fill : '#F7EDCA',
            stroke : '#4a1850',
            strokeThickness : 5
        });

        richText.x = 400;
        richText.y = 300;
        richText.anchor = {x: 0.5, y: 0.5};

        this.stage.addChild(richText);

        return this;
    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );
        this.frame++;

        const richText = this.stage.children[0];
        const sine = Math.sin(this.speed * this.frame);

        richText.rotation = sine * 6.3;
        richText.width = (sine / 2 + 0.5) * 800;
        richText.height = (sine / 2 + 0.5) * 600;

        this.renderer.render(this.stage);
    }
}

export const app = new App();

document.body.appendChild(app.renderer.view);