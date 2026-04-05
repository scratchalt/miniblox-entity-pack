const URL_MAP = {
  "||miniblox.*assets/default-DKNlYibk.png": "https://images.weserv.nl/?url=preview.redd.it/i-love-this-minecraft-wallpaper-i-wish-there-was-an-hd-v0-kxdp36tbzucf1.jpg%3Fwidth%3D1797%26format%3Dpjpg%26auto%3Dwebp%26s%3D5daf3ac8804fa2550c0067cba2777599fdf40ae6&output=png",
  "||miniblox.*textures/entity/skeleton/skeleton.png": "https://t.novaskin.me/73b7a2afb6d85abf604f5ea0c19ba09a257c6a59999e807f95bd4c2dfc805c23",
  "||miniblox.*textures/entity/zombie/zombie.png": "https://t.novaskin.me/3eb264148ce5ab33b7f2d9a8cee7a046d09f2be5d66b492fc2f5ca8aa2f1e985",
  "||miniblox.*textures/entity/zombie_cowman/zombie_cowman.png": "https://t.novaskin.me/125eea6f8e0438b22ff7a2c6a40d050ce59da6ea477ea16df61dfc9ffa150471",
  "||miniblox.*textures/entity/creeper/creeper.png": "https://t.novaskin.me/197cf86b502c56de784b985f873af483613e0a4f22ca817ee93270e8a77bd20d",
  "||miniblox.*textures/entity/cow/cow.png": "https://t.novaskin.me/1b03bfd74adb4c351bf52a5536e313fd5a69485c73be711913b74563cfc4232a",
  "||miniblox.*textures/entity/pig/pig.png": "https://t.novaskin.me/9b46029e0cefccf776713597eb7af640c62b2a36ce77d489f058ac19129f951a",
  "||miniblox.*textures/entity/sheep/sheep.png": "https://t.novaskin.me/c76eec0b81b4f2f3f3e4b8bc81ad097ad59e06ef0bfcad3be6cdb862de4091a2",
  "||miniblox.*textures/entity/spider/spider.png": "https://t.novaskin.me/5399decde2bea8ca18b413ea3832773447fc32ed8cc22ce7f9bffcd6c381a74f",
  "||miniblox.*textures/entity/chicken/chicken.png": "https://t.novaskin.me/22c166eb5c1c07e2dc30ce30f393b252fe5943d7c9c5f648fcd036335c230747",
  "||miniblox.*textures/entity/ghost/ghost.png": "https://t.novaskin.me/93dd9e2a6b60228acc62c70e418e5dbcd2a9b1353374ab3b95305a0201f42afb",
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": {
      "type": "redirect",
      "redirect": { "url": dst }
    },
    "condition": {
      "urlFilter": src,
      "resourceTypes": src.endsWith(".otf") ? ["font"] : ["image"]
    }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: rules,
    removeRuleIds: rules.map(rule => rule.id)
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating:", chrome.runtime.lastError);
    } else {
      console.log("Rules has been updated!");
    }
  }
);
