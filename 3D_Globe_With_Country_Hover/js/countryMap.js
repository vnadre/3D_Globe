// Country id and information map
var countryMap = new Map(); 
  
// Adding map for country Id and country Statistics 
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
countryMap.set("68", "Bolivia, Plurinational State of Stats - Total area : 1,098,581 km2 - Population :  11,248,864 ");
countryMap.set("70", "Bosnia and Herzegovina Stats - Total area : 51,129 km2 - Population :  3,511,372 ");
countryMap.set("72", "Botswana Stats - Total area : 581,730 km2 - Population :  2,250,260 ");
countryMap.set("74", "Bouvet Island Stats - Total area : 49 km2 - Population :  0 ");
countryMap.set("076", "Brazil Stats - Total area : 8,515,767 km2 - Population :  210,147,125 ");
countryMap.set("84", "Belize Stats - Total area : 22,966 km2 - Population :  387,879 ");
countryMap.set("86", "British Indian Ocean Territory Stats - Total area : 54,400 km2 - Population :  c.2,500 ");
countryMap.set("90", "Solomon Islands Stats - Total area : 28,400 km2 - Population :  599,419 ");
countryMap.set("92", "Virgin Islands, British Stats - Total area : 	153 km2 - Population :  31,758 ");
countryMap.set("96", "Brunei Darussalam Stats - Total area : 	5,765 km2 - Population :  	417,200 ");
countryMap.set("100", "Bulgaria Stats - Total area : 110,993.6 km2 - Population :  7,050,034 ");
countryMap.set("104", "Myanmar Stats - Total area : 	676,578 km2 - Population :  53,582,855 ");
countryMap.set("108", "Burundi Stats - Total area : 	27,834 km2 - Population :  	10,524,117 ");
countryMap.set("112", "Belarus Stats - Total area : 	207,595 km2 - Population :  9,491,800 ");
countryMap.set("116", "Cambodia Stats - Total area : 	181,035 km2 - Population :  16,245,729 ");
countryMap.set("120", "Cameroon Stats - Total area : 475,442 km2 - Population :  23,439,189 ");
countryMap.set("132", "Cape Verde Stats - Total area : 	4,033 km2 - Population :  539,560 ");
countryMap.set("136", "Cayman Islands Stats - Total area : 	264 km2 - Population :  60,765 ");
countryMap.set("140", "Central African Republic Stats - Total area : 	622,984 km2 - Population :  4,594,621 ");
countryMap.set("144", "Sri Lanka Stats - Total area : 	65,610 km2 - Population :  	21,670,000 ");
countryMap.set("148", "Chad Stats - Total area : 	1,284,000 km2 - Population :  13,670,084 ");
countryMap.set("152", "Chile Stats - Total area : 756,096.3 km2 - Population :  17,574,003 ");
countryMap.set("156", "China Stats - Total area : 9,596,961 km2 - Population :  1,403,500,365 ");
countryMap.set("158", "Taiwan, Province of China Stats - Total area : 	35,581 km2 - Population :  23,580,000 ");
countryMap.set("162", "Christmas Island Stats - Total area : 135 km2 - Population :  	1,843 ");
countryMap.set("166", "Cocos (Keeling) Islands Stats - Total area : 14 km2 - Population :  544 ");
countryMap.set("170", "Colombia Stats - Total area : 1,141,748 km2 - Population :  49,996,445 ");
countryMap.set("174", "Comoros Stats - Total area : 	2,034 km2 - Population :  	1,008,246 ");
countryMap.set("175", "Mayotte Stats - Total area : 374 km2 - Population :  201,234 ");
countryMap.set("178", "Congo Stats - Total area : 2,345,409 km2 - Population :  78,736,153 ");
countryMap.set("180", "Congo, the Democratic Republic of the Stats - Total area : 	2,345,409 km2 - Population :  78,736,153 ");
countryMap.set("184", "Cook Islands Stats - Total area : 	236.7 km2 - Population :  17,379 ");
countryMap.set("188", "Costa Rica Stats - Total area : 	51,100 km2 - Population :  4,857,274 ");
countryMap.set("191", "Croatia Stats - Total area : 	56,594 km2 - Population :  4,154,200 ");
countryMap.set("192", "Cuba Stats - Total area :	109,884 km2 - Population :  11,221,060 ");
countryMap.set("196", "Cyprus Stats - Total area : 	9,251 km2 - Population :  1,170,125 ");
countryMap.set("203", "Czech Republic Stats - Total area : 	78,866 km2 - Population :  10,610,947 ");
countryMap.set("204", "Benin Stats - Total area : 	114,763 km2 - Population :  10,872,298 ");
countryMap.set("208", "Denmark Stats - Total area : 42,933 km2 - Population :  5,806,015 ");
countryMap.set("212", "Dominica Stats - Total area : 750 km2 - Population :  	73,543 ");
countryMap.set("214", "Dominican Republic Stats - Total area : 	48,671  km2 - Population :  	10,735,896");
countryMap.set("218", "Ecuador Stats - Total area : 283,561 km2 - Population :  16,385,068 ");
countryMap.set("222", "El Salvador Stats - Total area : 21,041 km2 - Population :  6,344,722 ");
countryMap.set("226", "Equatorial Guinea Stats - Total area : 	28,050 km2 - Population :  1,221,490 ");
countryMap.set("231", "Ethiopia Stats - Total area : 1,104,300 km2 - Population :  102,403,196 ");
countryMap.set("232", "Eritrea Stats - Total area : 117,600 km2 - Population :  4,954,645 ");
countryMap.set("233", "Estonia Stats - Total area : 45,227 km2 - Population :  1,319,133 ");
countryMap.set("234", "Faroe Islands Stats - Total area : 1,399 km2 - Population :  51,095 ");
countryMap.set("238", "Falkland Islands (Malvinas) Stats - Total area : 12,200 km2 - Population :  3,398 ");
countryMap.set("239", "South Georgia and the South Sandwich Islands Stats - Total area :3,903 km2 - Population :  35 ");
countryMap.set("242", "Fiji Stats - Total area : 	18,274 km2 - Population :  912,241 ");
countryMap.set("246", "Finland Stats - Total area : 338,424 km2 - Population :  5,520,535 ");
countryMap.set("248", "Åland Islands Stats - Total area : 	338,424 km2 - Population :  5,520,535 ");
countryMap.set("250", "France Stats - Total area : 640,679 km2 - Population :  67,348,000 ");
countryMap.set("254", "French Guiana Stats - Total area : 	83,534  km2 - Population :  281,612 ");
countryMap.set("258", "French Polynesia Stats - Total area : 	4,167 km2 - Population :  275,918 ");
countryMap.set("260", "French Southern Territories Stats - Total area : 439,781 km2 - Population :  0 ");
countryMap.set("262", "Djibouti Stats - Total area : 	23,200 km2 - Population :  942,333 ");
countryMap.set("266", "Gabon Stats - Total area : 	267,667 km2 - Population :  1,979,786 ");
countryMap.set("268", "Georgia Stats - Total area : 	69,700 km2 - Population :  3,718,200 ");
countryMap.set("270", "Gambia Stats - Total area : 	10,689 km2 - Population :  2,051,363 ");
countryMap.set("275", "Palestinian Territory, Occupied Stats - Total area : 6,220  km2 - Population :  4,550,000 ");
countryMap.set("276", "Germany Stats - Total area : 357,386 km2 - Population :  82,800,000 ");
countryMap.set("288", "Ghana Stats - Total area : 	239,567 km2 - Population :  28,308,301 ");
countryMap.set("292", "Gibraltar Stats - Total area : 6.7 km2 - Population :  32,194 ");
countryMap.set("296", "Kiribati Stats - Total area : 811 km2 - Population :  110,136 ");
countryMap.set("300", "Greece Stats - Total area : 131,957 km2 - Population :  10,768,477");
countryMap.set("304", "Greenland Stats - Total area : 2,166,086 km2 - Population :  55,877 ");
countryMap.set("308", "Grenada Stats - Total area : 348.5 km2 - Population :  107,317 ");
countryMap.set("312", "Guadeloupe Stats - Total area : 	1,628 km2 - Population :  402,119 ");
countryMap.set("316", "Guam Stats - Total area : 	210 km2 - Population :  162,742 ");
countryMap.set("320", "Guatemala Stats - Total area : 	108,889 km2 - Population :  17,263,239 ");
countryMap.set("324", "Guinea Stats - Total area : 	245,836 km2 - Population :  12,395,924 ");
countryMap.set("328", "Guyana Stats - Total area : 31,541 km2 - Population :  672,200 ");
countryMap.set("332", "Haiti Stats - Total area : 89,761 km2 - Population :  122,569 ");
countryMap.set("334", "Heard Island and McDonald Islands Stats - Total area : 741 km2 - Population :  356,876 ");
countryMap.set("336", "Holy See (Vatican City State) Stats - Total area : 41 km2 - Population :  78,200 ");
countryMap.set("340", "Honduras Stats - Total area : 1,741 km2 - Population :  97,220 ");
countryMap.set("344", "Hong Kong Stats - Total area : 	1,108 km2 - Population :  7,448,900");
countryMap.set("348", "Hungary Stats - Total area : 	93,030 km2 - Population :  9,797,561");
countryMap.set("352", "Iceland Stats - Total area : 	102,775 km2 - Population :  355,620 ");
countryMap.set("360", "Indonesia Stats - Total area : 41 km2 - Population :  77200 ");
countryMap.set("364", "Iran, Islamic Republic of Stats - Total area : 1,648,195 km2 - Population :  81,672,300 ");
countryMap.set("368", "Iraq Stats - Total area : 	437,072  km2 - Population :  37,202,572 ");
countryMap.set("372", "Ireland Stats - Total area : 84,421 km2 - Population :  6,572,728 ");
countryMap.set("376", "Israel Stats - Total area : 22,072 km2 - Population :  8,961,550 ");
countryMap.set("380", "Italy Stats - Total area : 	301,340 km2 - Population :  60,483,973 ");
countryMap.set("384", "Côte d'Ivoire Stats - Total area : 34,741 km2 - Population :  752,200 ");
countryMap.set("388", "Jamaica Stats - Total area : 9,741 km2 - Population :  902,200 ");
countryMap.set("392", "Japan Stats - Total area : 377,973 km2 - Population :  126,440,000 ");
countryMap.set("398", "Kazakihstan Stats - Total area : 	2,724,900  km2 - Population :  18,311,700 ");
countryMap.set("400", "Jordan Stats - Total area : 65,741 km2 - Population :  452,587 ");
countryMap.set("404", "Kenya Stats - Total area : 23,456 km2 - Population :  23,876,89 ");
countryMap.set("408", "Korea, D.P.R Stats - Total area : 120,540 km2 - Population :  25,368,620 ");
countryMap.set("410", "Korea, Republic of Stats - Total area : 100,363 km2 - Population :  51,446,201 ");
countryMap.set("414", "Kuwait Stats - Total area : 	17,818  km2 - Population : 4,052,584 ");
countryMap.set("417", "Kyrgyzstan Stats - Total area : 51,741 km2 - Population :  8,772,200 ");
countryMap.set("418", "Lao People's Democratic Republic Stats - Total area : 4,561 km2 - Population :  456,700 ");
countryMap.set("422", "Lebanon Stats - Total area : 45,741 km2 - Population :  34,567,890 ");
countryMap.set("426", "Lesotho Stats - Total area : 10,901 km2 - Population :  123,020 ");
countryMap.set("428", "Latvia Stats - Total area : 20,453 km2 - Population :  567,987 ");
countryMap.set("430", "Liberia Stats - Total area : 81,744 km2 - Population :  992,211 ");
countryMap.set("434", "Libya Stats - Total area : 45,741 km2 - Population :  982,866 ");
countryMap.set("438", "Liechtenstein Stats - Total area : 1,761 km2 - Population :  572,202 ");
countryMap.set("440", "Lithuania Stats - Total area : 7,005 km2 - Population :  70,008 ");
countryMap.set("442", "Luxembourg Stats - Total area : 19,098 km2 - Population :  3,765,098 ");
countryMap.set("446", "Macao Stats - Total area : 115.3 km2 - Population :  650,900 ");
countryMap.set("450", "Madagascar Stats - Total area : 587,041 km2 - Population :  24,894,551 ");
countryMap.set("454", "Malawi Stats - Total area : 118,484 km2 - Population :   18,091,575 ");
countryMap.set("458", "Malaysia Stats - Total area : Malaysia km2 - Population :  32,049,700 ");
countryMap.set("462", "Maldives Stats - Total area : 298 km2 - Population :  427,756 ");
countryMap.set("466", "Mali Stats - Total area : 1,240,192 km2 - Population :  19,329,841 ");
countryMap.set("470", "Malta Stats - Total area : 81,761 km2 - Population :  72,980 ");
countryMap.set("474", "Martinique Stats - Total area : 1,128 km2 - Population :  385,551 ");
countryMap.set("478", "Mauritania Stats - Total area : 1,030,000 km2 - Population :  4,301,018 ");
countryMap.set("480", "Mauritius Stats - Total area : 	2,040 km2 - Population :  1,262,132 ");
countryMap.set("484", "Mexico Stats - Total area : 1,972,550 km2 - Population : 123,675,325 ");
countryMap.set("492", "Monaco Stats - Total area : 2.020 km2 - Population :  38,400 ");
countryMap.set("496", "Mongolia Stats - Total area : 1,566,000 km2 - Population :  3,081,677 ");
countryMap.set("498", "Moldova, Republic of Stats - Total area : 33,846 km2 - Population :  3,350,900 ");
countryMap.set("499", "Montenegro Stats - Total area : 13,812 km2 - Population :  678,326 ");
countryMap.set("500", "Montserrat Stats - Total area : 102 km2 - Population :  4,900 ");
countryMap.set("504", "Morocco Stats - Total area : 710,850 km2 - Population :  35,740,000 ");
countryMap.set("508", "Mozambiqu Stats - Total area : 1,741 km2 - Population :  772,200 ");
countryMap.set("512", "Oman Stats - Total area : 309,500 km2 - Population :  4,424,762 ");
countryMap.set("516", "Namibia Stats - Total area : 825,615 km2 - Population :  2,606,971 ");
countryMap.set("520", "Nauru Stats - Total area : 21 km2 - Population :  11,200 ");
countryMap.set("524", "Nepal Stats - Total area : 147,181  km2 - Population :  28,982,771 ");
countryMap.set("528", "Netherlands Stats - Total area : 41,543 km2 - Population :  17,283,008 ");
countryMap.set("531", "Curaçao Stats - Total area : 444 km2 - Population :  160,012 ");
countryMap.set("533", "Aruba Stats - Total area : 71,741 km2 - Population :  772,200 ");
countryMap.set("534", "Sint Maarten (Dutch part) Stats - Total area : 51,741 km2 - Population :  476,210 ");
countryMap.set("535", "Bonaire, Sint Eustatius and Saba Stats - Total area : 781,741 km2 - Population :  972,780 ");
countryMap.set("540", "New Caledonia Stats - Total area : 81,001 km2 - Population :  972,276 ");
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
countryMap.set("862", "Venezuela, Bolivarian Republic of Stats - Total area : 	916,445  km2 - Population :  31,568,179");
countryMap.set("578", "Norway Stats - Total area : 		385,203 km2 - Population :  5,323,933");
countryMap.set("728", "South Sudan Stats - Total area : 619,745 km2 - Population :  12,230,730");
countryMap.set("860", "Uzbekistan Stats - Total area : 448,978 km2 - Population :  32,979,000");
