
let notes = ['banana', 'rasen mähen', 'rasieren'];

function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNoteTamplate(note);
    }

}
function getNoteTamplate(note) {
    return `<p>+ ${note}</p>`;
}
//Add notes
function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = "";
}





//Delete notes
//Archive notes
