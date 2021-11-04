import "./styles.css";

var header = document.getElementsByTagName("header")[0];
var footer = document.getElementsByTagName("footer")[0];

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

var poweredBy = document.getElementsByClassName("wa-chat-box-poweredby");

poweredBy.innerHTML = "";
