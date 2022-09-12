export function loadFont(): void {
    let myFont: FontFace = new FontFace('Audiowide', 'url(./../fonts/Audiowide-Regular.ttf)');

    myFont.load().then((font) => {
        document.fonts.add(font);
    });
}

export const audios = {
    startingAudio: new Audio(require('url:./../audio/startingMusic.wav')),
    clickAudio: new Audio(require('url:./../audio/ClickButton.wav')),
    counterAudio: new Audio(require('url:./../audio/battle.wav')),
    gameAudio: new Audio(require('url:./../audio/game.mp3')),
    bulletShotAudio: new Audio(require('url:./../audio/DefiniteShot.wav')),
    bulletCollisionAudio: new Audio(require('url:./../audio/LowBassHit.wav')),
    explosionAudio: new Audio(require('url:./../audio/Explosion.wav')),
    healthAudio: new Audio(require('url:./../audio/HPadded.wav')),
    shieldAudio: new Audio(require('url:./../audio/EnergyShieldActivated.wav')),
};
