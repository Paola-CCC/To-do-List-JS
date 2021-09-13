
// récupération de la valeur dans le champ texte

const inputValue = document.querySelector('#task') ; 
const  submit = document.querySelector('#submit') ;
const addedList = document.querySelector('#added-list') ;
const zoneList = document.querySelector('.zoneList')


function creatNodes () {

    // On arrête l'évenement pas défaut de l'input sumbit
    let li = document.createElement('li');
    let para = document.createElement('p') ;

    let divBtn1 = document.createElement('div') ;
    let divBtn2 = document.createElement('div') ;

   

    let btn1Text = `<i class="fas fa-check" style="font-size:30px;color:white;"></i>`;
    let btn1 = divBtn1.innerHTML = btn1Text;
    let btn2Text = `<i class="far fa-trash-alt" style="font-size:30px;color:white;"></i>`;
    let btn2 = divBtn2.innerHTML = btn2Text;
    ;


    // Ajouter la class de chaque element
    li.classList.add('list') ;
    para.classList.add('notDone')

    divBtn1.classList.add('done') ;
    divBtn2.classList.add('delete') ;

   
    // Ajouter le texte
    para.textContent = inputValue.value ;
  

    // Ajouter au DOM comme dernier enfant
    li.appendChild(para)
    li.appendChild(divBtn1)
    li.appendChild(divBtn2)
    zoneList.appendChild(li)





}

submit.addEventListener('click',(event)=>{
    event.preventDefault()
    creatNodes ()

    // Fonction 2 Pour supprimer la tache sélectionnée
    let buttonDelete = document.querySelectorAll('.delete');
    for( let i = 0 ; i < buttonDelete.length ; i++){   
        buttonDelete[i].onclick = ()=>{
            zoneList.removeChild(buttonDelete[i].parentNode)

        }
    }

    // Fonction Pour modifier le style du paragraphe et de la boite qui contient le li.
    let buttonDone = document.querySelectorAll('.done');
    for( let y = 0 ; y < buttonDone.length ; y++){   
        buttonDone[y].onclick = (e)=> {

            let newPara = document.querySelectorAll('.notDone')
            newPara[y].classList.toggle('newStyle')
            newPara[y].parentNode.classList.toggle('changeBackgroundColorParentNode')
        }

    }


    inputValue.value = ' ' ;


}) ;
