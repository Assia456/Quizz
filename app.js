//Déroulement du quizz:

//1: On affiche la question et les réponse
//2: L'utilisateur choisie une réponse (écrit la réponse A, B, C ou D)(une seule bonne réponse)
//3: On compare la réponse attendue a la réponse de l'utilisateur
//4: On affiche si c'est la bonne réponse ou non
//5: On passe a la question suivante pour recommencer la même chose
//6: possibilité de rejouer





//Créer une fonction afficher 
//Créer une fonction question suivante

//Créer un tableau réponses et créer un tableau question

let tableauQST = [
    
        {
    question: "Quel est le panneau piste cyclable?",
    reponse: "a"
},

{
    question: "Le penneau est une obligation de:",
    reponse: "c"
},

{
    question: "Etes vous prioritaire dans cette situation ?",
    reponse: "non"
},

{
    question: "Sans presance de panneau de vitesse a combien etes vous autorisé a rouler ?",
    reponse: "80 km/h"
},

{
    question: "Quel est le mot manquant sur le panneau ?",
    reponse: "Gendarmerie"
}
]

//Créer une variable qui s'appelle réponse qui va stocker la reponse utilisateur via un propmt " question?"


let reponse = prompt(tableauQST[0].question)

//Créer une boucle qui compare la reponse de l'utilisateur a la reponse attendue

function Quizz(question) {

    tableauQST.forEach(question => {

        if (reponse === tableauQST[1].reponse) {
            console.log("Bonne réponse")
        } else {
            console.log("Presque ça...")
        }
    })
}

Quizz();