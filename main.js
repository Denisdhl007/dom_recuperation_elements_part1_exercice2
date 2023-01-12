// // # Instructions :
// // >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 1*

// // ### 1. Stock la balise body dans une variable du nom de "myBody"

let myBody = document.getElementsByTagName("body");
console.log(myBody);

// // ### 2. Trouve une méthode pour récuperer le premier élément de "myBody" et affiche le dans un console.log

console.log(myBody[0].firstElementChild);

// // ### 3. Trouve une méthode pour récuperer le dernier élément de "myBody" et affiche le dans un console.log

console.log(myBody[0].lastElementChild);

// // ### 4. Trouve une méthode pour récuperer tous les enfants de la premiere div puis stock dans une variable "exo4" et affiche la dans un console.log

let exo4 = document.getElementsByTagName("div")[0].children;
console.log(exo4);

// // ### 5. Récupère le premier li, puis trouve une méthode JS pour afficher le second li et affiche le résultat dans un console.log

// let li = document.getElementsByTagName("li");
// console.log(li[1]);

var li = document.getElementsByTagName("li");
console.log(li[0].nextElementSibling);
console.log(li[0].firstElementChild);

// // ### 6. Récupère le second élément puis trouve une méthode JS pour afficher l'élément précédant( c'est a dire le premier li ) et affiche le résultat dans un CL


