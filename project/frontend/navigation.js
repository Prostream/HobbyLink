const participant = document.getElementById('participant');
const organizer = document.getElementById('organizer');
const picker = document.getElementById('role-picker');

function showWorkspace() {
  const hash = window.location.hash;
  participant.hidden = hash !== '#participant';
  organizer.hidden = hash !== '#organizer';

  if (participant.hidden && organizer.hidden) {
    document.title = 'HobbyLink';
    if (!picker.open) picker.showModal();
    return;
  }

  if (picker.open) picker.close();
  const active = participant.hidden ? organizer : participant;
  const heading = active.querySelector('h1');
  document.title = 'HobbyLink | ' + heading.textContent;
  heading.focus({ preventScroll: true });
}

// The entry screen needs a role before it can show a workspace.
picker.addEventListener('cancel', event => event.preventDefault());
window.addEventListener('hashchange', showWorkspace);
showWorkspace();
