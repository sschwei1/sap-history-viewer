// objects generated from public api and mapped for my usage
// -> https://superauto.pet/api.json

const packTable = [
  { id: 1, name: 'Standard' },
  { id: 2, name: 'Expansion 1' }
];

const tierTable = [
  { id: 1, name: 'Tier 1', roundAvailable: 1 },
  { id: 2, name: 'Tier 2', roundAvailable: 3 },
  { id: 3, name: 'Tier 3', roundAvailable: 5 },
  { id: 4, name: 'Tier 4', roundAvailable: 7 },
  { id: 5, name: 'Tier 5', roundAvailable: 9 },
  { id: 6, name: 'Tier 6', roundAvailable: 11 },
  { id: 7, name: 'Summon', roundAvailable: null },
];

const foodTable = [
  { id: 1, name: 'Apple', description: 'Give an animal +1/+1.', tierId: 1 },
  { id: 2, name: 'Honey', description: 'Give an animal Honey Bee.', tierId: 1 },
  { id: 3, name: 'Cupcake', description: 'Give an animal +3/+3 until end of battle.', tierId: 2 },
  { id: 4, name: 'Meat Bone', description: 'Give an animal Bone Attack.', tierId: 2 },
  { id: 5, name: 'Sleeping Pill', description: 'Make a friendly animal faint.', tierId: 2 },
  { id: 6, name: 'Garlic', description: 'Give an animal Garlic Armor.', tierId: 3 },
  { id: 7, name: 'Salad Bowl', description: 'Give 2 random animals +1/+1.', tierId: 3 },
  { id: 8, name: 'Canned Food', description: 'Give all current and future shop animals +2/+1.', tierId: 4 },
  { id: 9, name: 'Pear', description: 'Give an animal +2/+2.', tierId: 4 },
  { id: 10, name: 'Chili', description: 'Give an animal Splash Attack.', tierId: 5 },
  { id: 11, name: 'Chocolate', description: 'Give an animal +1 Experience.', tierId: 5 },
  { id: 12, name: 'Sushi', description: 'Give 3 random animals +1/+1.', tierId: 5 },
  { id: 13, name: 'Melon', description: 'Give an animal Melon Armor.', tierId: 6 },
  { id: 14, name: 'Mushroom', description: 'Give an animal Extra Life.', tierId: 6 },
  { id: 15, name: 'Pizza', description: 'Give 2 random animals +2/+2.', tierId: 6 },
  { id: 16, name: 'Steak', description: 'Give an animal Steak Attack.', tierId: 6 },
  { id: 17, name: 'Milk', description: 'Give an animal +1/2/3 attack and +2/4/6 health (depending on level of Cow).', tierId: 7 },
  { id: 18, name: 'Peanut', description: 'Gives an animal Peanut Attack' }
];

const foodPackTable = [
  { foodId: 1, packId: 1 },
  { foodId: 2, packId: 1 },
  { foodId: 3, packId: 1 },
  { foodId: 4, packId: 1 },
  { foodId: 5, packId: 1 },
  { foodId: 6, packId: 1 },
  { foodId: 7, packId: 1 },
  { foodId: 8, packId: 1 },
  { foodId: 9, packId: 1 },
  { foodId: 10, packId: 1 },
  { foodId: 11, packId: 1 },
  { foodId: 12, packId: 1 },
  { foodId: 13, packId: 1 },
  { foodId: 14, packId: 1 },
  { foodId: 15, packId: 1 },
  { foodId: 16, packId: 1 },
  { foodId: 17, packId: 1 },
  { foodId: 1, packId: 2 },
  { foodId: 2, packId: 2 },
  { foodId: 3, packId: 2 },
  { foodId: 4, packId: 2 },
  { foodId: 5, packId: 2 },
  { foodId: 6, packId: 2 },
  { foodId: 7, packId: 2 },
  { foodId: 8, packId: 2 },
  { foodId: 9, packId: 2 },
  { foodId: 10, packId: 2 },
  { foodId: 11, packId: 2 },
  { foodId: 12, packId: 2 },
  { foodId: 13, packId: 2 },
  { foodId: 14, packId: 2 },
  { foodId: 15, packId: 2 },
  { foodId: 16, packId: 2 },
  { foodId: 17, packId: 2 },
];

const petTable = [
  { id: 1, name: 'Ant', baseAttack: 2, baseHealth: 1, skillLvl1: 'Faint: Give a random friend +2/+1', skillLvl2: 'Faint: Give a random friend +4/+2', skillLvl3: 'Faint: Give a random friend +6/+3', tierId: 1},
  { id: 2, name: 'Beaver', baseAttack: 2, baseHealth: 2, skillLvl1: 'Sell: Give two random friends +1 health', skillLvl2: 'Sell: Give two random friends +2 health', skillLvl3: 'Sell: Give two random friends +3 health', tierId: 1},
  { id: 3, name: 'Beetle', baseAttack: 2, baseHealth: 3, skillLvl1: 'Eat shop food: Give shop animals +1 health', skillLvl2: 'Eat shop food: Give shop animals +2 health', skillLvl3: 'Eat shop food: Give shop animals +3 health', tierId: 1},
  { id: 4, name: 'Bluebird', baseAttack: 2, baseHealth: 1, skillLvl1: 'End turn: Give left-most friend +1 attack', skillLvl2: 'End turn: Give left-most friend +2 attack', skillLvl3: 'End turn: Give left-most friend +3 attack', tierId: 1},
  { id: 5, name: 'Cricket', baseAttack: 1, baseHealth: 2, skillLvl1: 'Faint: Summon a 1/1 Cricket', skillLvl2: 'Faint: Summon a 2/2 Cricket', skillLvl3: 'Faint: Summon a 3/3 Cricket', tierId: 1},
  { id: 6, name: 'Duck', baseAttack: 1, baseHealth: 3, skillLvl1: 'Sell: Give shop animals +1 Health', skillLvl2: 'Sell: Give shop animals +2 Health', skillLvl3: 'Sell: Give shop animals +3 Health', tierId: 1},
  { id: 7, name: 'Fish', baseAttack: 2, baseHealth: 3, skillLvl1: 'Level-up: Give all friends +1/+1', skillLvl2: 'Level-up: Give all friends +2/+2', tierId: 1},
  { id: 8, name: 'Horse', baseAttack: 2, baseHealth: 1, skillLvl1: 'Friend summoned: Give it +1 Attack until end of battle', skillLvl2: 'Friend summoned: Give it +2 Attack until end of battle', skillLvl3: 'Friend summoned: Give it +3 Attack until end of battle', tierId: 1},
  { id: 9, name: 'Ladybug', baseAttack: 1, baseHealth: 3, skillLvl1: 'Buy food: Gain +1/+1 until end of battle', skillLvl2: 'Buy food: Gain +2/+2 until end of battle', skillLvl3: 'Buy food: Gain +3/+3 until end of battle', tierId: 1},
  { id: 10, name: 'Mosquito', baseAttack: 2, baseHealth: 2, skillLvl1: 'Start of battle: Deal 1 damage to a random enemy', skillLvl2: 'Start of battle: Deal 2 damage to a random enemy', skillLvl3: 'Start of battle: Deal 3 damage to a random enemy', tierId: 1},
  { id: 11, name: 'Otter', baseAttack: 1, baseHealth: 2, skillLvl1: 'Buy: Give a random friend +1/+1', skillLvl2: 'Buy: Give a random friend +2/+2', skillLvl3: 'Buy: Give a random friend +3/+3', tierId: 1},
  { id: 12, name: 'Pig', baseAttack: 3, baseHealth: 1, skillLvl1: 'Sell: Gain an extra 1 gold', skillLvl2: 'Sell: Gain an extra 2 gold', skillLvl3: 'Sell: Gain an extra 3 gold', tierId: 1},
  { id: 13, name: 'Sloth', baseAttack: 1, baseHealth: 1, tierId: 1},
  { id: 14, name: 'Bat', baseAttack: 1, baseHealth: 2, skillLvl1: 'Start of battle: Make 1 enemy Weak.', skillLvl2: 'Start of battle: Make 2 enemies Weak.', skillLvl3: 'Start of battle: Make 3 enemies Weak.', tierId: 2},
  { id: 15, name: 'Crab', baseAttack: 3, baseHealth: 3, skillLvl1: 'Buy: Copy Health from the most healthy friend', skillLvl2: 'Buy: Copy Health from the most healthy friend', skillLvl3: 'Buy: Copy Health from the most healthy friend', tierId: 2},
  { id: 16, name: 'Dodo', baseAttack: 2, baseHealth: 3, skillLvl1: 'Start of battle: Give 50% Attack to friend ahead.', skillLvl2: 'Start of battle: Give 100% Attack to friend ahead.', skillLvl3: 'Start of battle: Give 150% Attack to friend ahead.', tierId: 2},
  { id: 17, name: 'Dog', baseAttack: 2, baseHealth: 2, skillLvl1: 'Friend summoned: Gain +1 Attack or +1 Health.', skillLvl2: 'Friend summoned: Gain +2 Attack or +2 Health.', skillLvl3: 'Friend summoned: Gain +3 Attack or +3 Health.', tierId: 3},
  { id: 18, name: 'Dromedary', baseAttack: 2, baseHealth: 4, skillLvl1: 'Start of turn: Give shop animals +1/+1', skillLvl2: 'Start of turn: Give shop animals +2/+2', skillLvl3: 'Start of turn: Give shop animals +3/+3', tierId: 2},
  { id: 19, name: 'Elephant', baseAttack: 3, baseHealth: 5, skillLvl1: 'Before Attack: Deal 1 damage to 1 friends behind.', skillLvl2: 'Before Attack: Deal 1 damage to 2 friends behind.', skillLvl3: 'Before Attack: Deal 1 damage to 3 friends behind.', tierId: 2},
  { id: 20, name: 'Flamingo', baseAttack: 3, baseHealth: 1, skillLvl1: 'Faint: Give the two friends behind +1/+1.', skillLvl2: 'Faint: Give the two friends behind +2/+2.', skillLvl3: 'Faint: Give the two friends behind +3/+3.', tierId: 2},
  { id: 21, name: 'Hedgehog', baseAttack: 3, baseHealth: 2, skillLvl1: 'Faint: Deal 2 damage to all.', skillLvl2: 'Faint: Deal 4 damage to all.', skillLvl3: 'Faint: Deal 6 damage to all.', tierId: 2},
  { id: 22, name: 'Peacock', baseAttack: 1, baseHealth: 5, skillLvl1: 'Hurt: Gain 50% more Attack. Works 1 time(s) per turn.', skillLvl2: 'Hurt: Gain 50% more Attack. Works 2 time(s) per turn.', skillLvl3: 'Hurt: Gain 50% more Attack. Works 3 time(s) per turn.', tierId: 2},
  { id: 23, name: 'Rat', baseAttack: 4, baseHealth: 5, skillLvl1: 'Faint: summon one 1/1 Dirty Rat for the opponent that betrays him.', skillLvl2: 'Faint: summon one 1/1 Dirty Rat for the opponent that betrays him.', skillLvl3: 'Faint: summon one 1/1 Dirty Rat for the opponent that betrays him.', tierId: 2},
  { id: 24, name: 'Shrimp', baseAttack: 2, baseHealth: 3, skillLvl1: 'Friend sold: Give a random friend +1 Health.', skillLvl2: 'Friend sold: Give a random friend +2 Health.', skillLvl3: 'Friend sold: Give a random friend +3 Health.', tierId: 2},
  { id: 25, name: 'Spider', baseAttack: 2, baseHealth: 2, skillLvl1: 'Faint: Summon a level 1 tier 3 animal as a 2/2', skillLvl2: 'Faint: Summon a level 2 tier 3 animal as a 2/2', skillLvl3: 'Faint: Summon a level 3 tier 3 animal as a 2/2', tierId: 2},
  { id: 26, name: 'Swan', baseAttack: 1, baseHealth: 3, skillLvl1: 'Start of turn: Gain 1 gold.', skillLvl2: 'Start of turn: Gain 2 gold.', skillLvl3: 'Start of turn: Gain 3 gold.', tierId: 2},
  { id: 27, name: 'Tabby Cat', baseAttack: 5, baseHealth: 3, skillLvl1: 'Eats shop food: Give friends +1 Attack until end of battle', skillLvl2: 'Eats shop food: Give friends +2 Attack until end of battle', skillLvl3: 'Eats shop food: Give friends +3 Attack until end of battle', tierId: 2},
  { id: 28, name: 'Badger', baseAttack: 5, baseHealth: 4, skillLvl1: 'Faint: Deal Attack damage to adjacent animals', skillLvl2: 'Faint: Deal Attack damage to adjacent animals', skillLvl3: 'Faint: Deal Attack damage to adjacent animals', tierId: 3},
  { id: 29, name: 'Blowfish', baseAttack: 3, baseHealth: 5, skillLvl1: 'Hurt: Deal 2 damage to a random enemy.', skillLvl2: 'Hurt: Deal 4 damage to a random enemy.', skillLvl3: 'Hurt: Deal 6 damage to a random enemy.', tierId: 3},
  { id: 30, name: 'Caterpillar', baseAttack: 1, baseHealth: 3, skillLvl1: 'Start of turn: Gain 1 Experience.', skillLvl2: 'Start of turn: Gain 1 Experience.', skillLvl3: 'Start of battle: Evolve into a Butterfly, then copy stats of the strongest friend.', tierId: 3},
  { id: 31, name: 'Camel', baseAttack: 2, baseHealth: 5, skillLvl1: 'Hurt: Give friend behind +1/+2', skillLvl2: 'Hurt: Give friend behind +2/+4', skillLvl3: 'Hurt: Give friend behind +3/+6', tierId: 3},
  { id: 32, name: 'Hatching Chick', baseAttack: 1, baseHealth: 1, skillLvl1: 'End turn: Give +5/+5 to friend ahead until end of battle.', skillLvl2: 'End turn: Give +2/+2 to friend ahead.', skillLvl3: 'Start of turn: Give +1 Experience to friend ahead', tierId: 3},
  { id: 33, name: 'Giraffe', baseAttack: 2, baseHealth: 5, skillLvl1: 'End turn: Give friend ahead +1/+1', skillLvl2: 'End turn: Give 2 friends ahead +1/+1', skillLvl3: 'End turn: Give 3 friends ahead +1/+1', tierId: 3},
  { id: 34, name: 'Kangaroo', baseAttack: 1, baseHealth: 2, skillLvl1: 'Friend ahead attacks: Gain +2/+2', skillLvl2: 'Friend ahead attacks: Gain +4/+4', skillLvl3: 'Friend ahead attacks: Gain +6/+6', tierId: 3},
  { id: 35, name: 'Owl', baseAttack: 5, baseHealth: 3, skillLvl1: 'Sell: Give a random friend +2/+2', skillLvl2: 'Sell: Give a random friend +2/+2', skillLvl3: 'Sell: Give a random friend +2/+2', tierId: 3},
  { id: 36, name: 'Ox', baseAttack: 1, baseHealth: 4, skillLvl1: 'Friend ahead attacks: Gain Melon Armor and +2 attack', skillLvl2: 'Friend ahead attacks: Gain Melon Armor and +4 attack', skillLvl3: 'Friend ahead attacks: Gain Melon Armor and +6 attack', tierId: 3},
  { id: 37, name: 'Puppy', baseAttack: 1, baseHealth: 1, skillLvl1: 'End turn: If you have 3 or more gold, gain +2/+2', skillLvl2: 'End turn: If you have 3 or more gold, gain +4/+4', skillLvl3: 'End turn: If you have 3 or more gold, gain +6/+6', tierId: 3},
  { id: 38, name: 'Rabbit', baseAttack: 3, baseHealth: 2, skillLvl1: 'Pet eats shop food: Give it +1 Health', skillLvl2: 'Pet eats shop food: Give it +2 Health', skillLvl3: 'Pet eats shop food: Give it +3 Health', tierId: 3},
  { id: 39, name: 'Sheep', baseAttack: 2, baseHealth: 2, skillLvl1: 'Faint: Summon two 2/2 Rams', skillLvl2: 'Faint: Summon two 4/4 Rams', skillLvl3: 'Faint: Summon two 6/6 Rams', tierId: 3},
  { id: 40, name: 'Snail', baseAttack: 2, baseHealth: 2, skillLvl1: 'Buy: If you lost last battle, give all friends +1/+1', skillLvl2: 'Buy: If you lost last battle, give all friends +2/+2', skillLvl3: 'Buy: If you lost last battle, give all friends +3/+3', tierId: 3},
  { id: 41, name: 'Tropical Fish', baseAttack: 2, baseHealth: 4, skillLvl1: 'End turn: Give adjacent friends +1 Health', skillLvl2: 'End turn: Give adjacent friends +2 Health', skillLvl3: 'End turn: Give adjacent friends +3 Health', tierId: 3},
  { id: 42, name: 'Turtle', baseAttack: 1, baseHealth: 2, skillLvl1: 'Faint: Give friend behind Melon Armor', skillLvl2: 'Faint: Give 2 friends behind Melon Armor', skillLvl3: 'Faint: Give 3 friends behind Melon Armor', tierId: 3},
  { id: 43, name: 'Whale', baseAttack: 3, baseHealth: 8, skillLvl1: 'Start of battle: Swallow friend ahead and release it as a level 1 after fainting.', skillLvl2: 'Start of battle: Swallow friend ahead and release it as a level 2 after fainting.', skillLvl3: 'Start of battle: Swallow friend ahead and release it as a level 3 after fainting.', tierId: 4},
  { id: 44, name: 'Bison', baseAttack: 6, baseHealth: 6, skillLvl1: 'End turn: Gain +2/+2 if there is at least one Lvl. 3 friend.', skillLvl2: 'End turn: Gain +4/+4 if there is at least one Lvl. 3 friend.', skillLvl3: 'End turn: Gain +6/+6 if there is at least one Lvl. 3 friend.', tierId: 4},
  { id: 45, name: 'Buffalo', baseAttack: 5, baseHealth: 5, skillLvl1: 'Friend bought: Gain +1/+1', skillLvl2: 'Friend bought: Gain +2/+2', skillLvl3: 'Friend bought: Gain +3/+3', tierId: 4},
  { id: 46, name: 'Deer', baseAttack: 1, baseHealth: 1, skillLvl1: 'Faint: Summon a 5/5 Bus with Splash Attack', skillLvl2: 'Faint: Summon a 10/10 Bus with Splash Attack', skillLvl3: 'Faint: Summon a 15/15 Bus with Splash Attack', tierId: 4},
  { id: 47, name: 'Dolphin', baseAttack: 4, baseHealth: 6, skillLvl1: 'Start of battle: Deal 5 damage to the lowest health enemy', skillLvl2: 'Start of battle: Deal 10 damage to the lowest health enemy', skillLvl3: 'Start of battle: Deal 15 damage to the lowest health enemy', tierId: 4},
  { id: 48, name: 'Hippo', baseAttack: 4, baseHealth: 7, skillLvl1: 'Knock out: Gain +2/+2.', skillLvl2: 'Knock out: Gain +4/+4.', skillLvl3: 'Knock out: Gain +6/+6.', tierId: 4},
  { id: 49, name: 'Llama', baseAttack: 3, baseHealth: 6, skillLvl1: 'End turn: If you have 4 or less animals, gain +2/+2.', skillLvl2: 'End turn: If you have 4 or less animals, gain +4/+4.', skillLvl3: 'End turn: If you have 4 or less animals, gain +6/+6.', tierId: 4},
  { id: 50, name: 'Lobster', baseAttack: 4, baseHealth: 5, skillLvl1: 'Friend summoned: Give it +2/+2 when not in battle.', skillLvl2: 'Friend summoned: Give it +4/+4 when not in battle.', skillLvl3: 'Friend summoned: Give it +6/+6 when not in battle.', tierId: 4},
  { id: 51, name: 'Monkey', baseAttack: 1, baseHealth: 2, skillLvl1: 'End turn: Give right-most friend +2/+3', skillLvl2: 'End turn: Give right-most friend +4/+6', skillLvl3: 'End turn: Give right-most friend +6/+9', tierId: 5},
  { id: 52, name: 'Penguin', baseAttack: 1, baseHealth: 2, skillLvl1: 'End turn: Give other Lvl. 2 and 3 friends +1/+1', skillLvl2: 'End turn: Give other Lvl. 2 and 3 friends +2/+2', skillLvl3: 'End turn: Give other Lvl. 2 and 3 friends +3/+3', tierId: 4},
  { id: 53, name: 'Poodle', baseAttack: 2, baseHealth: 2, skillLvl1: 'End turn: Give +1/+1 to different tier animals.', skillLvl2: 'End turn: Give +2/+2 to different tier animals.', skillLvl3: 'End turn: Give +3/+3 to different tier animals.', tierId: 5},
  { id: 54, name: 'Rooster', baseAttack: 5, baseHealth: 3, skillLvl1: 'Faint: Summon a Chick with 1 health and half the Attack of this.', skillLvl2: 'Faint: Summon 2 Chicks with 1 health and half the Attack of this.', skillLvl3: 'Faint: Summon 3 Chicks with 1 health and half the Attack of this.', tierId: 4},
  { id: 55, name: 'Skunk', baseAttack: 3, baseHealth: 6, skillLvl1: 'Start of battle: Reduce the highest Health enemy by 33%.', skillLvl2: 'Start of battle: Reduce the highest Health enemy by 66%.', skillLvl3: 'Start of battle: Reduce the highest Health enemy by 100%.', tierId: 4},
  { id: 56, name: 'Squirrel', baseAttack: 2, baseHealth: 2, skillLvl1: 'Start of turn: Discount shop food by 1 gold', skillLvl2: 'Start of turn: Discount shop food by 2 gold', skillLvl3: 'Start of turn: Discount shop food by 3 gold', tierId: 4},
  { id: 57, name: 'Worm', baseAttack: 2, baseHealth: 2, skillLvl1: 'Eats shop food: Gain +1/+1', skillLvl2: 'Eats shop food: Gain +2/+2', skillLvl3: 'Eats shop food: Gain +3/+3', tierId: 4},
  { id: 58, name: 'Chicken', baseAttack: 1, baseHealth: 2, skillLvl1: 'Buy tier 1 animal: Give current and future shop animals +1/+1', skillLvl2: 'Buy tier 1 animal: Give current and future shop animals +2/+2', skillLvl3: 'Buy tier 1 animal: Give current and future shop animals +3/+3', tierId: 5},
  { id: 59, name: 'Cow', baseAttack: 4, baseHealth: 6, skillLvl1: 'Buy: Replace food shop with 2 free milk that gives +1/+2.', skillLvl2: 'Buy: Replace food shop with 2 free milk that gives +2/+4.', skillLvl3: 'Buy: Replace food shop with 2 free milk that gives +3/+6.', tierId: 5},
  { id: 60, name: 'Crocodile', baseAttack: 8, baseHealth: 4, skillLvl1: 'Start of battle: Deal 8 damage to the last enemy', skillLvl2: 'Start of battle: Deal 16 damage to the last enemy', skillLvl3: 'Start of battle: Deal 24 damage to the last enemy', tierId: 5},
  { id: 61, name: 'Eagle', baseAttack: 6, baseHealth: 5, skillLvl1: 'Faint: Summon one Lvl. 1 tier 6 animal.', skillLvl2: 'Faint: Summon one Lvl. 2 tier 6 animal.', skillLvl3: 'Faint: Summon one Lvl. 3 tier 6 animal.', tierId: 5},
  { id: 62, name: 'Goat', baseAttack: 4, baseHealth: 6, skillLvl1: 'Friend bought: Gain 1 gold.', skillLvl2: 'Friend bought: Gain 2 gold.', skillLvl3: 'Friend bought: Gain 3 gold.', tierId: 5},
  { id: 63, name: 'Microbe', baseAttack: 1, baseHealth: 1, skillLvl1: 'Faint: Make all animals Weak.', skillLvl2: 'Faint: Make all animals Weak.', skillLvl3: 'Faint: Make all animals Weak.', tierId: 4},
  { id: 64, name: 'Parrot', baseAttack: 5, baseHealth: 3, skillLvl1: 'End Turn: Copy ability from pet ahead as lvl. 1 until end of battle.', skillLvl2: 'End Turn: Copy ability from pet ahead as lvl. 2 until end of battle.', skillLvl3: 'End Turn: Copy ability from pet ahead as lvl. 3 until end of battle.', tierId: 4},
  { id: 65, name: 'Rhino', baseAttack: 5, baseHealth: 8, skillLvl1: 'Knock out: Deal 4 damage to the first enemy.', skillLvl2: 'Knock out: Deal 8 damage to the first enemy.', skillLvl3: 'Knock out: Deal 12 damage to the first enemy.', tierId: 5},
  { id: 66, name: 'Scorpion', baseAttack: 1, baseHealth: 1, skillLvl1: 'undefined', skillLvl2: 'undefined', skillLvl3: 'undefined', tierId: 5},
  { id: 67, name: 'Seal', baseAttack: 3, baseHealth: 8, skillLvl1: 'Eats shop food: Give 2 random friends +1/+1.', skillLvl2: 'Eats shop food: Give 2 random friends +2/+2.', skillLvl3: 'Eats shop food: Give 2 random friends +3/+3.', tierId: 5},
  { id: 68, name: 'Shark', baseAttack: 4, baseHealth: 4, skillLvl1: 'Friend faints: Gain +2/+1.', skillLvl2: 'Friend faints: Gain +4/+2.', skillLvl3: 'Friend faints: Gain +6/+3.', tierId: 5},
  { id: 69, name: 'Turkey', baseAttack: 3, baseHealth: 4, skillLvl1: 'Friend summoned: Give it +3/+3.', skillLvl2: 'Friend summoned: Give it +6/+6.', skillLvl3: 'Friend summoned: Give it +9/+9.', tierId: 5},
  { id: 70, name: 'Cat', baseAttack: 4, baseHealth: 5, skillLvl1: 'Food with Health and Attack effects are doubled.', skillLvl2: 'Food with Health and Attack effects are tripled.', skillLvl3: 'Food with Health and Attack effects are quadrupled.', tierId: 6},
  { id: 71, name: 'Boar', baseAttack: 8, baseHealth: 6, skillLvl1: 'Before attack: Gain +2/+2.', skillLvl2: 'Before attack: Gain +4/+4.', skillLvl3: 'Before attack: Gain +6/+6.', tierId: 6},
  { id: 72, name: 'Dragon', baseAttack: 6, baseHealth: 8, skillLvl1: 'Buy tier 1 animal: Give all friends +1/+1.', skillLvl2: 'Buy tier 1 animal: Give all friends +2/+2.', skillLvl3: 'Buy tier 1 animal: Give all friends +3/+3.', tierId: 6},
  { id: 73, name: 'Fly', baseAttack: 5, baseHealth: 5, skillLvl1: 'Friend faints: Summon a 5/5 fly in its place (Max 3 times)', skillLvl2: 'Friend faints: Summon a 10/10 fly in its place (Max 3 times)', skillLvl3: 'Friend faints: Summon a 15/15 fly in its place (Max 3 times)', tierId: 6},
  { id: 74, name: 'Gorilla', baseAttack: 6, baseHealth: 9, skillLvl1: 'Hurt: Gain Coconut Shield.', skillLvl2: 'Hurt: Gain Coconut Shield.', skillLvl3: 'Hurt: Gain Coconut Shield.', tierId: 6},
  { id: 75, name: 'Leopard', baseAttack: 10, baseHealth: 4, skillLvl1: 'Start of battle: Deal 50% Attack damage to a random enemy.', skillLvl2: 'Start of battle: Deal 50% Attack damage to 2 random enemies.', skillLvl3: 'Start of battle: Deal 50% Attack damage to 3 random enemies.', tierId: 6},
  { id: 76, name: 'Mammoth', baseAttack: 3, baseHealth: 10, skillLvl1: 'Faint: Give all friends +2/+2', skillLvl2: 'Faint: Give all friends +4/+4', skillLvl3: 'Faint: Give all friends +6/+6', tierId: 6},
  { id: 77, name: 'Octopus', baseAttack: 8, baseHealth: 8, skillLvl1: 'Level-up: Gain +8/+8.', skillLvl2: 'Level-up: Gain +8/+8 and a new ability.', skillLvl3: 'Before attack: Deal 5 damage to all enemies', tierId: 6},
  { id: 78, name: 'Sauropod', baseAttack: 4, baseHealth: 12, skillLvl1: 'Buy food: Gain 1 gold.', skillLvl2: 'Buy food: Gain 2 gold.', skillLvl3: 'Buy food: Gain 3 gold.', tierId: 6},
  { id: 79, name: 'Snake', baseAttack: 6, baseHealth: 6, skillLvl1: 'Friend ahead attacks: Deal 5 damage to a random enemy.', skillLvl2: 'Friend ahead attacks: Deal 10 damage to a random enemy.', skillLvl3: 'Friend ahead attacks: Deal 15 damage to a random enemy.', tierId: 6},
  { id: 80, name: 'Tiger', baseAttack: 4, baseHealth: 3, skillLvl1: 'The friend ahead repeats their ability in battle as if they were level 1.', skillLvl2: 'The friend ahead repeats their ability in battle as if they were level 2.', skillLvl3: 'The friend ahead repeats their ability in battle as if they were level 3.', tierId: 6},
  { id: 81, name: 'Tyrannosaurus', baseAttack: 9, baseHealth: 4, skillLvl1: 'End turn: If you have 3 or more gold, give all +2/+1', skillLvl2: 'End turn: If you have 3 or more gold, give all +4/+2', skillLvl3: 'End turn: If you have 3 or more gold, give all +6/+3', tierId: 6},
  { id: 82, name: 'Zombie Cricket', tierId: 7 },
  { id: 83, name: 'Bus', tierId: 7},
  { id: 84, name: 'Zombie Fly', tierId: 7},
  { id: 85, name: 'Dirty Rat', baseAttack: 1, baseHealth: 1, skillLvl1: 'Friend ahead attacks: Deal it 1 damage', skillLvl2: 'Friend ahead attacks: Deal it 2 damage', skillLvl3: 'Friend ahead attacks: Deal it 3 damage', tierId: 7},
  { id: 86, name: 'Chick', baseHealth: 1, tierId: 7},
  { id: 87, name: 'Ram', tierId: 7},
  { id: 88, name: 'Butterfly', baseAttack: 1, baseHealth: 1, skillLvl1: 'Copy stats of the strongest friend (highest attack and health combined).', tierId: 7},
  { id: 89, name: 'Bee', baseAttack: 1, baseHealth: 1, tierId: 7}
];

const petPackTable = [
  { petId: 1, packId: 1 },
  { petId: 1, packId: 2 },
  { petId: 2, packId: 1 },
  { petId: 2, packId: 2 },
  { petId: 3, packId: 2 },
  { petId: 4, packId: 2 },
  { petId: 5, packId: 1 },
  { petId: 5, packId: 2 },
  { petId: 6, packId: 1 },
  { petId: 7, packId: 1 },
  { petId: 7, packId: 2 },
  { petId: 8, packId: 1 },
  { petId: 9, packId: 2 },
  { petId: 10, packId: 1 },
  { petId: 10, packId: 2 },
  { petId: 11, packId: 1 },
  { petId: 12, packId: 1 },
  { petId: 12, packId: 2 },
  { petId: 13, packId: 1 },
  { petId: 13, packId: 2 },
  { petId: 14, packId: 2 },
  { petId: 15, packId: 1 },
  { petId: 16, packId: 1 },
  { petId: 17, packId: 1 },
  { petId: 17, packId: 2 },
  { petId: 18, packId: 2 },
  { petId: 19, packId: 1 },
  { petId: 20, packId: 1 },
  { petId: 20, packId: 2 },
  { petId: 21, packId: 1 },
  { petId: 21, packId: 2 },
  { petId: 22, packId: 1 },
  { petId: 22, packId: 2 },
  { petId: 23, packId: 1 },
  { petId: 23, packId: 2 },
  { petId: 24, packId: 1 },
  { petId: 24, packId: 2 },
  { petId: 25, packId: 1 },
  { petId: 25, packId: 2 },
  { petId: 26, packId: 1 },
  { petId: 26, packId: 2 },
  { petId: 27, packId: 2 },
  { petId: 28, packId: 1 },
  { petId: 29, packId: 1 },
  { petId: 29, packId: 2 },
  { petId: 30, packId: 2 },
  { petId: 31, packId: 1 },
  { petId: 32, packId: 2 },
  { petId: 33, packId: 1 },
  { petId: 34, packId: 1 },
  { petId: 35, packId: 2 },
  { petId: 36, packId: 1 },
  { petId: 37, packId: 2 },
  { petId: 38, packId: 1 },
  { petId: 38, packId: 2 },
  { petId: 39, packId: 1 },
  { petId: 39, packId: 2 },
  { petId: 40, packId: 1 },
  { petId: 40, packId: 2 },
  { petId: 41, packId: 2 },
  { petId: 42, packId: 1 },
  { petId: 42, packId: 2 },
  { petId: 43, packId: 1 },
  { petId: 44, packId: 1 },
  { petId: 44, packId: 2 },
  { petId: 45, packId: 2 },
  { petId: 46, packId: 1 },
  { petId: 46, packId: 2 },
  { petId: 47, packId: 1 },
  { petId: 47, packId: 2 },
  { petId: 48, packId: 1 },
  { petId: 49, packId: 2 },
  { petId: 50, packId: 2 },
  { petId: 51, packId: 1 },
  { petId: 52, packId: 1 },
  { petId: 53, packId: 2 },
  { petId: 54, packId: 1 },
  { petId: 54, packId: 2 },
  { petId: 55, packId: 1 },
  { petId: 55, packId: 2 },
  { petId: 56, packId: 1 },
  { petId: 56, packId: 2 },
  { petId: 57, packId: 1 },
  { petId: 57, packId: 2 },
  { petId: 58, packId: 2 },
  { petId: 59, packId: 1 },
  { petId: 59, packId: 2 },
  { petId: 60, packId: 1 },
  { petId: 61, packId: 2 },
  { petId: 62, packId: 2 },
  { petId: 63, packId: 2 },
  { petId: 64, packId: 1 },
  { petId: 65, packId: 1 },
  { petId: 65, packId: 2 },
  { petId: 66, packId: 1 },
  { petId: 66, packId: 2 },
  { petId: 67, packId: 1 },
  { petId: 67, packId: 2 },
  { petId: 68, packId: 1 },
  { petId: 69, packId: 1 },
  { petId: 70, packId: 1 },
  { petId: 71, packId: 1 },
  { petId: 71, packId: 2 },
  { petId: 72, packId: 1 },
  { petId: 72, packId: 2 },
  { petId: 73, packId: 1 },
  { petId: 74, packId: 1 },
  { petId: 74, packId: 2 },
  { petId: 75, packId: 1 },
  { petId: 75, packId: 2 },
  { petId: 76, packId: 1 },
  { petId: 76, packId: 2 },
  { petId: 77, packId: 2 },
  { petId: 78, packId: 2 },
  { petId: 79, packId: 1 },
  { petId: 80, packId: 1 },
  { petId: 80, packId: 2 },
  { petId: 81, packId: 2 },
  { petId: 82, packId: 1 },
  { petId: 82, packId: 2 },
  { petId: 83, packId: 1 },
  { petId: 83, packId: 2 },
  { petId: 84, packId: 1 },
  { petId: 85, packId: 1 },
  { petId: 85, packId: 2 },
  { petId: 86, packId: 1 },
  { petId: 86, packId: 2 },
  { petId: 87, packId: 1 },
  { petId: 87, packId: 2 },
  { petId: 88, packId: 2 },
  { petId: 89, packId: 1 },
  { petId: 89, packId: 2 }
];

module.exports = {
  packTable,
  tierTable,
  foodTable,
  foodPackTable,
  petTable,
  petPackTable
}