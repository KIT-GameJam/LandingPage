# KIT GameJam Landing Page
This is the landing page for the KIT GameJam.

## Deployment
Pushes to `main` are automatically built and deployed via the GitHub Actions workflow in `.github/workflows/deploy.yml`. The workflow connects to the KIT VPN and uploads the generated site to the server via FTP.

To deploy manually:
```bash
pnpm install
pnpm run generate
# copy the contents of the .output folder to the server
```
