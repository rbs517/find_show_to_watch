// declare variables
let inp, selmonth, seldate, button, img;
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let actionAdventureUrls = [],
politicalDocumentariesUrls = [],
heartfeltDramasUrls = [],
socialDocumentariesFoodUrls = [],
excitingDramasUrls  = [],
comediesUrls = [],
mysteriesUrls = [],
tvDramasUrls = [],
britishComediesUrls = [],
quirkyMoviesUrls = [],
imaginativeFantasyMoviesUrls = [],
crimeDocumentariesUrls = [];

// p5.js setup function 
function setup() {
  noCanvas();

  // Create a month selection dropdown
  selmonth = createSelect();
  selmonth.id('selmonth');
  for (let i = 0; i< months.length; i++){
    selmonth.option(months[i]);
  }

  // Create a date selection dropdown
  seldate = createSelect();
  seldate.id('seldate');
  for (let i = 1; i<= 31; i++){
    seldate.option(i);
  }
  
  // Create a submit button
  button = createButton('Submit');
  button.id('button');
  button.mousePressed(mySelectEvent);

  $("h2").hide();
}


function mySelectEvent() {
  // clear the image div before adding any new ones
  document.getElementById('imgs').innerHTML = "";

  // hide these elements
  $("h2").show();
  $("h1").hide();
  $("button").hide();
  $("select").hide();

  // item is the selected month and date value
  let item = selmonth.value() + ' ' + seldate.value();
  console.log(item);
  
  // get the movie images from the json file
  $.getJSON("genres.json", function(json) {
    
    for (i = 0; i<20; i++){
      
      // cancer
      if((selmonth.value() == "June" && seldate.value() >= 22) || (selmonth.value() == "July" && seldate.value() <= 22)) {
        console.log('cancer');
        heartfeltDramasUrls = json.heartfelt_dramas[i].url;
        let src = heartfeltDramasUrls +'.png';
        img = document.createElement('img');
        img.src = src;
        document.getElementById('imgs').appendChild(img);
       
      // scorpio
      } else if((selmonth.value() == "October" && seldate.value() >= 24) || (selmonth.value() == "November" && seldate.value() <= 22)) {
        console.log('scorpio');
        politicalDocumentariesUrls = json.political_documentaries[i].url;
        let src = politicalDocumentariesUrls +'.png';
        img = document.createElement('img');
        img.src = src;
        document.getElementById('imgs').appendChild(img);
        
      // libra
      } else if((selmonth.value() == "September" && seldate.value() >= 24) || (selmonth.value() == "October" && seldate.value() <= 23)) {
        console.log('libra');
        crimeDocumentariesUrls = json.crime_documentaries[i].url;
        let src = crimeDocumentariesUrls +'.png';
        img = document.createElement('img');
        img.src = src;
        document.getElementById('imgs').appendChild(img);
      
      // sagittarius
      } else if((selmonth.value() == 'November' && seldate.value() >= 23) || (selmonth.value() == 'December' && seldate.value() <= 21)) {
        console.log('sagittarius');
        comediesUrls = json.comedies[i].url;
        let src = comediesUrls +'.png';
        img = document.createElement('img');
        img.src = src;
        document.getElementById('imgs').appendChild(img);
      
      // virgo
      } else if((selmonth.value() == "August" && seldate.value() >= 24) || (selmonth.value() == "September" && seldate.value() <= 23)) {
        console.log('virgo');
        mysteriesUrls = json.mysteries[i].url;
        let src = mysteriesUrls +'.png';
        img = document.createElement('img');
        img.src = src;
        document.getElementById('imgs').appendChild(img); 

      // leo
      } else if((selmonth.value() == "July" && seldate.value() >= 23) || (selmonth.value() == "August" && seldate.value() <= 23)) {
        console.log('leo');
        tvDramasUrls = json.tv_dramas[i].url;
        let src = tvDramasUrls +'.png';
        img = document.createElement('img');
        img.src = src;
        document.getElementById('imgs').appendChild(img);   

      // gemini  
      } else if((selmonth.value() == "May" && seldate.value() >= 21) || (selmonth.value() == "June" && seldate.value() <= 20)) {
        console.log('gemini');
        excitingDramasUrls = json.exciting_dramas[i].url;
        let src = excitingDramasUrls +'.png';
        img = document.createElement('img');
        img.src = src;
        document.getElementById('imgs').appendChild(img);

      // taurus
      } else if((selmonth.value() == "April" && seldate.value() >= 21) || (selmonth.value() == "May" && seldate.value() <= 20)) {
        console.log('taurus');
        socialDocumentariesFoodUrls = json.social_cultural_documentaries_about_food[i].url;
        let src = socialDocumentariesFoodUrls +'.png';
        img = document.createElement('img');
        img.src = src;
        document.getElementById('imgs').appendChild(img); 

      // aries
      } else if((selmonth.value() == 'March' && seldate.value() >= 21) || (selmonth.value() == 'April' && seldate.value() <= 20)) {
        console.log('aries');
        actionAdventureUrls.push(json.action_and_adventure[i].url);
        let srcs = actionAdventureUrls[i] +'.png';
        img = document.createElement('img');
        img.src = srcs;
        document.getElementById('imgs').appendChild(img); 

       // pisces
       } else if((selmonth.value() == 'February' && seldate.value() >= 19) || (selmonth.value() == 'March' && seldate.value() <= 20)) {
        console.log('pisces');
        imaginativeFantasyMoviesUrls.push(json.imaginative_fantasy_movies[i].url);
        let srcs = imaginativeFantasyMoviesUrls[i] +'.png';
        img = document.createElement('img');
        img.src = srcs;
        document.getElementById('imgs').appendChild(img);

      // aguarius
      } else if ((selmonth.value() == 'January' && seldate.value() >= 21) || (selmonth.value() == 'February' && seldate.value() <= 18)) {
        console.log('aquarius');
        quirkyMoviesUrls.push(json.quirky_movies[i].url);
        let srcs = quirkyMoviesUrls[i] +'.png';
        img = document.createElement('img');
        img.src = srcs;
        document.getElementById('imgs').appendChild(img);

      // capricorn
      } else if ((selmonth.value() == 'January' && seldate.value() <= 20) || (selmonth.value() == 'December' && seldate.value() >=22)) {
        console.log('capricorn');
        britishComediesUrls.push(json.british_comedies[i].url);
        let srcs = britishComediesUrls[i] +'.png';
        img = document.createElement('img');
        img.src = srcs;
        document.getElementById('imgs').appendChild(img);
      }
    }

  });
}

// p5.js draw loop 
function draw() {

}