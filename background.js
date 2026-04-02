const URL_MAP = {
  "||miniblox.*assets/default-DKNlYibk.png": "https://images.weserv.nl/?url=preview.redd.it/i-love-this-minecraft-wallpaper-i-wish-there-was-an-hd-v0-kxdp36tbzucf1.jpg%3Fwidth%3D1797%26format%3Dpjpg%26auto%3Dwebp%26s%3D5daf3ac8804fa2550c0067cba2777599fdf40ae6&output=png",
  "||miniblox.*textures/entity/skeleton/skeleton.png": "https://t.novaskin.me/73b7a2afb6d85abf604f5ea0c19ba09a257c6a59999e807f95bd4c2dfc805c23",
  "||miniblox.*textures/entity/zombie/zombie.png": "https://t.novaskin.me/3eb264148ce5ab33b7f2d9a8cee7a046d09f2be5d66b492fc2f5ca8aa2f1e985",
  "||miniblox.*textures/entity/zombie_cowman/zombie_cowman.png": "https://t.novaskin.me/125eea6f8e0438b22ff7a2c6a40d050ce59da6ea477ea16df61dfc9ffa150471",
  "||miniblox.*textures/entity/creeper/creeper.png": "https://t.novaskin.me/197cf86b502c56de784b985f873af483613e0a4f22ca817ee93270e8a77bd20d",
  "||miniblox.*assets/miniblox-Dj36hMhG": "https://raw.githubusercontent.com/scratchalt/file/main/ChatGPT%20Image%20Apr%201%2C%202026%2C%2005_58_07%20PM.png?token=GHSAT0AAAAAADZKIINRVMFRIO4PZOUNVU5W2ONWOAQ"
}; // <--- THIS WAS MISSING

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
      "resourceTypes": src.endsWith(".otf") ? ["font"] :

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: rules,
    // Note: You should specify which IDs to remove specifically if you want to clear 
    // old rules, otherwise just use an empty array [] or a separate cleanup step.
    removeRuleIds: rules.map(rule => rule.id) 
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating:", chrome.runtime.lastError);
    } else {
      console.log("Rules updated successfully");
    }
