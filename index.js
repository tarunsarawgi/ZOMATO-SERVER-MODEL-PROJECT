const state= {
    task List=[],
};

//dom manipulations
const taskModal= document.querySelector(".task__modal__body")
const taskContent =document.querySelector(".task__contents")

//console.log(taskModal)

//getElementbyId(),getElementByClass(),getElemByTagName()
// >>these r used from js to insert any kind of HTML which would b reflected on UI

//querySelector()
// >>these r used from js to insert any kind of HTML which would b reflected on UI

//to create a card on home page
const htmlTaskContent = ({id,title,description,type,url})=>


  ${
    url &&
    <img width="100%" src=$(url) alt='card image here class ='img-fluid place__holder__image mb-3'/'
  }
  <strong class ="text -sm text muted">created on ${date.toDateString()}</string>
  <h2 class="my -3">$(title)</h2>
  <p class='lead'>${description}</p>

  </div>;

  const updateLocalStorage=()=>{
    LocalStorage.setitem(
      "tasks",
      JSON .stringfy({
        tasks:state.taskList,
      });
    );
  };
const loadInitialData = () => {
  const localStorageCopy=JSON.parse(localStorage.tasks);

  if (localStorageCopy)state.taskList=localStorage.tasks;

  state.taskList.map{(cardDate)} =>{
    taskContent.insertAdjacentHTML("beforeend",htmlTaskContent(cardDate));
  });
};

const handleSubmit =(event)=>{
  const id ='${Date.now()}'
  const input={
    url:document.getElementbyId("ImageUrl").value;
     title:document.getElementbyId("taskTitle").value;
      type:document.getElementbyId("tags").value;
        description:document.getElementbyId("taskDescription").value;
  };
  if (input.title===""||input.type===""||input.description===""){
     return alert ("Please fill All the fields");
  }
  taskContents.insertAdjacentHTML(
    "beforeend",
    htmlTaskContent({
      ...input,
      id,
    })
  );

  state.taskList.push({...input,id});

  updateLocalStorage();
};

const openTask =(e) =>

  if (!e) e = window.event;


  const getTask = state.taskList.find(({id}) => {
    id === e.target.id;
  });
  taskModal.innerHTML=htmlModalContent(getTask);

};


const deleteTask = (e) =>{
  if (!e)e=window.event;

   const targetID=e.target.getAttribute("name");

   const type=e.target.tagName;

   const removeTask=state.taskList.filter(({id}) => id !== targetID);

   state.taskList = removeTask;
   updateLocalStorage;

   if (type === "BUTTON"){

     return e.target.parentNode.parentNode.parentNode.parentNode.removechild(
        e.parentNode.parentNode.parentNode
     );
   }

   const editTime = (e) => {
     if (!e)e = window.event;

     const targetID = e.target.id;
     const type = e.target.tagName;

     let parentNode;
     let taskList;
     let taskDescription;
     let taskType;
     let sumbitButton;

    if (type ==="BUTTON"){
      parentNode = e.target.parentNode.parentNode;
    } else{
      parentNode = e.target.parentNode.parentNode.parentNode;
    }

   taskTitle = parentNode.childNodes[3].childNodes[3];
   taskDescription = parentNode.childNodes[3].childNodes[5];
   taskType = parentNode.childNodes[3].childNodes[7].childNodes[1];
   submitButton = parentNode.childNodes[5].childNodes[1];
   //console.log(taskTitle);

   taskTitle.setAttribute("contenteditable","true");
   taskDescription.setAttribute("contenteditable","true");
   taskType.setAttribute("contenteditable","true");

    //needs to be implemented
   submitButton.setAttribute('onclick',"saveEdit.apply(this,arguments)");
   submitButton.removeAttribute("data-bs-toggle");
   submitButton.removeAttribute("data-bs-toggle");
   submitButton.innerHTML = "Save changes";
};


const saveEdit = (e) => {
  if (!e) e = window.event;

  const targetID = e.target.id;
  const parentNode = e.target.parentNode.parentNode;

  const taskTitle = parentNode.childNodes[3].childNodes[3];
  const taskDescription = parentNode.childNodes[3].childNodes[3];
  const taskType = parentNode.childNodes[3].childNodes[7].childNodes[1];
  const submitButton = parentNode.childNodes[5].childNodes[1];

  const updatedData = {
    taskTitle : taskTitle.innerHTML,
    taskDescription : taskDescription.innerHTML,
    taskType : taskDescription.innerHTML
  };
  let stateCopy = state.taskList;
  stateCopy = stateCopy.map((task)) =>
     task.id === targetID
     {
       id:task.id,
       title: updatedData.taskTitle;
       description : updatedData.taskDescription;
       type: updatedData.taskType;
       url: task.url;
     }
     task
  };

 state.taskList = stateCopy;
 updateLocalStorage();

 taskTitle.setAttribute("contenteditable","false");
 taskDescription.setAttribute("contenteditable","false");
 taskType.setAttribute("contenteditable","false");

  //needs to be implemented
 submitButton.setAttribute('onclick',"openTask.apply(this,arguments)");
 submitButton.removeAttribute("data-bs-toggle","modal");
 submitButton.removeAttribute("data-bs-toggle","#showTask");
 submitButton.innerHTML = "Open Task";
 };

 const searchTask = (e) => {
   if (!e)e = window.event ;

   while (taskContents.firstChild) {
     taskContents.removeChild(taskContents.firstChild);
   }

   const resultData = state.taskList.filter(({title}) =>title.includes(e.target.value));

  resultData.map((cardDate) => {

  })
};
