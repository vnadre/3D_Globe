/** 3D Globe With Country Hover */

// Wait for 3000 miliseconds before auto-rotating
var rotDelayTime = 3000
// Globe scale
var globeScaleFactor = 0.9
// Autorotation speed of globe per second
var degreePerSecond = 6
// Starting position of angle
var angles = { x: -20, y: 40, z: 0}
// Globe colors of different parts
var WaterColor = '#7CBAF5'
var landColor = '#0F540B'
var graticuleColor = '#ccc'
var countryColor = '#000000'

// Country id and information map
var countryMap = new Map(); 
  
// adding some elements to the map  
countryMap.set("840", "United States Stats - Total area : 	3,796,742 km2 - Population :  325,719,178");
countryMap.set("124", "Canada Stats - Total area : 9,984,670 km2 - Population : 35,151,728 "); 
countryMap.set("036", "Australia Stats - Total area : 7,692,024 km2 - Population : 25,152,200 ");
countryMap.set("356", "INDIA Stats - Total area : 3,287,263 km2 - Population : 1,324,171,354 ");
countryMap.set("-1", "Northern Cyprus - Total area : 3,287,263 km2 - Population : 1,324,171,354 ");
countryMap.set("-2", "Kosovo - Total area : 3,287,263 km2 - Population : 1,324,171,354 ");
countryMap.set("-3", "Somaliland - Total area : 176,120 km2 - Population : 1,324,171,354 ");
countryMap.set("-1", "Northern Cyprus Stats - Total area : 3,355 km2 - Population : 326,000 ");
countryMap.set("-2", "Kosovo Stats - Total area : 10,908 km2 - Population : 1,920,079 ");
countryMap.set("-3", "Somaliland Stats - Total area : 176,120 km2 - Population : 3,508,180 ");
countryMap.set("4", "Afghanistan Stats - Total area : 652,230 km2 - Population : 31,575,018 ");
countryMap.set("8", "Albania Stats - Total area : 28,748 km2 - Population :  2,876,591 ");
countryMap.set("10", "Antarctica Stats - Total area : 14,000,000 km2 - Population :  1,106 ");
countryMap.set("12", "Algeria Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("16", "American Samoa Stats - Total area : 199 km2 - Population :  55,689 ");
countryMap.set("20", "Andorra Stats - Total area : 467.63 km2 - Population :  77,281 ");
countryMap.set("24", "Angola Stats - Total area : 1,246,700 km2 - Population :  25,789,024 ");
countryMap.set("28", "Antigua and Barbuda Stats - Total area : 440 km2 - Population :  100,963 ");
countryMap.set("31", "Azerbaijan Stats - Total area : 86,600 km2 - Population : 9,898,100 ");
countryMap.set("32", "Argentina Stats - Total area : 2,780,400 km2 - Population :  43,847,430 ");
countryMap.set("40", "Austria Stats - Total area : 83,879 km2 - Population :  8,857,960 ");
countryMap.set("44", "Bahamas Stats - Total area : 13,878 km2 - Population :  2,876,591 ");
countryMap.set("48", "Bahrain Stats - Total area : 778.3 km2 - Population :  1,425,171 ");
countryMap.set("51", "Armenia Stats - Total area : 147,570 km2 - Population :  951,560 ");
countryMap.set("52", "Barbados Stats - Total area : 447,570 km2 - Population :  2,951,560 ");
countryMap.set("56", "Belgium Stats - Total area : 97,570 km2 - Population :  62,951,560 ");
countryMap.set("60", "Bermuda Stats - Total area : 7,570 km2 - Population :  951,560 ");
countryMap.set("64", "Bhutan Stats - Total area : 147,570 km2 - Population :  162,951,560 ");
countryMap.set("68", "Bolivia, Plurinational State of Stats - Total area : 147,570 km2 - Population :  162,951,560 ");
countryMap.set("70", "Bosnia and Herzegovina Stats - Total area : 147,570 km2 - Population :  162,951,560 ");
countryMap.set("72", "Botswana Stats - Total area : 147,570 km2 - Population :  162,951,560 ");
countryMap.set("74", "Bouvet Island Stats - Total area : 147,570 km2 - Population :  162,951,560 ");
countryMap.set("76", "Brazil Stats - Total area : 147,570 km2 - Population :  162,951,560 ");
countryMap.set("84", "Belize Stats - Total area : 147,570 km2 - Population :  162,951,560 ");
countryMap.set("86", "British Indian Ocean Territory Stats - Total area : 147,570 km2 - Population :  162,951,560 ");
countryMap.set("90", "Solomon Islands Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("92", "Virgin Islands, British Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("96", "Brunei Darussalam Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("100", "Bulgaria Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("104", "Myanmar Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("108", "Burundi Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("112", "Belarus Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("116", "Cambodia Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("120", "Cameroon Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("132", "Cape Verde Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("136", "Cayman Islands Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("140", "Central African Republic Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("144", "Sri Lanka Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("148", "Chad Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("152", "Chile Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("156", "China Stats - Total area : 9,596,961 km2 - Population :  1,403,500,365 ");
countryMap.set("158", "Taiwan, Province of China Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("162", "Christmas Island Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("166", "Cocos (Keeling) Islands Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("170", "Colombia Stats - Total area : 1,141,748 km2 - Population :  49,996,445 ");
countryMap.set("174", "Comoros Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("175", "Mayotte Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("178", "Congo Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("180", "Congo, the Democratic Republic of the Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("184", "Cook Islands Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("188", "Costa Rica Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("191", "Croatia Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("192", "Cuba Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("196", "Cyprus Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("203", "Czech Republic Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("204", "Benin Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("208", "Denmark Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("212", "Dominica Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("214", "Dominican Republic Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("218", "Ecuador Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("222", "El Salvador Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("226", "Equatorial Guinea Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("231", "Ethiopia Stats - Total area : 2,381,741 km2 - Population :  42,200,000 ");
countryMap.set("232", "Eritrea Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("233", "Estonia Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("234", "Faroe Islands Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("238", "Falkland Islands (Malvinas) Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("239", "South Georgia and the South Sandwich Islands Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("242", "Fiji Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("246", "Finland Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("248", "Åland Islands Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("250", "France Stats - Total area : 640,679 km2 - Population :  67,348,000 ");
countryMap.set("254", "French Guiana Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("258", "French Polynesia Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("260", "French Southern Territories Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("262", "Djibouti Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("266", "Gabon Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("268", "Georgia Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("270", "Gambia Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("275", "Palestinian Territory, Occupied Stats - Total area : 81,741 km2 - Population :  92,200 ");
countryMap.set("276", "Germany Stats - Total area : 	357,386 km2 - Population :  82,800,000 ");
countryMap.set("288", "Ghana Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("292", "Gibraltar Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("296", "Kiribati Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("300", "Greece Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("304", "Greenland Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("308", "Grenada Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("312", "Guadeloupe Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("316", "Guam Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("320", "Guatemala Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("324", "Guinea Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("328", "Guyana Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("332", "Haiti Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("334", "Heard Island and McDonald Islands Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("336", "Holy See (Vatican City State) Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("340", "Honduras Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("344", "Hong Kong Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("348", "Hungary Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("352", "Iceland Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("360", "Indonesia Stats - Total area : 41 km2 - Population :  77200 ");
countryMap.set("364", "Iran, Islamic Republic of Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("368", "Iraq Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("372", "Ireland Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("376", "Israel Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("380", "Italy Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("384", "Côte d'Ivoire Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("388", "Jamaica Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("392", "Japan Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("398", "Kazakhstan Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("400", "Jordan Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("404", "Kenya Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("408", "Korea, Democratic People's Republic of Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("410", "Korea, Republic of Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("414", "Kuwait Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("417", "Kyrgyzstan Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("418", "Lao People's Democratic Republic Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("422", "Lebanon Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("426", "Lesotho Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("428", "Latvia Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("430", "Liberia Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("434", "Libya Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("438", "Liechtenstein Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("440", "Lithuania Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("442", "Luxembourg Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("446", "Macao Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("450", "Madagascar Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("454", "Malawi Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("458", "Malaysia Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("462", "Maldives Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("466", "Mali Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("470", "Malta Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("474", "Martinique Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("478", "Mauritania Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("480", "Mauritius Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("484", "Mexico Stats - Total area : 1,972,550 km2 - Population : 123,675,325 ");
countryMap.set("492", "Monaco Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("496", "Mongolia Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("498", "Moldova, Republic of Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("499", "Montenegro Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("500", "Montserrat Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("504", "Morocco Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("508", "Mozambiqu Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("512", "Oman Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("516", "Namibia Stats - Total area : 825,615 km2 - Population :  2,606,971 ");
countryMap.set("520", "Nauru Stats - Total area : 21 km2 - Population :  11,200 ");
countryMap.set("524", "Nepal Stats - Total area : 147,181  km2 - Population :  28,982,771 ");
countryMap.set("528", "Netherlands Stats - Total area : 41,543 km2 - Population :  17,283,008 ");
countryMap.set("531", "Curaçao Stats - Total area : 444 km2 - Population :  160,012 ");
countryMap.set("533", "Aruba Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("534", "Sint Maarten (Dutch part) Stats - Total area : 51,741 km2 - Population :  476,210 ");
countryMap.set("535", "Bonaire, Sint Eustatius and Saba Stats - Total area : 781,741 km2 - Population :  972,780 ");
countryMap.set("540", "New Caledonia Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("558", "Nicaragua Stats - Total area : 28,821 km2 - Population :  820,170 ");
countryMap.set("568", "Niger Stats - Total area : 68,021 km2 - Population :  25,160 ");
countryMap.set("554", "New Zealand Stats - Total area : 268,021 km2 - Population :  4,925,160 ");
countryMap.set("566", "Nigeria Stats - Total area : 923,768  km2 - Population :  190,886,311 ");
countryMap.set("570", "Niue Stats - Total area : 24,021 km2 - Population :  25,756 ");
countryMap.set("574", "Norfolk Island Stats - Total area : 268,021 km2 - Population :  4,925,160 ");
countryMap.set("580", "Northern Mariana Islands Stats - Total area : 	385,203 km2 - Population :  5,323,933 ");
countryMap.set("581", "United States Minor Outlying Islands Stats - Total area : 	35,403 km2 - Population :  723,900 ");
countryMap.set("583", "Micronesia, Federated States of Stats - Total area : 	385,203 km2 - Population :  5,323,933 ");
countryMap.set("584", "Micronesia, Federated States of Stats - Total area : 	765,932 km2 - Population :  786,435 ");
countryMap.set("585", "Palau Stats - Total area : 	65,873 km2 - Population :  178,323 ");
countryMap.set("586", "Pakistan Stats - Total area : 	881,913 km2 - Population : 212,742,631 ");
countryMap.set("591", "Panama Stats - Total area : 	75,417 km2 - Population :  4,034,119 ");
countryMap.set("598", "Papua New Guinea Stats - Total area : 	385,203 km2 - Population :  5,323,933 ");
countryMap.set("600", "Paraguay Stats - Total area : 	385,203 km2 - Population :  5,323,933 ");
countryMap.set("604", "Peru Stats - Total area : 	385,203 km2 - Population :  5,323,933 ");
countryMap.set("608", "Philippines Stats - Total area : 	300,000 km2 - Population :  100,981,437 ");
countryMap.set("612", "Pitcairn Stats - Total area : 	385,203 km2 - Population :  5,323,933 ");
countryMap.set("616", "Poland Stats - Total area : 	312,696 km2 - Population :  38,433,600 ");
countryMap.set("620", "Portugal Stats - Total area : 	385,203 km2 - Population :  5,323,933 ");
countryMap.set("634", "Qatar Stats - Total area : 	11,581 km2 - Population :  2,641,669 ");
countryMap.set("642", "Romania Stats - Total area : 	765,203 km2 - Population :  9,823,990 ");
countryMap.set("643", "Russian Federation Stats - Total area : 17,098,246 km2 - Population :  144,526,636");
countryMap.set("682", "Saudi Arabia Stats - Total area : 	2,149,690 km2 - Population :  33,000,000 ");
countryMap.set("702", "Singapore Stats - Total area : 	722.5 km2 - Population :  5,638,700");
countryMap.set("710", "South Africa Stats - Total area : 		1,221,037 km2 - Population : 57,725,600");
countryMap.set("716", "Zimbabwe Stats - Total area : 	390,757 km2 - Population :  16,150,362");
countryMap.set("724", "Spain Stats - Total area : 	505,990 km2 - Population :  46,710,000");
countryMap.set("729", "Sudan Stats - Total area : 	1,886,068 km2 - Population :  39,578,828");
countryMap.set("732", "Western Sahara Stats - Total area : 	266,000 km2 - Population :  538,755");
countryMap.set("752", "Sweden Stats - Total area : 	450,295 km2 - Population :  10,215,250");
countryMap.set("756", "Switzerland Stats - Total area : 	41,285 km2 - Population :  8,508,898");
countryMap.set("764", "Thailand Stats - Total area : 	513,120 km2 - Population :  68,863,514");
countryMap.set("784", "United Arab Emirates Stats - Total area : 83,600 km2 - Population :  9,599,353");
countryMap.set("792", "Turkey Stats - Total area : 	760,765 km2 - Population :  19,215,785");
countryMap.set("818", "Egypt Stats - Total area : 		1,010,408 km2 - Population :  100,124,354");
countryMap.set("826", "United Kingdom Stats - Total area : 	242,495 km2 - Population :  66,040,229");
countryMap.set("887", "Yemen Stats - Total area : 		527,968 km2 - Population :  27,584,213");
countryMap.set("818", "Egypt Stats - Total area : 		1,010,408 km2 - Population :  100,124,354");
countryMap.set("818", "Egypt Stats - Total area : 		1,010,408 km2 - Population :  100,124,354");

var infoArr = ["", "", ""];

//Functionality for data representation of Globe
function enter(country) {
  var country = countryList.find(function(c) {
    var text = countryMap.get(country.id);
    if(text && text.includes("-")){
      infoArr = countryMap.get(country.id).split("-");
    } else {
      infoArr = ["", "", ""];
    }
    if(infoArr.length === 3){
      countryInfo.text(infoArr[0]);
      area.text(infoArr[1]);
      population.text(infoArr[2]);
    }
    return c.id === country.id
  })
  current.text(country && country.name || '')
}

function leaveGlobe(country) {
  current.text('');
  countryInfo.text('');
  area.text('');
  population.text('');
}

var current = d3.select('#current')
var countryInfo = d3.select('#countryInfo')
var area = d3.select('#area')
var population = d3.select('#population')
var globeCanvas = d3.select('#globe')
var context = globeCanvas.node().getContext('2d')
var waterOnGlobe = {type: 'Sphere'}
var globeProjection = d3.geoOrthographic().precision(0.1)
var graticuleOnGlobe = d3.geoGraticule10()
var globalPath = d3.geoPath(globeProjection).context(context)
var p0 // Starting mouse position in Cartesian coordinates before dragging.
var r0 // Start of projection rotation as Euler angles.
var q0 // Starting projection rotation as versor.
var endOfTime = d3.globeNow()
var degreePerMillisecond = degreePerSecond / 1000
var globeWidth, globeHeight
var AllLand, countries
var countryList
var automaticGlobeRotate, globeNow, globeDiff, globeRoation
var currentCountry

// Handling globe functionality 
//setting angle of globe
function setAngles() {
  var rotationOfGlobe = globeProjection.rotate()
  rotationOfGlobe[0] = angles.y
  rotationOfGlobe[1] = angles.x
  rotationOfGlobe[2] = angles.z
  globeProjection.rotate(rotationOfGlobe)
}
// Scalling globe
function scale() {
  globeWidth = document.documentElement.clientWidth
  globeHeight = document.documentElement.clientHeight
  globeCanvas.attr('globeWidth', globeWidth).attr('globeHeight', globeHeight)
  globeProjection
    .scale((globeScaleFactor * Math.min(globeWidth, globeHeight)) / 2)
    .translate([globeWidth / 2, globeHeight / 2])
  render()
}
// Start globe rotation
function startRotation(delay) {
  automaticGlobeRotate.restart(rotate, delay || 0)
}

//Stop globe rotation
function stopRotation() {
  automaticGlobeRotate.stop()
}

// Start dragging globe
function dragstarted() {
  p0 = versor.cartesian(globeProjection.invert(d3.mouse(this)))
  r0 = globeProjection.rotate()
  q0 = versor(r0)
  stopRotation()
}
//Dragging of globe
function dragged() {
  var v1 = versor.cartesian(globeProjection.rotate(r0).invert(d3.mouse(this)))
  var q1 = versor.multiply(q0, versor.delta(p0, v1))
  var r1 = versor.rotationOfGlobe(q1)
  globeProjection.rotate(r1)
  render()
}

function dragended() {
  startRotation(rotDelayTime)
}
//Globe rendering
function render() {
  context.clearRect(0, 0, globeWidth, globeHeight)
  fill(waterOnGlobe, WaterColor)
  stroke(graticuleOnGlobe, graticuleColor)
  fill(AllLand, landColor)
  if (currentCountry) {
    fill(currentCountry, countryColor)
  }
}
//filling color on globe
function fill(obj, color) {
  context.beginPath()
  globalPath(obj)
  context.fillStyle = color
  context.fill()
}
//Pointing out area on globe
function stroke(obj, color) {
  context.beginPath()
  globalPath(obj)
  context.strokeStyle = color
  context.stroke()
}
//Rotation of globe
function rotate(elapsed) {
  globeNow = d3.globeNow()
  globeDiff = globeNow - endOfTime
  if (globeDiff < elapsed) {
    rotationOfGlobe = globeProjection.rotate()
    rotationOfGlobe[0] += globeDiff * degreePerMillisecond
    globeProjection.rotate(rotationOfGlobe)
    render()
  }
  endOfTime = globeNow
}

//Loading all data of counties in the world on globe
function loadData(cb) {
  //Loded Json file with location co ordinates of country areas with respective country code
  d3.json('https://unpkg.com/world-atlas@1/world/110m.json', function(error, world) {
    if (error) throw error
    //Loded .tsv file which contations all countries with respective to country their codes
    d3.tsv('https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv', function(error, countries) {
      if (error) throw error
      cb(world, countries)
    })
  })
}

// Hadling polygones
function polygonContains(polygon, point) {
  var n = polygon.length
  var p = polygon[n - 1]
  var x = point[0], y = point[1]
  var x0 = p[0], y0 = p[1]
  var x1, y1
  var inside = false
  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1]
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside
    x0 = x1, y0 = y1
  }
  return inside
}

function mousemove() {
  var c = getCountry(this)
  if (!c) {
    if (currentCountry) {
      leaveGlobe(currentCountry)
      currentCountry = undefined
      render()
    }
    return
  }
  if (c === currentCountry) {
    return
  }
  currentCountry = c
  render()
  enter(c)
}

function getCountry(event) {
  var pos = globeProjection.invert(d3.mouse(event))
  return countries.features.find(function(f) {
    return f.geometry.coordinates.find(function(c1) {
      return polygonContains(c1, pos) || c1.find(function(c2) {
        return polygonContains(c2, pos)
      })
    })
  })
}

setAngles()
globeCanvas
  .call(d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)
   )
  .on('mousemove', mousemove)

loadData(function(world, cList) {
  AllLand = topojson.feature(world, world.objects.AllLand)
  countries = topojson.feature(world, world.objects.countries)
  countryList = cList
  
  window.addEventListener('resize', scale)
  scale()
  automaticGlobeRotate = d3.timer(rotate)
})