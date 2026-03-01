
let notesTitle = ['ba', 'Aufgabe',];
let notes = ['banana', 'rasen mähen', 'rasieren'];

let trashNotes = []

function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTamplate(indexNote);
    }

}

function renderTrashNotes() {
    let trashcontentRef = document.getElementById('trash_content')
    trashcontentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < notes.length; indexTrashNote++) {
        trashcontentRef.innerHTML += getNoteTamplate(indexTrashNote);
    }

}
function getNoteTamplate(indexNote) {
    return `<p>+ title: ${notesTitle[indexNote]} -> <button onclick="deleteNote(${indexNote})">x</button></p>`;
}

function getTrashNoteTamplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>`;
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = "";
}
//Delete notes
//welche notitz muss gelöscht werden
//wann muss die notitz gelöscht werden
// anzeige updaten
function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes()

}
//Delete notes
//Archive notes
