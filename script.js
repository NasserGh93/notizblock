
let notesTitle = ['ba', 'Aufgabe',];
let notes = ['banana', 'rasen mähen', 'rasieren'];

let trashNotesnotesTitle = [];
let trashNotes = [];

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
    return `<p>+ title: ${notesTitles[indexNote]} -> <button onclick="deleteNote(${indexNote})">x</button></p>`;
}

function getTrashNoteTamplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexNote]}<button onclick="deleteNote(${indexTrashNote})">x</button></p>`;
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = "";
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes()

}

function notetoTrash() {
    let trashNote = notes.splice(indexNote, 1);
    let trashNotesnotesTitle = notes.slice(indexNote, 1)
    trashNote.push(trashNote);

    renderNotes();
    renderTrashNotes();
}
function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes();
}
//Archive notes
