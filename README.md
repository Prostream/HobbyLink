# HobbyLink

## Team
Team 7 — Project F26_7  
CS5340 — Human-Computer Interaction

- Chunzhang Liu
- ZiyongLiu
- Jia Song
- Mengli Yu

## Team Communication and Project Documents

- [Microsoft Teams group chat](https://teams.cloud.microsoft/l/chat/19%3Ac2da5547f6f14932b5d11a576ad2eb50%40thread.v2/conversations?context=%7B%22contextType%22%3A%22chat%22%7D) — team communication and coordination.
- [Project Phase 2 report](https://docs.google.com/document/d/1I1Tvr-16jYxPFGl-Qgn7ffSoedYUzIUIw7triUCJUvc/edit?usp=sharing) — interview questions, research progress, and phase submission materials.

## Project Description
HobbyLink explores how people find and coordinate small group activities around shared interests. The team is studying the needs of both participants and organizers before deciding on a final product direction.

## First Demo Flow
The first small demo will show one complete path:

1. An organizer creates an activity with a title, time, location, and capacity.
2. A participant browses activities and joins one.
3. The organizer sees the updated attendee list and count.

This is a working scope for the initial demo and may change as the team learns more.

## Coding Responsibilities

| Team member | Initial coding work |
| --- | --- |
| ZiyongLiu | Set up the frontend app structure, shared navigation and API calls; connect the participant and organizer pages into one runnable demo. |
| Chunzhang Liu | Build the backend endpoints for creating and listing activities, joining an activity, and reading its attendee list; add basic input and capacity checks. |
| Jia Song | Build the participant pages: activity list, activity details, and join action with clear success or error feedback. |
| Mengli Yu | Build the organizer pages: create activity form and attendee list with the current count; keep the page layout and labels consistent. |

The team will agree on the data fields and API responses before implementing the pages and endpoints separately.

## Project Folders

- `project/docs/` — agreed scope and implementation notes
- `project/design/` — screen flows and interface drafts
- `project/frontend/` — participant and organizer interfaces
- `project/backend/` — activity and attendance logic

## Try the current prototype

Open [project/frontend/index.html](project/frontend/index.html) from your local checkout in a browser. The page runs directly from disk.

The opening postcard asks **“What brings you here?”** Choose **“I’d like to join an activity”** to enter the participant workspace or **“I’d like to host an activity”** to enter the organizer workspace. Each workspace currently shows its heading. Refresh to stay in that workspace, or use the browser Back button to choose again.

## Developer handoff

- **Jia and Mengli** can build inside the `#participant` and `#organizer` sections, respectively, in [index.html](project/frontend/index.html). [styles.css](project/frontend/styles.css) defines the shared layout and postcard design.
- **ZiyongLiu’s frontend foundation** includes role selection and browser history in [navigation.js](project/frontend/navigation.js), plus the shared `HobbyLink.request(path, options)` JSON helper in [api.js](project/frontend/api.js).
- **Next integration step** — once Chunzhang’s endpoints and the two activity views are ready, ZiyongLiu can connect them and verify the create → join → view roster flow.

![HobbyLink campsite illustration](project/frontend/camp.svg)
