# Content Admin (Decap CMS) — Setup Guide

The site has a lightweight admin at **`/admin`** so you can swap activity images
without touching code. Editing text (translations) still requires a developer,
because copy is stored in `src/contexts/LanguageContext.tsx` in Greek + English.

Decap CMS commits directly to GitHub → Render auto-rebuilds → site updates in
about 1–2 minutes. Nothing else runs on your server.

---

## One-time setup (do this once, ~10 minutes)

Decap needs a way to let you log in with GitHub. It requires **two things**:

### 1. Create a GitHub OAuth App

1. Go to https://github.com/settings/developers → **New OAuth App**.
2. **Application name:** Om Eressos Admin
3. **Homepage URL:** `https://omeressos.com`
4. **Authorization callback URL:** `https://YOUR-OAUTH-PROXY.onrender.com/callback`
   (you'll get this URL in step 2)
5. Click **Register**, then generate a **Client secret**. Save the Client ID and Secret.

### 2. Deploy a tiny OAuth proxy on Render (free)

Decap can't talk to GitHub directly from the browser — it needs a small helper.
Use this ready-made one, no code required:

- Repo: https://github.com/vencax/netlify-cms-github-oauth-provider
- On Render → **New Web Service** → connect that repo → set env vars:
  - `OAUTH_CLIENT_ID` = your GitHub Client ID
  - `OAUTH_CLIENT_SECRET` = your GitHub Client Secret
  - `ORIGIN` = `https://omeressos.com`
- Deploy. Copy the service URL (e.g. `https://om-oauth.onrender.com`).
- Go back to GitHub and update the callback URL with `/callback` appended.

### 3. Point the admin at your setup

Edit **`public/admin/config.yml`** and set:

```yaml
backend:
  name: github
  repo: YOUR-GITHUB-USER/YOUR-REPO-NAME
  branch: main
  base_url: https://om-oauth.onrender.com   # your Render OAuth proxy URL
```

Commit and push. That's it.

---

## Using the admin

1. Visit `https://omeressos.com/admin/`
2. Click **Login with GitHub** and authorize.
3. Open **Activity Images**, click any field, upload a new photo, click **Publish**.
4. Wait ~1–2 minutes for Render to redeploy. Refresh the site.

Old images are kept in `public/uploads/` — safe to delete via GitHub any time.

---

## Editing text

Text lives in `src/contexts/LanguageContext.tsx`. If you want text editable via
the admin too, ask a developer to extract the strings into a JSON file — the
Decap config can then include a "Site text" collection the same way.
