import * as PIXI from 'pixi.js'

class App {
    constructor() {
        this.renderer = PIXI.autoDetectRenderer(800, 600, { antialias: true });

        // create the root of the scene graph
        this.stage = new PIXI.Container();

        this.stage.interactive = true;

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

        richText.anchor.set(0.5);
        richText.x = 0;
        richText.y = 0;

        this.container = new PIXI.Container();
        this.container.x=400;
        this.container.y=300;

        this.container.addChild(richText);

        this.stage.addChild(this.container);


        return this;
    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );

        this.container.rotation += 0.02;
        this.container.scale.x = Math.sin(this.container.rotation);

        this.renderer.render(this.stage);
    }
}

export const app = new App();

document.body.appendChild(app.renderer.view);