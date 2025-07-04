
const skins = [
  {
    name: "AK-47 | Redline",
    image: "images/ak47-redline.png",
    rarity: "Classified",
    price: "15€"
  },
  {
    name: "AWP | Asiimov",
    image: "images/awp-asiimov.png",
    rarity: "Covert",
    price: "70€"
  }
];

const container = document.getElementById("skin-list");
skins.forEach(skin => {
  const div = document.createElement("div");
  div.className = "skin-card";
  div.innerHTML = `<img src="${skin.image}" alt="${skin.name}">
                   <div>
                     <h3>${skin.name}</h3>
                     <p>Rareté : ${skin.rarity}</p>
                     <p>Prix : ${skin.price}</p>
                   </div>`;
  container.appendChild(div);
});
