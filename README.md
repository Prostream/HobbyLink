# HobbyLink

## Team
Team 7 — Project F26_7  
CS5340 — Human-Computer Interaction

- Chunzhang Liu
- Ziyong Liu (Joshua)
- Jia Song
- Mengli Yu

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
| Ziyong Liu (Joshua) | Set up the frontend app structure, shared navigation and API calls; connect the participant and organizer pages into one runnable demo. |
| Chunzhang Liu | Build the backend endpoints for creating and listing activities, joining an activity, and reading its attendee list; add basic input and capacity checks. |
| Jia Song | Build the participant pages: activity list, activity details, and join action with clear success or error feedback. |
| Mengli Yu | Build the organizer pages: create activity form and attendee list with the current count; keep the page layout and labels consistent. |

The team will agree on the data fields and API responses before implementing the pages and endpoints separately.

## Project Folders

- `project/docs/` — agreed scope and implementation notes
- `project/design/` — screen flows and interface drafts
- `project/frontend/` — participant and organizer interfaces
- `project/backend/` — activity and attendance logic

## Open the frontend

![HobbyLink campsite illustration](project/frontend/camp.svg)

Open [the frontend entry point](project/frontend/index.html) in a browser from your local checkout. The static shell runs directly from disk. Use `#participant` or `#organizer` at the end of the URL to switch workspaces. Each team member can add their page inside the corresponding section in `index.html`.

The shared `HobbyLink.request(path, options)` helper sends JSON requests and returns parsed responses. Once the backend is ready, serve the frontend over HTTP and pass the agreed endpoint to the helper. Activity creation, joining and the roster are planned for the next implementation step.
