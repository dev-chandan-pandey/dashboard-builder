# Dashboard Builder

A dynamic dashboard builder inspired by tools like Canva and Figma.

## Features

* Drag and drop widgets
* Resize widgets
* Rich text editor
* Image upload
* Dynamic charts
* Save dashboard layouts
* Restore dashboard layouts
* Responsive dashboard canvas

## Tech Stack

### Frontend

* React
* Vite
* React Grid Layout
* React Quill
* Chart.js
* Axios

### Backend

* Node.js
* Express.js

### Database

* Turso (libSQL)

## Installation

### Client

```bash
cd client
npm install
npm run dev
```

### Server

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Server:

```env
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
```

Client:

```env
VITE_API_URL=
```

## API Endpoints

### Save Dashboard

POST

```text
/api/dashboard/save
```

### Load Dashboard

GET

```text
/api/dashboard/latest
```

### Upload Image

POST

```text
/api/upload
```

## Future Improvements

* Widget duplication
* Image cleanup
* Multi-dashboard support
* User authentication
* Dashboard sharing
