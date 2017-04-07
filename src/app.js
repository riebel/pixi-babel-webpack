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

        richText.x = 30;
        richText.y = 180;

        this.stage.addChild(richText);

        return this;
    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );

        this.renderer.render(this.stage);
    }
}

export const app = new App();

document.body.appendChild(app.renderer.view);