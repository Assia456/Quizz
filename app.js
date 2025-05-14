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
        a:"panneau a",
        b:"panneau b",
        c:"panneau c",
        d:"panneau d",
        r:"a" 
    },

    {
        question: "Le panneau est une obligation de:",
        a:"Tourner à droite",
        b:"Tourner à gauche",
        c:"Faire demitour",
        d:"Parking",
        r:"b"
    },

    {
        question: "Qui est prioritaire dans cette situation ?",
        a:"moto A",
        b:"moto b",
        c:"vehicule c",
        d:"Il n'y pas de panneau"
    },

    {
        question: "Sans presance de panneau de vitesse a combien etes vous autorisé a rouler ?",
        a:"50 km/h",
        b:"30 km/h",
        c:"80 km/h",
        d:"20 km/h",
        r:"c"
    },

    {
        question: "Quel est le mot manquant sur le panneau ?",
        a: "Gendarmerie",
        b:"Garderie",
        c:"Prison",
        d:"Air de jeu",
        r:"a"
        
    }
]

//Créer une variable qui s'appelle réponse qui va stocker la reponse utilisateur via un propmt " question?"




//Créer une boucle qui compare la reponse de l'utilisateur a la reponse attendue

//Role:
//Parametre:
//Return:

let compter=0

function Quizz(question) {

    tableauQST.forEach(question => {
        let reponse = prompt(`${question.question} : \n
            a: ${question.a} \n
            b: ${question.b}\n
            c:${question.c}\n
            d:${question.d}
            `)
        if (reponse === question.r) {
            console.log("Bonne réponse")
            compter++
        } else {
            console.log("Presque ça...")
        }
    })

    alert(`Ton score est de ${compter}`)
}

Quizz();

