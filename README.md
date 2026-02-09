# 🟢 PROJECT: CHI-CHI // SHOWCASE V1.0

### **UNLEASHED** - Immersive Cyberpunk Landing Page

![Version](https://img.shields.io/badge/VERSION-1.0-00ff00?style=for-the-badge&labelColor=black)
![Tech](https://img.shields.io/badge/TECH-HTML5%20%7C%20CSS3-00ff00?style=for-the-badge&labelColor=black)
![Status](https://img.shields.io/badge/STATUS-OPERATIONAL-00ff00?style=for-the-badge&labelColor=black)

## 📂 Overview

**SQC - CHI-CHI Showcase** is a high-fidelity, single-page web experience designed to introduce "Project CHI-CHI"—a fictional next-generation autonomous robotic companion. 

This project utilizes advanced **CSS3** techniques to create an immersive "terminal" atmosphere, featuring CRT scanlines, 3D perspective grids, neon glow effects, and responsive design, all without the use of external JavaScript libraries.

## ✨ Core Systems (Features)

This landing page includes the following visual and technical modules:

* **CRT Scanline Overlay:** A fixed `pointer-events: none` overlay that simulates the texture of old-school monitors.
* **3D Perspective Grid:** An infinite scrolling floor grid animated using CSS 3D transforms (`rotateX`).
* **Neon Typography:** Utilizes Google Fonts:
    * `'Orbitron'` for futuristic, technical headers.
    * `'Rajdhani'` for crisp, readable body text.
* **Floating Elements:** The dog image floats with a subtle CSS animation, complete with a dynamic glowing shadow.
* **Interactive UI:** Hover effects on buttons, stat boxes, and navigation items.
* **Responsive Scaling:** Media queries adjust font sizes and layouts for smaller terminal displays (mobile).

---

## 🚀 Initialization Sequence (Setup)

To deploy the "CHI-CHI" protocol on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/sqc-chichi-showcase.git](https://github.com/your-username/sqc-chichi-showcase.git)
    cd sqc-chichi-showcase
    ```

2.  **Execute:**
    * Simply double-click the `index.html` file to open it in your browser.
    * Or serve it using a local server (e.g., `Live Server` in VS Code).

---

## ⚙️ Configuration (Code Breakdown)

### 1. Visual Aesthetics (CSS)
The design relies heavily on pseudo-elements (`::before`) and CSS keyframe animations.

* **Grid Background (`.grid-bg`):**
    This uses `linear-gradient` combined with a `perspective(500px)` transform to create the illusion of depth. The infinite loop is handled by `animation: gridMove 20s linear infinite`.

* **Corner Accents (`.corner-accent`):**
    Four absolute positioned divs create the "HUD" bracket effect, enhancing the sci-fi feel without obstructing content.

### 2. Typography
The project imports fonts directly via Google APIs:
```css
@import url('[https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap)');
