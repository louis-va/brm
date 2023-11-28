# Brussels Rooftop Movie

A website for the fictionnal cinema Brussels Rooftop Movies.

## Getting Started

The client and server run independently. The client connects to the backend via localhost. You can edit the server's URL in `/client/.env`.

### ⚙️ Prerequisites

Ensure you have `Node.js` and `npm` installed on your machine to run this project locally.

### 💾 Installation

#### 1. Clone the Repository
```sh
git clone git@github.com:louis-va/mern-template.git
```

#### 2. Install NPM Packages
```sh
# at the root of the project
npm install
```

#### 3. Install Client and Server NPM Packages
```sh
# at the root of the project
npm run install
```
OR
```sh
cd client/
npm install
```
```sh
cd server/
npm install
```

### 🚀 Execution

#### Run Client & Server
```sh
# at the root of the project
npm run dev
```

#### Run Client Only
```sh
cd client/
npm run dev
```

#### Run Server Only
```sh
cd server/
npm run dev
```

### 🚚 Production

#### Build and Run Client & Server
```sh
# at the root of the project
npm run build
npm run start
```

#### Deployment
During deployment, in `/client/.env.production`, set `VITE_API_URL` as your database URL. Additionally, configure the `allowedOrigins` in `/server/index.ts` to permit your client's URL to connect to the server.

### 🌐 Ports
**Client**: http://localhost:3000 <br>
**Server**: http://localhost:8000

You can modify the port values in `/server/.env` and `/client/vite.config.ts`. If you change the client's port, remember to update `allowedOrigins` in `/server/index.ts` with the new port.