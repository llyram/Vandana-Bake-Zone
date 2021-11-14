var header = document.getElementsByTagName("header")[0];
var footer = document.getElementsByTagName("footer")[0];

console.log("this is getting imported");

header.innerHTML = `
<div style="display:flex;">
  <img src="src/images/logo2.jpeg" style="height:70px; margin:5px;"/>
  <h1 style="margin-left:20px;">
    Vandana Bake Zone</h1>
  </div>
  <ul class="navigation-list">
    <li> <a href="index.html">Home</a> </li>
    <li> <a href="menu.html">Menu</a> </li>
    <li> <a href="gallery.html">Gallery</a></li>
    <li> <a>About Us</a> </li>
    <li> <a href="locateus.html">Locate us</a> </li>
    <li> <a href="contactus.html" > Contact Us </a> </li>
  </ul>
</div>`;

footer.innerHTML = `
<div class="column quick-links">
  <h3>QUICK LINKS</h3>
  <p><a href="menu.html">Menu</a></p><p><a href="gallery.html">Gallery</a></p>
  <p><a href="contactus.html">Contact us</a></p>
</div>
<div class="column location">
  <h3>LOCATION</h3>
  <p>A-239 Ground Floor, Kaushambi, Gaziabad, Uttar Pradesh 201012</p>
  <p>9650701892</p>
</div>
<div class="column socials">
  <h3>SOCIALS</h3>
  <div class="flex">
    <div class="icon">
      <a href="https://www.instagram.com/vandana_bakezone/" target = "_blank">
        <img src="/src/images/social_icons/instagram_icon.png" alt="" />
      </a>
    </div>
    <div class="icon">
      <a href="https://wa.me/919650701892" target = "_blank">
        <img src="/src/images/social_icons/whatsapp_icon.png" alt="" />
      </a>
    </div>
    <div class="icon">
      <a href="https://www.facebook.com/vandana_bakezone-107780798184967/" target = "_blank">
        <img src="/src/images/social_icons/facebook_icon.png" alt="" />
      </a>
    </div>
  </div>
</div>`;

var menu;

const getMenu = async () => {
  try {
    const menu = await fetch("/getmenu");
    const menuData = await menu.json();
    showMenu(menuData);

    const dryRound = await fetch("/getdryround");
    const dryRoundData = await dryRound.json();
    showDryRound(dryRoundData);

    const dryLoaf = await fetch("/getdryloaf");
    const dryLoafData = await dryLoaf.json();
    showDryLoaf(dryLoafData);

    const dryCupcakes = await fetch("/getdrycupcakes");
    const dryCupcakesData = await dryCupcakes.json();
    showDryCupcakes(dryCupcakesData);
  } catch (err) {
    console.log(err.message);
  }
};

getMenu();

const showMenu = (jsonData) => {
  // console.log(jsonData);
  let table = `<tr>
  <th>Name</th>
  <th>1/2 Kg</th>
  <th>1 Kg</th>
 </tr>`;
  for (let r of jsonData) {
    table += `<tr> 
    <td>${r.name} </td>
    <td>${r.half}</td>
    <td>${r.one}</td>     
</tr>`;
  }

  document.getElementById("basic-menu").innerHTML = table;
};

const showDryRound = (jsonData) => {
  let table = `<tr>
  <th>Name</th>
  <th>Price</th>
  </tr>`;

  for (let r of jsonData) {
    table += `<tr>
    <td>${r.name}</td>
    <td>${r.price}</td>
    </tr>`;
  }

  document.getElementById("round-cakes").innerHTML = table;
};
const showDryLoaf = (jsonData) => {
  let table = `<tr>
  <th>Name</th>
  <th>Price</th>
  </tr>`;

  for (let r of jsonData) {
    table += `<tr>
    <td>${r.name}</td>
    <td>${r.price}</td>
    </tr>`;
  }

  document.getElementById("loaf").innerHTML = table;
};
const showDryCupcakes = (jsonData) => {
  let table = `<tr>
  <th>Name</th>
  </tr>`;

  for (let r of jsonData) {
    table += `<tr>
    <td>${r.name}</td>
    </tr>`;
  }

  document.getElementById("cupcakes").innerHTML = table;
};
