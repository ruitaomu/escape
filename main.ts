enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function destroyAllEnemies () {
    for (let 值 of enemies) {
        值.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.smiles, 500)
    info.changeScoreBy(1)
})
function destroyAllGems () {
    for (let 值2 of gems) {
        值2.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (level == 2) {
        game.over()
    } else {
        destroyAllEnemies()
        destroyAllGems()
        level += 1
        setLevelMap(level)
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    resetSpriteSpeed(sprite)
    while (sprite.vx == 0 && sprite.vy == 0) {
        resetSpriteSpeed(sprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over()
})
function setLevelMap (level: number) {
    if (level == 0) {
        enemyNumber = 6
        gemNumber = 3
        levelTime = 12
        tiles.setTilemap(tiles.createTilemap(
            hex`10001000020f0c0c0c0c0c0c0c0c0c0c0c0c0c0c020309090909090909090909080c0c0c020305050505050505050a0a070c0c0c020316160b0b0b0b0b0b030a070c0c0c020316160c0c0c020c0c030a070c0c0c0203090909080c0c0c0c030a070c0c0c02030a050a070c0c0c0c030a070c0c0c0203071603070c0c0c0c030a070c0c0c0203071603070c0c0c0c030a0a0c0c0c0203071603070c0c01090a0a0a080c0c02030a090a070c0c030a05050a070c0c0c0405050a070c0c03070c0c03070c0c0c0c0c0c030a09090a070c0c03070c0c0c0c0c0c030a050505060c0c03070c0c0c0c0c0c03070c0c0c0c0c0c03070c0c0c0c0c0c04060c0c0c0c0c0c030a100c`,
            img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 . . . . . . . . . . . . 2 . . 
2 . . . . . . . . . . . . 2 . . 
2 . 2 2 2 2 2 2 2 2 . . . 2 . . 
2 . 2 2 2 2 2 . . 2 . . . 2 . . 
2 . . . . . 2 . . 2 . . . 2 . . 
2 . . . . . 2 . . 2 . . . 2 . . 
2 . . 2 . . 2 . . 2 . . . 2 . . 
2 . . 2 . . 2 . 2 2 . . . 2 2 . 
2 . . 2 . . 2 2 . . . . . . 2 . 
2 . . . . . 2 2 . . . . . . 2 . 
2 . . . . . 2 2 . . 2 2 . . 2 . 
2 2 2 2 . . . . . . 2 2 . . 2 . 
. . . 2 . . . . . . 2 2 . . 2 . 
. . . 2 . . 2 2 2 2 2 2 . . 2 . 
. . . 2 . . 2 . . . . 2 . . . 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.dungeon.stairNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.builtin.forestTiles20,sprites.builtin.forestTiles24,sprites.builtin.forestTiles27,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles0,myTiles.tile1],
            TileScale.Sixteen
        ))
    } else if (level == 1) {
        enemyNumber = 9
        gemNumber = 6
        levelTime = 25
        tiles.setTilemap(tiles.createTilemap(
            hex`14001400181818161616181818181818181818181818181818181818181818180109090909090909081818181818181818181818030a0a0a0a0a0a0a071818181818181818181818030a0a181818180a071818181901091018181818030a0a181818180a0718181818030a0718181818030a0a181818180a0718181818030a0718181818030a0a181818180a0718181818030a0718181818030a0a090909090a0718181818030a0718181818030a07161616160a0718181818030a0a090909090a0a07161616160a0718181818030a0a0a0a0a0a0a0a0718191818030a09090818030a0a0a0a050505050618181819030a0a0a07161616160a071818181818181818181616160a07161616160a07181818181819181818030a0a0a07161616160a07181818181818181818030a050506181616160a07181818181818181818030718181818181616160a0909090909090909090a07181818181816161605050505050505050a0a0a071818181818181616181818181818181804050a061818181818181616181818181818181818180f18181818`,
            img`
. . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . 2 . . . . . . . . . 2 . . 
. . . . . . . 2 . . . . . . . . . 2 . . 
2 2 2 2 2 . . 2 . . . 2 2 2 2 . . 2 . . 
2 . . . 2 . . 2 . . . 2 . . 2 . . 2 . . 
2 . . . 2 . . 2 . . . 2 . . 2 . . 2 . . 
2 . . . 2 . . 2 . . . 2 2 2 2 . . 2 . . 
2 . . . 2 . . 2 . . . . . . . . . 2 . . 
2 . . . 2 2 2 2 . . . 2 2 2 2 . . 2 . . 
2 . . . . . . . . . . 2 2 2 2 . . 2 2 2 
2 . . . . . . . . . . 2 . . 2 . . . . . 
2 . . . . . . . . . . 2 . . 2 . . . . . 
2 2 2 2 . . 2 2 2 2 2 2 . . 2 2 2 2 . . 
. . 2 2 . . 2 . . . . . . . 2 . . . . . 
. . . 2 . . 2 . . . . . . . 2 . . . . . 
. . . 2 . . 2 2 2 2 2 2 2 2 2 . . 2 2 2 
. . . 2 2 . . . . . . . . . . . . 2 . . 
. . . . 2 . . . . . . . . . . . . 2 . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . . 2 . . 
. . . . 2 2 . . . . . . 2 2 2 . 2 2 . . 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.dungeon.stairNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.builtin.forestTiles20,sprites.builtin.forestTiles24,sprites.builtin.forestTiles27,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles0,myTiles.tile1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2],
            TileScale.Sixteen
        ))
    } else {
        enemyNumber = 12
        gemNumber = 9
        levelTime = 50
        tiles.setTilemap(tiles.createTilemap(
            hex`19001900181818181818181818181818181818181818181818181818181c191919191919191919191919191919191919191919191818181919191919191919191919191919191919191919191918181819191919191919191818181819202020202020191919181d1819190f1818181818181c181819202020202020191919181d181919181b1b1818181818181819202020202020191919181d1b1919181b1b1819191919191919202020202020191919181d1b1818181b1b18191919191919191919191919191919191818181818181b1b181919191919191919191919191919191918181818181b1b1b1819191d1818191919191919191919191918181818181b1b1b1819191d1c181919181c1818191d1d1d1d18181819191919191919191d1a18191918181c18191d1d1d1d18181819191919191919191d1a18191919191919191919191818181819191918181818181818181818191919191918191918181818191919181818181818191910181818181919181919191918181919191819191919191919191a1818181919181919191918181919191819191919191919191a1818181919181919181818181919191819191818181f1f1f1818181819191819191b181818181919181919181f181f1f1f1f1f181819191819191818181b181919181919191919191919191919191919181919181b181b1819191819191919191919191919191919191819191818181f1819191818181818181818181818181818181819191818181f181919191919191919191919191919191919191919181b181f1819191919191919191919191919191919191919191818181f181818181818181818181818181818181818181818181818`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 . . . . . . . . 2 2 2 2 . 2 2 2 2 2 2 . . . 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . . . 2 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . . . 2 2 
2 . . 2 2 2 2 . . . . . . . 2 2 2 2 2 2 . . . 2 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 . . 2 2 2 . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 . . 2 2 2 . . 2 2 2 2 . 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 . . 2 2 2 2 . 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 . . . . . . . . . . 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . 2 2 2 
2 . . . 2 2 2 2 2 2 . . . 2 2 2 2 . . 2 . . . . 2 
2 . . . 2 . . . . . . . . 2 2 2 2 . . 2 . . . . 2 
2 . . . 2 . . . . . . . . 2 2 2 2 . . 2 . . 2 2 2 
2 . . . 2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 2 2 
2 2 . . 2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 2 2 
2 2 . . 2 . . . . . . . . . . . . . . 2 . . 2 2 2 
2 2 . . 2 . . . . . . . . . . . . . . 2 . . 2 2 2 
2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.dungeon.stairNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.builtin.forestTiles20,sprites.builtin.forestTiles24,sprites.builtin.forestTiles27,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles0,myTiles.tile1,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterEast2,sprites.dungeon.floorLight1,sprites.dungeon.floorLight2],
            TileScale.Sixteen
        ))
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
    scene.cameraFollowSprite(mySprite)
    spawnEnemy(enemyNumber)
    spawnGems(gemNumber)
    info.startCountdown(levelTime)
}
function spawnGems (数字: number) {
    for (let index = 0; index < 数字; index++) {
        gemSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        if (level == 0) {
            tiles.placeOnRandomTile(gemSprite, sprites.castle.tilePath5)
        } else if (level == 1) {
            tiles.placeOnRandomTile(gemSprite, sprites.castle.tilePath5)
        } else {
            tiles.placeOnRandomTile(gemSprite, sprites.dungeon.darkGroundCenter)
        }
        gems.push(gemSprite)
    }
}
function spawnEnemy (数字: number) {
    for (let index = 0; index < 数字; index++) {
        enemySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        enemies.push(enemySprite)
        if (level == 0) {
            tiles.placeOnRandomTile(enemySprite, sprites.castle.tilePath5)
        } else if (level == 1) {
            tiles.placeOnRandomTile(enemySprite, sprites.castle.tilePath5)
        } else {
            tiles.placeOnRandomTile(enemySprite, sprites.dungeon.darkGroundCenter)
        }
        resetSpriteSpeed(enemySprite)
    }
}
function resetSpriteSpeed (spriteToReset: Sprite) {
    speedX = 0
    speedY = 0
    while (speedX == 0 && speedY == 0) {
        speedY = Math.randomRange(-1, 1)
        speedX = Math.randomRange(-1, 1)
    }
    speedX = speedX * 50
    speedY = speedY * 50
    spriteToReset.setVelocity(speedX, speedY)
}
let speedY = 0
let speedX = 0
let enemySprite: Sprite = null
let gemSprite: Sprite = null
let levelTime = 0
let gemNumber = 0
let enemyNumber = 0
let level = 0
let gems: Sprite[] = []
let enemies: Sprite[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
enemies = sprites.allOfKind(SpriteKindLegacy.Enemy)
gems = sprites.allOfKind(SpriteKindLegacy.Food)
controller.moveSprite(mySprite)
info.setScore(0)
level = 0
setLevelMap(level)
game.onUpdateInterval(500, function () {
    for (let enemySprite2 of enemies) {
        if (enemySprite2.vx == 0) {
            if (enemySprite2.vy == 0) {
                resetSpriteSpeed(enemySprite2)
            }
        }
    }
})
