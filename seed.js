const db = require("./models");

let stolenCar_list = [
  {
    make: "Toyota",
    model: "4Runner",
    type: "SUV",
    year: "1995",
    color: "Grey",
    licenseState: "Alaska",
    licensePlate: "GNR162",
    vin: "96177",
    lastSeenDate: "7/17/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "99502"
  },
  {
    make: "Dodge",
    model: "Charger",
    type: "4-Door",
    year: "2007",
    color: "Grey",
    licenseState: "California",
    licensePlate: "ECUAMEX",
    vin: "9525E",
    lastSeenDate: "8/2/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90650"
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "4-Door",
    year: "2012",
    color: "Black",
    licenseState: "Ohio",
    licensePlate: "GFF2781",
    vin: "55615",
    lastSeenDate: "10/28/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "43235"
  },
  {
    make: "Nissan",
    model: "240SX",
    type: "2-Door",
    year: "1997",
    color: "Green",
    licenseState: "Florida",
    licensePlate: "775QBQ",
    vin: "03434",
    lastSeenDate: "10/17/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "33483"
  },
  {
    make: "Honda",
    model: "Accord",
    type: "4-Door",
    year: "1991",
    color: "White",
    licenseState: "Nebraska",
    licensePlate: "TPP092",
    vin: "91954",
    lastSeenDate: "9/25/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "68107"
  },
  {
    make: "Honda",
    model: "CR-V",
    type: "SUV",
    year: "1998",
    color: "Light Blue",
    licenseState: "Minnesota",
    licensePlate: "166KAZ",
    vin: "99837",
    lastSeenDate: "10/16/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "55127"
  },
  {
    make: "Hyundai",
    model: "Elantra",
    type: "4-Door",
    year: "2004",
    color: "Silver",
    licenseState: "Colorado",
    licensePlate: "151613M",
    vin: "17014",
    lastSeenDate: "7/24/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "80224"
  },
  {
    make: "Honda",
    model: "Accord",
    type: "2-Door",
    year: "1996",
    color: "White",
    licenseState: "Colorado",
    licensePlate: "588XZN",
    vin: "00595",
    lastSeenDate: "10/6/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "68106"
  },
  {
    make: "Kia",
    model: "Optima",
    type: "4-Door",
    year: "2013",
    color: "Black",
    licenseState: "California",
    licensePlate: "PAPERPLATES",
    vin: "47350",
    lastSeenDate: "10/24/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90062"
  },
  {
    make: "Honda",
    model: "Accord",
    type: "4-Door",
    year: "1995",
    color: "Black",
    licenseState: "California",
    licensePlate: "3KLK378",
    vin: "31835",
    lastSeenDate: "10/7/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90040"
  },
  {
    make: "Infiniti",
    model: "I30",
    type: "4-Door",
    year: "1997",
    color: "Silver",
    licenseState: "Illinois",
    licensePlate: "S482620",
    vin: "18106",
    lastSeenDate: "10/28/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "94601"
  },
  {
    make: "Subaru",
    model: "XT",
    type: "4-Door",
    year: "2014",
    color: "White",
    licenseState: "Massachusetts",
    licensePlate: "945YJ4",
    vin: "82591",
    lastSeenDate: "11/2/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "02138"
  },
  {
    make: "Nissan",
    model: "Altima",
    type: "4-Door",
    year: "1998",
    color: "White",
    licenseState: "California",
    licensePlate: "5ZUZ389",
    vin: "07603",
    lastSeenDate: "8/11/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90746"
  },
  {
    make: "Honda",
    model: "Civic",
    type: "4-Door",
    year: "1993",
    color: "White",
    licenseState: "California",
    licensePlate: "6GWV967",
    vin: "24791",
    lastSeenDate: "10/27/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "91766"
  },
  {
    make: "Chevrolet",
    model: "Impala",
    type: "4-Door",
    year: "2004",
    color: "Silver",
    licenseState: "Texas",
    licensePlate: "CG2T352",
    vin: "74038",
    lastSeenDate: "8/30/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "76707"
  },
  {
    make: "Ford",
    model: "F250",
    type: "4-Door",
    year: "2006",
    color: "Off White/Cream",
    licenseState: "Florida",
    licensePlate: "361VEJ",
    vin: "46948",
    lastSeenDate: "10/27/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "34655"
  },
  {
    make: "Acura",
    model: "RSX",
    type: "2-Door",
    year: "2006",
    color: "Silver",
    licenseState: "California",
    licensePlate: "5TMS502",
    vin: "10361",
    lastSeenDate: "10/28/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90840"
  },
  {
    make: "Honda",
    model: "Civic",
    type: "4-Door",
    year: "1999",
    color: "Dark Green",
    licenseState: "Utah",
    licensePlate: "Y418LC",
    vin: "44391",
    lastSeenDate: "10/21/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "84123"
  },
  {
    make: "Suzuki",
    model: "Vitara",
    type: "4-Door",
    year: "2004",
    color: "White",
    licenseState: "Indiana",
    licensePlate: "E340404",
    vin: "49449",
    lastSeenDate: "10/27/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "46360"
  },
  {
    make: "Ford",
    model: "F250",
    type: "Pickup",
    year: "1999",
    color: "White",
    licenseState: "Texas",
    licensePlate: "59TKR4",
    vin: "41768",
    lastSeenDate: "10/28/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "77087"
  },
  {
    make: "Nissan",
    model: "Rogue",
    type: "Crossover",
    year: "2010",
    color: "White",
    licenseState: "Massachusetts",
    licensePlate: "284SE2",
    vin: "12432",
    lastSeenDate: "7/29/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "02149"
  },
  {
    make: "Honda",
    model: "Civic LX",
    type: "4-Door",
    year: "2014",
    color: "Dark Blue",
    licenseState: "California",
    licensePlate: "7EBL605",
    vin: "06089",
    lastSeenDate: "8/15/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "94122"
  },
  {
    make: "Honda",
    model: "Accord",
    type: "4-Door",
    year: "1997",
    color: "Charcoal",
    licenseState: "California",
    licensePlate: "6DVY828",
    vin: "54142",
    lastSeenDate: "7/16/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90241"
  },
  {
    make: "Ford",
    model: "F250",
    type: "Pickup",
    year: "2005",
    color: "Gold",
    licenseState: "Florida",
    licensePlate: "R7ARF",
    vin: "22598",
    lastSeenDate: "11/1/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "34292"
  },
  {
    make: "Cadillac",
    model: "Escalade",
    type: "SUV",
    year: "2002",
    color: "Off White/Cream",
    licenseState: "California",
    licensePlate: "5RXA224",
    vin: "66650",
    lastSeenDate: "8/12/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "92503"
  },
  {
    make: "Acura",
    model: "Integra",
    type: "4-Door",
    year: "1991",
    color: "White",
    licenseState: "California",
    licensePlate: "7AOY173",
    vin: "12601",
    lastSeenDate: "8/5/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "94110"
  },
  {
    make: "Honda",
    model: "Accord",
    type: "4-Door",
    year: "2008",
    color: "Silver",
    licenseState: "Maryland",
    licensePlate: "8BC4375",
    vin: "03123",
    lastSeenDate: "9/27/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "20746"
  },
  {
    make: "Dodge",
    model: "Ram 50 Pickup",
    type: "2-Door",
    year: "2012",
    color: "",
    licenseState: "Louisiana",
    licensePlate: "N/A",
    vin: "77345",
    lastSeenDate: "8/24/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "70806"
  },
  {
    make: "Chevrolet",
    model: "Silverado",
    type: "2-Door",
    year: "2005",
    color: "Dark Blue",
    licenseState: "California",
    licensePlate: "8R94024",
    vin: "96369",
    lastSeenDate: "8/1/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90302"
  },
  {
    make: "Subaru",
    model: "Outback",
    type: "Wagon",
    year: "2006",
    color: "Dark Blue",
    licenseState: "Virginia",
    licensePlate: "XRP-6156",
    vin: "54311",
    lastSeenDate: "8/9/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "22801"
  },
  {
    make: "Chevrolet",
    model: "Tahoe",
    type: "4-Door",
    year: "2004",
    color: "Grey",
    licenseState: "Texas",
    licensePlate: "DW8H428",
    vin: "44047",
    lastSeenDate: "8/18/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "75227"
  },
  {
    make: "Honda",
    model: "Civic",
    type: "4-Door",
    year: "2000",
    color: "Silver",
    licenseState: "California",
    licensePlate: "4HHW006",
    vin: "00309",
    lastSeenDate: "8/9/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90650"
  },
  {
    make: "Acura",
    model: "Integra",
    type: "2-Door",
    year: "1996",
    color: "White",
    licenseState: "Idaho",
    licensePlate: "K508453",
    vin: "02012",
    lastSeenDate: "10/22/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "83814"
  },
  {
    make: "Nissan",
    model: "Sentra",
    type: "4-Door",
    year: "1999",
    color: "Silver",
    licenseState: "California",
    licensePlate: "4CXT863",
    vin: "02482",
    lastSeenDate: "8/13/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "93301"
  },
  {
    make: "Chevrolet",
    model: "Impala",
    type: "4-Door",
    year: "2007",
    color: "Grey",
    licenseState: "Louisiana",
    licensePlate: "VAJ012",
    vin: "22839",
    lastSeenDate: "8/25/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "70130"
  },
  {
    make: "Honda",
    model: "Civic",
    type: "2-Door",
    year: "1997",
    color: "Black",
    licenseState: "Oregon",
    licensePlate: "486GFJ",
    vin: "07632",
    lastSeenDate: "9/16/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "97206"
  },
  {
    make: "Ford",
    model: "F250",
    type: "Pickup",
    year: "1997",
    color: "White",
    licenseState: "Colorado",
    licensePlate: "NOTSURE",
    vin: "07856",
    lastSeenDate: "10/15/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "80022"
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    type: "4-Door",
    year: "2001",
    color: "Dark Blue",
    licenseState: "Washington",
    licensePlate: "761YCS",
    vin: "07937",
    lastSeenDate: "8/22/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "98409"
  },
  {
    make: "Chevrolet",
    model: "Silverado 2500 Pickup",
    type: "Pickup",
    year: "2004",
    color: "White",
    licenseState: "California",
    licensePlate: "12443E1",
    vin: "85851",
    lastSeenDate: "7/21/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "91710"
  },
  {
    make: "Chevrolet",
    model: "1500 Pickup",
    type: "Pickup",
    year: "1990",
    color: "Black",
    licenseState: "Georgia",
    licensePlate: "PJG6162",
    vin: "27531",
    lastSeenDate: "9/4/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "30263"
  },
  {
    make: "Chrysler",
    model: "Town &amp; Country",
    type: "MiniVan",
    year: "2001",
    color: "Silver",
    licenseState: "Illinois",
    licensePlate: "S877264",
    vin: "95407",
    lastSeenDate: "9/12/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "60628"
  },
  {
    make: "Kia",
    model: "Sportage",
    type: "SUV",
    year: "2013",
    color: "Black",
    licenseState: "NorthCarolina",
    licensePlate: "BBH3169",
    vin: "50269",
    lastSeenDate: "10/12/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "28314"
  },
  {
    make: "Subaru",
    model: "Impreza",
    type: "Wagon",
    year: "2001",
    color: "White",
    licenseState: "Washington",
    licensePlate: "851-XKF",
    vin: "01869",
    lastSeenDate: "9/9/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "98133"
  },
  {
    make: "Chevrolet",
    model: "Impala",
    type: "4-Door",
    year: "2010",
    color: "Dark Blue",
    licenseState: "NewJersey",
    licensePlate: "L31CHV",
    vin: "45307",
    lastSeenDate: "9/4/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "21221"
  },
  {
    make: "Volkswagen",
    model: "Eurovan",
    type: "Van",
    year: "1966",
    color: "Grey",
    licenseState: "California",
    licensePlate: "5XHT560",
    vin: "34276",
    lastSeenDate: "8/30/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "91503"
  },
  {
    make: "Chevrolet",
    model: "Tahoe",
    type: "SUV",
    year: "2004",
    color: "Silver",
    licenseState: "California",
    licensePlate: "5LCL162",
    vin: "20340",
    lastSeenDate: "9/7/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90502"
  },
  {
    make: "Honda",
    model: "Accord",
    type: "4-Door",
    year: "1995",
    color: "Black",
    licenseState: "California",
    licensePlate: "6TIV516",
    vin: "84633",
    lastSeenDate: "8/26/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "95123"
  },
  {
    make: "Chevrolet",
    model: "Tracker",
    type: "2-Door",
    year: "2001",
    color: "Black",
    licenseState: "NorthCarolina",
    licensePlate: "CBM-1940",
    vin: "17107",
    lastSeenDate: "10/18/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "27889"
  },
  {
    make: "GMC",
    model: "Yukon",
    type: "SUV",
    year: "2006",
    color: "Green",
    licenseState: "Pennsylvania",
    licensePlate: "JMD-0531",
    vin: "38338",
    lastSeenDate: "9/9/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "19134"
  },
  {
    make: "Dodge",
    model: "Dart",
    type: "4-Door",
    year: "2013",
    color: "Orange",
    licenseState: "Minnesota",
    licensePlate: "447NJY",
    vin: "32205",
    lastSeenDate: "9/8/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "55106"
  },
  {
    make: "Chevrolet",
    model: "Impala",
    type: "4-Door",
    year: "2001",
    color: "Dark Blue",
    licenseState: "California",
    licensePlate: "4TTC484",
    vin: "69455",
    lastSeenDate: "8/28/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "94509"
  },
  {
    make: "Dodge",
    model: "2500 Pickup",
    type: "Pickup",
    year: "2002",
    color: "White",
    licenseState: "Florida",
    licensePlate: "ANZM52",
    vin: "79602",
    lastSeenDate: "9/3/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "33023"
  },
  {
    make: "Chrysler",
    model: "Town &amp; Country",
    type: "Van",
    year: "2002",
    color: "Gold",
    licenseState: "Maryland",
    licensePlate: "2BP8597",
    vin: "32498",
    lastSeenDate: "9/11/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "20743"
  },
  {
    make: "Ford",
    model: "F150",
    type: "4-Door",
    year: "2002",
    color: "Grey",
    licenseState: "Texas",
    licensePlate: "DVW2817",
    vin: "73468",
    lastSeenDate: "10/16/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "75209"
  },
  {
    make: "Chevrolet",
    model: "Silverado 1500 Pickup",
    type: "4-Door",
    year: "2011",
    color: "Silver",
    licenseState: "Louisiana",
    licensePlate: "H322461",
    vin: "43294",
    lastSeenDate: "7/25/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "70122"
  },
  {
    make: "Toyota",
    model: "Camry",
    type: "4-Door",
    year: "1996",
    color: "Tan",
    licenseState: "California",
    licensePlate: "6FQP307",
    vin: "97155",
    lastSeenDate: "10/6/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90034"
  },
  {
    make: "Chrysler",
    model: "Cirrus",
    type: "4-Door",
    year: "1998",
    color: "Black",
    licenseState: "Wisconsin",
    licensePlate: "857VDL",
    vin: "66234",
    lastSeenDate: "8/7/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "53233"
  },
  {
    make: "Ford",
    model: "Crown Victoria",
    type: "4-Door",
    year: "2006",
    color: "White",
    licenseState: "Pennsylvania",
    licensePlate: "JJJ-2201",
    vin: "15789",
    lastSeenDate: "8/27/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "19137"
  },
  {
    make: "Honda",
    model: "Accord",
    type: "4-Door",
    year: "1994",
    color: "Dark Green",
    licenseState: "Arizona",
    licensePlate: "BFX4833",
    vin: "47256",
    lastSeenDate: "9/28/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "85281"
  },
  {
    make: "Daewoo",
    model: "Leganza",
    type: "4-Door",
    year: "1999",
    color: "Black",
    licenseState: "Florida",
    licensePlate: "V110248951",
    vin: "65346",
    lastSeenDate: "8/2/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "32714"
  },
  {
    make: "Infiniti",
    model: "G35",
    type: "4-Door",
    year: "2013",
    color: "Black",
    licenseState: "Washington",
    licensePlate: "AQS5191",
    vin: "57376",
    lastSeenDate: "8/27/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "98102"
  },
  {
    make: "Subaru",
    model: "Impreza",
    type: "Hatchback",
    year: "2012",
    color: "Silver",
    licenseState: "Iowa",
    licensePlate: "400ZGK",
    vin: "19278",
    lastSeenDate: "10/8/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "84604"
  },
  {
    make: "Nissan",
    model: "Maxima",
    type: "4-Door",
    year: "2005",
    color: "Tan",
    licenseState: "Alabama",
    licensePlate: "7AA6907",
    vin: "37094",
    lastSeenDate: "8/7/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "35042"
  },
  {
    make: "Honda",
    model: "CR-V",
    type: "SUV",
    year: "2012",
    color: "White",
    licenseState: "Florida",
    licensePlate: "D658SA",
    vin: "44691",
    lastSeenDate: "7/13/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "33445"
  },
  {
    make: "Chevrolet",
    model: "Silverado 1500 Pickup",
    type: "Pickup",
    year: "1991",
    color: "Red",
    licenseState: "SouthCarolina",
    licensePlate: "HUX525",
    vin: "55347",
    lastSeenDate: "8/14/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "29697"
  },
  {
    make: "Ford",
    model: "F250",
    type: "Pickup",
    year: "1996",
    color: "White",
    licenseState: "California",
    licensePlate: "4TPT504",
    vin: "58945",
    lastSeenDate: "8/16/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "94087"
  },
  {
    make: "Hyundai",
    model: "Elantra",
    type: "4-Door",
    year: "2003",
    color: "White",
    licenseState: "NewJersey",
    licensePlate: "S60CED",
    vin: "68367",
    lastSeenDate: "7/21/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "89130"
  },
  {
    make: "Dodge",
    model: "Charger",
    type: "4-Door",
    year: "2011",
    color: "Silver",
    licenseState: "Wisconsin",
    licensePlate: "215-UKN",
    vin: "27467",
    lastSeenDate: "8/13/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "53224"
  },
  {
    make: "Honda",
    model: "Accord",
    type: "4-Door",
    year: "1994",
    color: "Tan",
    licenseState: "California",
    licensePlate: "7DDV108",
    vin: "99440",
    lastSeenDate: "9/15/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "90650"
  },
  {
    make: "Honda",
    model: "Civic",
    type: "Hatchback",
    year: "1996",
    color: "Light Green",
    licenseState: "Nevada",
    licensePlate: "246YRR",
    vin: "03472",
    lastSeenDate: "10/7/2014",
    lastSeenCity: "",
    lastSeenState: "",
    lastSeenZip: "89103"
  }
];

let user_list = [
  {
    firstName: "Addison",
    lastName: "Moore",
    username: "testUser",
    email: "testuser@email.com",
    password: "Password123",
    vehicles: []
  },
  {
    firstName: "Test",
    lastName: "User",
    username: "testUser1",
    email: "testuser1@email.com",
    password: "Password123",
    vehicles: []
  }
];

let post_list = [
  {
    title: "Test Post",
    picture: "uploads/postPics/13123.jpg",
    body:
      "This is the body of the post. This is the body of the post. This is the body of the post. This is the body of the post.",
    date: "Thurday, January 31, 2019"
  },
  {
    title: "Test Post",
    picture: "uploads/postPics/13123.jpg",
    body:
      "This is the body of the post. This is the body of the post. This is the body of the post. This is the body of the post.",
    date: "Thurday, January 31, 2019"
  },
  {
    title: "Test Post",
    picture: "",
    body:
      "This is the body of the post. This is the body of the post. This is the body of the post. This is the body of the post.",
    date: "Thurday, January 31, 2019"
  }
];

simpleCreate(db.User, user_list, "users");
simpleCreate(db.Post, post_list, "posts");
// simpleCreate(db.Comments, comment_list, "comments");
simpleCreate(db.StolenCar, stolenCar_list, "stolen cars");
// simpleCreate(db.UserVehicle, user_vehicle_list, "user vehicles");

function simpleCreate(DB, object_list, name) {
  DB.deleteMany({}, (err, objects) => {
    DB.create(object_list, (err, objects) => {
      if (err) {
        return console.log("err", err);
      }
      console.log("deleted all", name);
      console.log("created", objects.length, name);
    });
  });
}
