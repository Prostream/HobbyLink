// Both workspaces live in the same shell. Native hash changes support Back and Forward.
const participant = document.getElementById('participant');
const organizer = document.getElementById('organizer');

function showWorkspace() {
  const organizing = window.location.hash === '#organizer';
  participant.hidden = organizing;
  organizer.hidden = !organizing;
  document.title = organizing ? 'HobbyLink | Organizer' : 'HobbyLink | Participant';
}

window.addEventListener('hashchange', showWorkspace);
showWorkspace();
