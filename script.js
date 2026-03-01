
let notes = ['banana', 'rasen mähen', 'rasieren'];

function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTamplate(indexNote);
    }

}
function getNoteTamplate(indexNote) {
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>`;
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
    notes.splice(indexNote, 1);
    renderNotes();

}
//Delete notes
//Archive notes
