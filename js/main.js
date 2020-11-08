/***************************************
Create a dynamic, single-page website
***************************************/

function openTab(evt, tab_name){

  var tabcontent = document.getElementsByClassName('tabcontent');
  var tablinks = document.getElementsByClassName('tablinks');

  // Hide all pages on page load
  for(i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = 'none';
  }

  // When mobile link is clicked, hied manu and change menu icon back
  var mobilemenu = document.getElementById('mobile-menu');
  var nav = document.getElementsByClassName('navbar')[0];
  var page = document.getElementsByTagName('html')[0];
  if(mobilemenu.classList.contains('change')){
    nav.style.display = 'none';
    mobilemenu.classList.remove('change');
    page.style.overflowY = 'auto';
  }

  // Display appropriate page
   document.getElementById(tab_name).style.display = "block";

   // Scroll to top of page upon switching pages
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;



}

// Start on main page by default
document.getElementById('home').click();

/***************************************
Shrink header on scroll
***************************************/
window.onscroll = function() {resizeHeader()};

function resizeHeader(){

  var hdr = document.getElementsByTagName('header')[0];

  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    hdr.style.height = '60px';
    hdr.style.lineHeight = '60px';
    hdr.style.fontSize = '1.15em';
    document.getElementById('home').style.fontSize = '1.5em';
    document.getElementById('mobile-menu').style.marginTop = 'calc((60px - 39px)/2)';
    document.getElementById('mobile-menu').style.marginBottom = 'calc((60px - 39px)/2)';
    document.getElementsByTagName('header')[0].style.opacity = '.9';
  } else {
    hdr.style.height = '70px';
    hdr.style.lineHeight = '70px'
    hdr.style.fontSize = '1.25em';
    document.getElementById('home').style.fontSize = '1.75em';
    document.getElementById('mobile-menu').style.marginTop = 'calc((70px - 39px)/2)';
    document.getElementById('mobile-menu').style.marginBottom = 'calc((70px - 39px)/2)';
    document.getElementsByTagName('header')[0].style.opacity = '1';
  }
}

/***************************************
Mobile menu functionality
***************************************/
function expandMenu(x) {
  x.classList.toggle("change");
  var nav = document.getElementsByClassName('navbar')[0];
  var page = document.getElementsByTagName('html')[0];

  if(nav.style.display === 'block'){
    nav.style.display = 'none';
    // Enable page scrolling when nav menu is hidden
    page.style.overflowY = 'auto';
  } else {
    nav.style.display = 'block';
    // Disable page scrolling when nav manu is hidden
    page.style.overflowY = 'hidden';
  }
}

/***************************************
Randomize color scheme
***************************************/
function chooseColors(){
  // var colors = ['{"svg":"rgb(222,235,247)", "ftr":"rgb(158,202,225)", "hdr":"rgb(49,130,189)"}',
  //               '{"svg":"rgb(229,245,224)", "ftr":"rgb(161,217,155)", "hdr":"rgb(49,163,84)"}',
  //               '{"svg":"rgb(255,247,188)", "ftr":"rgb(254,196,79)", "hdr":"rgb(217,95,14)"}',
  //               '{"svg":"rgb(239,237,245)", "ftr":"rgb(188,189,220)", "hdr":"rgb(117,107,177)"}',
  //               '{"svg":"rgb(254,224,210)", "ftr":"rgb(252,146,114", "hdr":"rgb(222,45,38)"}']

  var colors = ['{"svg":"rgb(255, 255, 255)", "ftr":"rgb(99, 99, 99)", "hdr":"rgb(154, 63, 45)"}']


  // Pick a random number between 0 and 4
  // return colors[Math.floor(Math.random() * 4)]
  return colors[Math.floor(Math.random() * 1)]
}

function setColorScheme(){

  var hdr = document.getElementsByTagName('header')[0];
  var ftr = document.getElementsByTagName('footer')[0];
  var svg = document.getElementsByTagName('svg');

  hdr.style.backgroundColor = JSON.parse(colors).hdr;
  ftr.style.backgroundColor = JSON.parse(colors).ftr;

  // Make SVGs confom to color scheme
  for(i = 0; i < svg.length; i++){
    svg[i].style.fill = JSON.parse(colors).svg
  }

  // Make buttons conform to color scheme
  var buttons = document.getElementsByClassName('button');
  for(i = 0; i < buttons.length; i++){
    buttons[i].style.backgroundColor = JSON.parse(colors).hdr;
  }

}


// Button hover behavior
function buttonMouseover(elem){
  elem.style.backgroundColor = "rgb(255, 255, 255)";
  elem.style.border = "2px solid " + JSON.parse(colors).hdr;
  elem.style.color = JSON.parse(colors).hdr;
  elem.style.cursor = "pointer";
}

function buttonMouseout(elem){
  elem.style.backgroundColor = JSON.parse(colors).hdr;
  elem.style.color = "rgb(255, 255, 255)";
}

// Warn user before sending an email that it is not confidential by displaying message below email button
function confidentialityWarning(){
  // Display
  var warning = document.getElementById('ConfidentialityWarning');
  warning.style.display = "block";
}

function clinicalEmail(){
  var checkbox = document.getElementById('ConfidentialityCheckbox');

  // Prevent "unchecking" to trigger email event
  if(checkbox.checked == true){
    window.location.assign('mailto:adamkucz@uw.edu')
  }
}



// Get color scheme for website
var colors = chooseColors();

setColorScheme();
