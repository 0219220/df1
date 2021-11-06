let sbbtn=document.getElementById('searchbarbtn');
let nextbtn=document.getElementById('nextbtn');
let previousbtn=document.getElementById('previousbtn');
var idactual=1;

sbbtn.addEventListener('click', function(){//this button activates when you press search.
$("#spinner1").removeClass("d-none")//starts spinner when you press the button
  let superheroname=document.getElementById('shsearchbar').value
fetchsuperhero(superheroname).then(function(info) {//stop the spinner
  $("#spinner1").addClass("d-none") //stops the spinner
  displaySuperhero(info.results[0])//this takes you to the function where you display the results
  if(fetchsuperhero().value=== null){//gives an error message
    $("#nullb").removeClass("d-none")//makes the error message appear
    
  }
  var blank=document.getElementById('shsearchbar').value;//this resets the searchbar
  blank.value=null;//This resets the searchbar 
  console.log(info);//this is to see if the function is working
})
});

nextbtn.addEventListener('click', function(){//this button makes the id number go up
  $("#spinner1").removeClass("d-none")
  
  idactual++  //this increments the value of the id, making it so we can access the next hero
  if(idactual=== 732){//this if is for when this is the last ID number, it makes it loop around
      idactual=0// new id value equals 0, creating a loop with the ID numbers
  }
  fetchsuperheroid(idactual).then(function(info) {//this changes the display into the new ID number
    $("#spinner1").addClass("d-none")
    displaySuperhero(info)//this displays the new superhero after pressing the next button
    console.log(info);
  })
  });
  
  previousbtn.addEventListener('click', function(){//this button is for when the user clicks on previous
    //poner un spinner
    $("#spinner1").removeClass("d-none")
    idactual--//this line makes the value of the superhero id go down
    
  if(idactual===0){//this enables the loop of the whole API 
    idactual=731
}
    fetchsuperheroid(idactual).then(function(info) {//This function makes the new superhero ID number be displayed
      $("#spinner1").addClass("d-none")
      displaySuperhero(info)
      console.log(info);
    })
    });
    


function displaySuperhero(info){//This displays the Superhero information
  $("#ID").html("ID: "+info.id) //this renders the the part of the json info that is being called, in this case its the superheros id 
  $("#Name").html("Name: "+info.name)
  
  $("#my_image").attr("src", info.image.url);//this renders the image
  $("#my_image").removeClass("d-none");//this helps so there is not an actual image in the page before hand

  $("#Full Name").html("Full Name: "+info ["full-name"])
  $("#Powerstatsc").html("Combat: "+info.powerstats.combat)
  $("#Powerstatsd").html("Durability: "+info.powerstats.durability)
  $("#Powerstatsi").html("Intelligence: "+info.powerstats.combat)
  $("#Powerstatsp").html("Power: "+info.powerstats.combat)
  $("#Powerstatssp").html("Speed: "+info.powerstats.combat)
  $("#Powerstatsst").html("Strength: "+info.powerstats.combat)
  
  $("#POB").html("Place of Birth: "+info ["place-of-birth"])
  $("#Bio").html("Occupation: "+info.work.occupation)//I replaced small biography with occupation because that object does not exist in this api
  $("#Alias").html("Alias: "+info.biography.aliases[0])
  $("#Gender").html("Gender: "+info.appearance.gender)
  $("#Race").html("Race: "+info.appearance.race)
  $("#Height").html("Height: "+info.appearance.height[1])
  $("#Weight").html("Weight: "+info.appearance.weight[1])
  $("#Eye-Color").html("Eye Color: "+info.appearance ["eye-color"])
  $("#Hair-Color").html("Hair Color: "+info.appearance ["hair-color"])
  $("#GAffilitian").html("Group Affilitions: "+info.connections ["group-affiliation"][0])

}





 
async function fetchsuperhero(superheroname){//async allows this function to turn this info into a promise
   const request = await fetch(`https://www.superheroapi.com/api.php/2210308985790156/search/${superheroname}`)//searches for the info at this address
  return await request.json();//turns the information into json object
  
}


async function fetchsuperheroid(SuperheroId){//async allows this function to turn this info into a promise
  const request = await fetch(`https://www.superheroapi.com/api.php/2210308985790156/${SuperheroId}`)
 return await request.json();//turns the information into json object
 
}

