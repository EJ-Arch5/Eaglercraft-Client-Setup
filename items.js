const items = {
    trident: {
        id: 500,
        name: 'Trident',
        texture: 'textures/trident.png',
        damage: 8,
        enchantments: ['loyalty', 'riptide'],
        use: function(player, world) {
            if (this.enchantments.includes('riptide') && (player.inWater || player.inRain)) {
                player.velocity.add(player.direction.clone().multiply(2));
            } else {
                let projectile = new Projectile(this, player.position, player.direction);
                world.spawn(projectile);
            }
        }
    }
};