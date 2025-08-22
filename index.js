const noteInput = document.getElementById("new-note");

const addNoteButton = document.getElementById("add-note");

addNoteButton.addEventListener("click", addANewNote);


function addANewNote() {

    const noteText = noteInput.value;

    console.log("The text inserted is " + noteText);

    const newNote = document.createElement("p");
    
    newNote.innerHTML = "Test new paragraph created";
    newNote.classList.add("single-note");

    document.body.appendChild(newNote);
}
