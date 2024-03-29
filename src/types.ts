export enum Vehicles {
    enemySmallOne = 1,
    enemySmallTwo = 2,
    enemyBigOne = 3,
    player = 4,
}

export enum EnemiesSpeeds {
    enemySmallOne = 1.5,
    enemySmallTwo = 3,
    enemyBigOne = 0.7,
}

export enum EnemiesFrames {
    enemySmallOne = 8,
    enemySmallTwo = 5,
    enemyBigOne = 8,
}

export enum EnemiesLifes {
    enemySmallOne = 3,
    enemySmallTwo = 1,
    enemyBigOne = 7,
}

export enum Explosions {
    explosionSmall = 1,
    explosionBig = 2,
}

export enum Icons {
    live = 'live',
    barrier = 'barrier',
}

export enum Obstacles {
    asteroid = 1,
    bomb = 2,
    health = 3,
}

export type Result = {
    name: string;
    score: number;
};
