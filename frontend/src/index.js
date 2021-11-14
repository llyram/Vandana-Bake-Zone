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
      <img src="/src/images/social_icons/instagram_icon.png" alt="" />
    </div>
    <div class="icon">
      <img src="/src/images/social_icons/whatsapp_icon.png" alt="" />
    </div>
    <div class="icon">
      <img src="/src/images/social_icons/facebook_icon.png" alt="" />
    </div>
  </div>
</div>`;

var menu;

const getMenu = async () => {
  try {
    const response = await fetch("/getmenu");
    const jsonData = await response.json();
    console.log(jsonData);
    show(jsonData);
  } catch (err) {
    console.log(err.message);
  }
};

getMenu();

const show = (jsonData) => {
  // console.log(jsonData);
  let list = `<tr>
  <th>Name</th>
  <th>1/2 Kg</th>
  <th>1 Kg</th>
 </tr>`;
  for (let r of jsonData) {
    list += `<tr> 
    <td>${r.name} </td>
    <td>${r.half}</td>
    <td>${r.one}</td>     
</tr>`;
  }

  document.getElementById("basic-menu").innerHTML = list;
};

// console.log(menu);
