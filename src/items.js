class Item {
  constructor(name, description, value) {
    this.name = name;
    this.description = description;
    this.value = value;
    this.pickedUp = false;
  }
}

class Gold extends Item {
  constructor(name, description, amt) {
    super(
      "Zenny",
      "The form of coin currency used in the Monster Hunter series. There are multiple ways in which a hunter can retrieve zenny such as hunting or capturing game and harvesting crops, minerals, bugs, fish and selling them.",
      amt
    );
    this.amt = amt;
  }
}

class Weapon extends Item {
  constructor(name, description, value, damage) {
    super(name, description, value);
    this.damage = damage;
  }
}

class InsectGlaive extends Weapon {
  constructor(name, description, value, damage) {
    super(
      "Insect Glaive",
      "Double-ended rod capable of quick, fluid attacks that allow the hunter to jump at any time in a pole-vaulting fashion. It also is capable of summoning a Kinsect and using it to attack monsters",
      0,
      310
    );
  }
}

class HuntingHorn extends Weapon {
  constructor(name, description, value, damage) {
    super(
      "Hunting Horn",
      "Horn dealing impact damage and able to K.O. a monster when they connect with the head. Recital Ability can be combined in various ways to create various buff effects.",
      0,
      378
    );
  }
}

class HeavyBowGun extends Weapon {
  constructor(name, description, value, damage) {
    super(
      "Heavy Bow Gun",
      "Ranged weapons that deal considerable damage, but due to their size and weight, do not allow Hunters to run when drawn.",
      0,
      150
    );
  }
}
