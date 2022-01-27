const explodingNav = document.querySelector(".exploding-nav"),
    explodingNavButton = document.querySelector(".exploding-nav-button");

function toggleNavOpen(e) {
    e.preventDefault(), explodingNav.classList.contains("active") ? window.playSoundEffect("power-down") : window.playSoundEffect("power-up"), explodingNav.classList.remove("first-run"), explodingNav.classList.toggle("active");
}
explodingNavButton.addEventListener("click", toggleNavOpen);
const settingsButton = document.querySelector(".site-settings-button"),
    panel = document.querySelector(".site-settings-panel"),
    soundToggle = document.querySelector("[data-setting=sound]"),
    soundImage = soundToggle.querySelector("img");
let isSoundEnabled = window.localStorage.getItem("settings:sound");

function toggleSettings() {
    panel.classList.toggle("site-settings-panel-open");
}

function toggleSound() {
    (isSoundEnabled = !isSoundEnabled),
    window.localStorage.setItem("settings:sound", isSoundEnabled),
        isSoundEnabled ? (window.sound.mute(!1), (soundImage.src = soundImage.dataset.imageOn)) : (window.sound.mute(!0), (soundImage.src = soundImage.dataset.imageOff));
}
settingsButton.addEventListener("click", (e) => {
        toggleSettings();
    }),
    soundToggle.addEventListener("click", () => {
        toggleSound();
    });
const taglines = [
        { size: "8.46vw", "size-lg": "66px", text: "\n      has a lot of ideas\n    " },
        { rotation: "11deg", scale: "1.2", size: "9.4vw", "size-lg": "73px", text: '\n      believes in us <span class="love"></span>\n    ', top: "0" },
        { size: "9.57vw", "size-lg": "74.5px", text: "\n      is an okay cook\n    " },
        { rotation: "-9deg", scale: "1.15", size: "8.44vw", "size-lg": "65.5px", text: '\n      <span class="love">love</span>s melted cheese\n    ' },
        { rotation: "18deg", scale: 1.35, size: "5.75vw", "size-lg": "44.5px", text: '\n      thinks you belong here <span class="love"></span>\n    ', top: "0.025em" },
        { scale: 1.3, rotation: "-3deg", size: "5.02vw", "size-lg": "39px", text: '\n      would <span class="love">love</span> a sandwich, thanks\n    ', top: "-0.1em" },
        { rotation: "-11deg", scale: 1.3, size: "8.39vw", "size-lg": "65.25px", text: '\n      <span class="love">love</span>s pajama pants\n    ' },
    ],
    element = document.querySelector(".hero-tagline");
let currentIndex = 0;

const world = document.querySelector(".boop-drop"),
    { Engine: Engine, Render: Render, Runner: Runner, World: World, Bodies: Bodies } = Matter,
    heroBlock = document.querySelector(".hero-block"),
    { width: width, height: height } = heroBlock.getBoundingClientRect();

function createBall() {
    return Bodies.circle(Math.round(Math.random() * width), -30, 25, {
        angle: Math.PI * (2 * Math.random() - 1),
        friction: 0.001,
        frictionAir: 0.01,
        restitution: 0.8,
        render: { sprite: { texture: "https://static-cdn.jtvnw.net/emoticons/v1/301299185/2.0" } },
    });
}
const engine = Engine.create(),
    runner = Runner.create(),
    render = Render.create({ canvas: world, engine: engine, options: { width: width, height: height, background: "transparent", wireframes: !1 } }),
    boundaryOptions = { isStatic: !0, render: { fillStyle: "transparent", strokeStyle: "transparent" } },
    ground = Bodies.rectangle(width / 2, height, width + 20, 4, boundaryOptions),
    leftWall = Bodies.rectangle(0, height / 2, 4, height, boundaryOptions),
    rightWall = Bodies.rectangle(width, height / 2, 4, height, boundaryOptions);
Render.run(render), Runner.run(runner, engine), World.add(engine.world, [ground, leftWall, rightWall]);
const addBoop = (e = !0) => {
    e && window.playSoundEffect("boop");
    const t = createBall();
    World.add(engine.world, [t]);
};
(window.addBoop = addBoop), addBoop(!1);

const sound = new Howl({
    src: ["https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1642207423/jason.af/sfx/sprite.webm", "https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1642207423/jason.af/sfx/sprite.mp3"],
    sprite: {
        airhorn: [0, 2076],
        beep: [2205, 378],
        boop: [2724, 483],
        click: [3373, 273],
        hooray: [3762, 900],
        oop: [4800, 324],
        pop: [5319, 324],
        "power-down": [5838, 952],
        "power-up": [7005, 953],
        woohoo: [8173, 743],
        yay: [9081, 1265],
    },
});
(window.sound = sound),
(window.playSoundEffect = (e = "boop") => {
    sound.play(e);
});
const hoverEls = document.querySelectorAll("[data-sound-hover]");
hoverEls.forEach((e) => {
    const t = e.dataset.soundHover;
    e.addEventListener("mouseenter", () => window.playSoundEffect(t));
});
const clickEls = document.querySelectorAll("[data-sound-click]");
clickEls.forEach((e) => {
    const t = e.dataset.soundClick;
    e.addEventListener("mousedown", (e) => {
            window.playSoundEffect(t), e.preventDefault();
        }),
        e.addEventListener("keydown", (e) => {
            "Enter" === e.key && window.playSoundEffect(t);
        });
});
const focusEls = document.querySelectorAll("[data-sound-focus]");
focusEls.forEach((e) => {
    const t = e.dataset.soundFocus;
    e.addEventListener("focus", () => window.playSoundEffect(t));
});