# Eximinq Deployment Guide

This repo has two deployment options:

- One-click deploy using PowerShell
- Manual deploy using `scp`, `ssh`, `nginx`, and `pm2`

Server details used here:

- Domain: `https://eximinq.in`
- Frontend server path: `/home/ubuntu/app`
- Backend server path: `/home/ubuntu/backend`
- Server user: `ubuntu`
- Server host: `43.204.101.72`

Default PEM path used by the script:

- `D:\eximinq-key.pem`

## One-Click Deploy

Use the deploy script from the project root:

```powershell
cd C:\Users\Admin\Desktop\Eximinq\eximinq-global-connection
.\deploy-eximinq.ps1
```

If frontend build is not ready yet:

```powershell
.\deploy-eximinq.ps1 -BuildFrontend
```

If backend `PDF_DOC` also changed and must be uploaded:

```powershell
.\deploy-eximinq.ps1 -BuildFrontend -IncludePdfDoc
```

If PEM path is different:

```powershell
.\deploy-eximinq.ps1 -PemPath "C:\path\to\eximinq-key.pem"
```

What the script does:

- Builds frontend if asked
- Archives frontend build
- Archives backend
- Includes backend `data` folder
- Uploads both to EC2
- Extracts files on server
- Runs `npm install` in backend
- Restarts `pm2 backend`
- Tests and restarts `nginx`
- Runs live verification calls

## Manual Deploy

## 1. Frontend

Build frontend:

```powershell
cd C:\Users\Admin\Desktop\Eximinq\eximinq-global-connection
npm run build
```

Upload build:

```powershell
scp -i "D:\eximinq-key.pem" -r build\* ubuntu@43.204.101.72:/home/ubuntu/app
```

Then on the server:

```bash
ssh -i "D:\eximinq-key.pem" ubuntu@43.204.101.72
sudo chown -R ubuntu:ubuntu /home/ubuntu/app
sudo chmod -R 755 /home/ubuntu/app
sudo nginx -t
sudo systemctl restart nginx
```

## 2. Backend

Go to backend folder locally:

```powershell
cd C:\Users\Admin\Desktop\Eximinq\eximinq-global-connection\backend
```

Upload core files:

```powershell
scp -i "D:\eximinq-key.pem" package.json ubuntu@43.204.101.72:/home/ubuntu/backend
scp -i "D:\eximinq-key.pem" package-lock.json ubuntu@43.204.101.72:/home/ubuntu/backend
scp -i "D:\eximinq-key.pem" server.js ubuntu@43.204.101.72:/home/ubuntu/backend
scp -i "D:\eximinq-key.pem" .env ubuntu@43.204.101.72:/home/ubuntu/backend
```

Upload folders:

```powershell
scp -i "D:\eximinq-key.pem" -r routes ubuntu@43.204.101.72:/home/ubuntu/backend
scp -i "D:\eximinq-key.pem" -r controllers ubuntu@43.204.101.72:/home/ubuntu/backend
scp -i "D:\eximinq-key.pem" -r models ubuntu@43.204.101.72:/home/ubuntu/backend
scp -i "D:\eximinq-key.pem" -r utils ubuntu@43.204.101.72:/home/ubuntu/backend
scp -i "D:\eximinq-key.pem" -r services ubuntu@43.204.101.72:/home/ubuntu/backend
scp -i "D:\eximinq-key.pem" -r data ubuntu@43.204.101.72:/home/ubuntu/backend
```

If `backend/PDF_DOC` changed too:

```powershell
scp -i "D:\eximinq-key.pem" -r PDF_DOC ubuntu@43.204.101.72:/home/ubuntu/backend
```

Then on the server:

```bash
ssh -i "D:\eximinq-key.pem" ubuntu@43.204.101.72
cd /home/ubuntu/backend
npm install
pm2 restart backend
pm2 save
```

## 3. Verification

Run these after deployment:

```bash
curl -I https://eximinq.in/foreign-trade-policy/regulatory-updates
curl https://eximinq.in/api/dgft/notices?type=public
curl https://eximinq.in/api/gst/acts
```

Frontend asset verification:

```bash
curl https://eximinq.in/foreign-trade-policy/regulatory-updates
```

Check that page HTML points to the latest JS/CSS bundle from your current build.

## What To Tell Codex Next Time

If you want deployment help in chat, send:

```text
Deploy this to eximinq.in.
Changed: frontend/backend/both
Build: ready or not ready
PEM: D:\eximinq-key.pem
PDF_DOC changed: yes/no
```

Example:

```text
Deploy this to eximinq.in.
Changed: regulatory-updates frontend + backend
Build: ready
PEM: D:\eximinq-key.pem
PDF_DOC changed: no
```

## Simple Rule

- Frontend-only UI change: deploy frontend
- API or backend logic change: deploy backend
- New backend folders like `data`, `routes`, or `services`: upload them too
- If build is stale: rebuild first
