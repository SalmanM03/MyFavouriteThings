


//Favourite Book
const favBook = {
    title:  1984,  
    author: "George Orwell",
    year:   1948,
    description:    "novel",

};

//Faourite Movie
const favMovie = {
    title: "Pirates of the caribbean",      //Attribute
    director :"abc",
    year : 2012,
    description : "action",
    actors : [
        {
            actorName: "Johnny Depp",
            roleName:"Jack Sparrow",
        },
        {
            actorName: "Keira Knightley",
            roleName:"Elizabeht Swan",
        },
        {
            actorName: "Orlando Bloom",
            roleName:"Will Turner",
        },
        {
            actorName: "aGeoffrey Rush",
            roleName:"Barbossa",
        },
        {
            actorName: "Kevin McNally",
            roleName:"Joshamee Gips",
        },

    ],
 
};

//FavouriteSeries
const favSerie ={
    title:  "Tschernobyl",
    description:   "Drama",
     actors : [
        {
            actorName: "Jared Harris",
            roleName: "Valery Legasov",
        },
        {
            actorName :"Stellan Skarsgard",
            roleName : "Boris Schtscherbina",
        },
        {
            actorName : "Paul Ritter",
            roleName :"Anatoli Djatlow",
        },
        {
            actorName : "Con O'Neil",
            roleName :"Viktor Bryukhanov",
        },
        {
            actorName : "Emily Watson",
            roleName : "Ulana Khomyuk",
        },
    ],

    director:[
        directorName="Johan Renck",
    ],

    seasons:[
        {
            season : 1,
            episode: "1, 2 ,3",
            startYear :"06.05.2019",
            endYeaer :"03.09.2019",
        },
        {
            season :2,
            episode: 20,
            startYear :"03.09.2019",
            endYeaer : "05.02.2020",
        },

    ],             

    
};
   

     //MyFavs
     const myFav = {
        book: favBook,
        movie: favMovie,
        series: favSerie,
        
        };



console.log(favBook.author);
console.log(favMovie.actors[0]);
console.log(favSerie.seasons[favSerie.seasons.length-1].episode);
console.log(favSerie.director);




for(let i = 0;i <  favSerie.seasons[favSerie.seasons.length-1].episode.length; i++){
    console.log(favSerie.seasons[favSerie.seasons.length-1]. episode[i]);

    
    
}
for(let i = 1; i <= favSerie.seasons[favSerie.seasons.length-1].episode; i++){
    console.log(i);
}




