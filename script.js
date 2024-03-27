//TASK 
//1 create your own resume data in json format
 var  resume={
   
      "name":"Abirami",
      "lastname":"Nagaraj",
      "email":"abiramminagaraj22@gmail.com",
      "phonenumber":"6382386127",
      "miniproject":  "PREPARATION OF PECTIN FROM CITRUS FRUIT'S PEELS",
    "education": ["Amala high school", "Kariyapatti","10th","7.5"],
    "education1": ["SBK girl heigher secondary school","Aruppukottai", "12th", "7.9", ],  
    "education2": ["Sethu Institute Of Technology","Madurai","B.Tech Chemical enginnering","7",], 
     "AREAOFINTEREST" :["Wast water treatment","Mass transfer"],
    " WORKSHOP ATTENDED" :"Participated in three day workshop on 3D PRINTING AND BATTERY TESTING",
    "INPLANT TRAINING ATTENDED":"Attended inplant training in AMMONIA PLANT at SPIC",
    "INDUSTRIAL EXPOSURES" :["IDHAYAM SESAME OIL PLANT,Virudhunagar","SPIC AGRO BIOTECH CENTRE,tuticorin","SESHAYEE PAPER AND BOARDS Ltd,Erode"],
     "INTEREST AND HOBBIES" :["Reading Tamil History Books","Hearing Music"],
    "PERSONAL STRENGTH":[" Confidence", "Teambonding"],
    "Languages":["tamil"," english","Telungu"],
    "skills":["teamponding","leadership","communication"],

}
 
// 2 For The Above JSOn,iterate over all for loops(for,for in,for of,forEach)
console.log(resume);
console.log(resume.name);
console.log(resume.email);

// using for loop
for (var i=0;i<resume.skills.length;i++)
{
    console.log(resume.skills[i]);
}

//using for in loop

for (var key in resume)
{
    console.log(resume[key]);
}

//using for of loop

const data=Object.entries(resume)
for (var [key,value] of data)
{
    console.log(key,value);
}

//using for each loop

  data.forEach(ele => {
    const [key, value] = ele;
    console.log(key, value);
  });






   
   


   

   