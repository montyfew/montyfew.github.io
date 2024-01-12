class OutlineModelViewer extends HTMLElement {
    constructor() {
      super();
  
      let component_rect = this.getBoundingClientRect();
      console.log("component_rect", component_rect);
  
      this.shadow = this.attachShadow({ mode: "open" });
      this.render(component_rect.height);
  
      const model_path = this.getAttribute("model") ||  "/assets/projects/bike_lights/models/bigger.glb";
      const spin = (this.getAttribute("spin") || 'true') === 'true'
  
      const container = this.shadow.querySelector("div#container");
      const canvas = this.shadow.querySelector("canvas");
  
      let canvas_rect = canvas.getBoundingClientRect();
      console.log(canvas_rect);
  
      // determine the outline and bg colors 
      const body = document.getElementsByTagName("body")[0];
      const style = window.getComputedStyle(body);
      const outline_color = style.getPropertyValue("--theme-model-line-color");
      const model_color = style.getPropertyValue("--theme-model-bg-color");
  

  
    }
  
    render(height) {
      this.shadow.innerHTML = `
        <div id="container">
        <canvas class = "object-viewer"></canvas>
        </div>
        <link rel="stylesheet" href="/node_modules/lil-gui/dist/lil-gui.min.css">
        <style>
  
          #container {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: inherit;
          }
  
          .lil-gui .title {height: 2em;}
          .lil-gui.root {
            margin-top: calc(${height}px - 2em);
            width: 100%;
            z-index: 1;
            --background-color: none;
            --text-color: var(--theme-text-color);
            --title-background-color: none;
            --title-text-color: var(--theme-text-color);
            --widget-color: var(--theme-subtle-outline);
            --hover-color: lightgrey;
            --focus-color: lightgrey;
            --number-color: #2cc9ff;
            --string-color: #a2db3c;
        }
  
        .lil-gui button {
          border: var(--theme-subtle-outline) 1px solid;
        }
  
          canvas {
            position: absolute;
            width: 100%;
            height: ${height}px;
            border-radius: inherit;
          }
        </style>
      `;
    }
  }
  
  customElements.define("outline-model-viewer", OutlineModelViewer);