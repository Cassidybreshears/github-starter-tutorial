# GitHub Starter Tutorial

This tutorial is for getting one simple website online without using Terminal.

Default path:

GitHub website -> GitHub Desktop -> `Documents/GitHub` -> your AI coding tool -> GitHub Desktop commit/push -> GitHub Pages

No HTML, CSS, command-line, SSH, or Git experience is required.

## What You Are Making

You will create your own copy of this starter project, download it to your computer, open it in Antigravity, Codex, or Claude Code, make a small website update, push it back to GitHub, and publish it with GitHub Pages.

After setup works, you will turn the starter page into a project-management dashboard based on your AI+Design Studio Command Center. This is a beginning version, not Project 5.

## What Each Tool Does

- **GitHub** is where your project lives online.
- **GitHub Desktop** copies the project to your computer, tracks changes, commits, and pushes without Terminal.
- **Antigravity, Codex, or Claude Code** is where you open the local project folder and get AI coding help.
- **GitHub Pages** publishes your static website so you can share a live link.

Your AI coding tool may be a desktop app or something your instructor has you open inside VS Code. Either is fine. GitHub Desktop still handles the GitHub part.

## What You'll Finish

By the end, you should have:

- a GitHub repository named `github-startup`
- a local project folder at `Documents/GitHub/github-startup`
- Antigravity, Codex, or Claude Code opened to that same folder
- at least one commit pushed from GitHub Desktop
- a live GitHub Pages link
- a Command Center dashboard started from the included `index.html`

## Required Path
PUT STEP 1 here: 
Complete these in order.
start here: 
**Instructions**
Create a GitHub account if you do not already have one.
Open the original github-starter-tutorial repository.
Click Use this template.
Choose Create a new repository.
Name your new repository github-startup.
this is step 2 keep it in the readme
Now go to your new repository(repo). Open your new github-startup repository.
Click the Actions tab.
If GitHub asks you to enable workflows, enable them.
Click Initialize Tutorial Issues.
Click Run workflow.
Wait for the workflow to finish.
Open the Issues tab.
Use the generated issues as your step-by-step checklist.
Do not click the green Code button yet. You will use that later with GitHub Desktop.


- [ ] [Step 3: Install GitHub Desktop and Choose an AI Coding Tool](docs/steps/02-install-github-desktop-antigravity.md)
- [ ] [Step 4: Sign In to GitHub Desktop](docs/steps/03-sign-in-github-desktop.md)
- [ ] [Step 5: Clone Your Repo with GitHub Desktop](docs/steps/04-clone-with-github-desktop.md)
- [ ] [Step 6: Open the Local Folder in Your AI Coding Tool](docs/steps/05-open-folder-in-ai-tool.md)
- [ ] [Step 7: Commit and Push with GitHub Desktop](docs/steps/06-commit-push-github-desktop.md)
- [ ] [Step 8: Publish with GitHub Pages](docs/steps/07-publish-with-github-pages.md)
- [ ] [Step 9: Build Your Command Center Dashboard](docs/steps/08-build-command-center-dashboard.md)

## Recommended Tracking

Use GitHub Actions to create one issue for each step. This makes the tutorial easier to follow because each step becomes a small checklist you can close when finished.

Step 1 includes this, but here is the short version:

- open the **Actions** tab in your own repo
- run **Initialize Tutorial Issues**
- complete and close each generated issue as you finish the steps

If Actions do not work, use the checkboxes in this README as a backup.

## Tool Notes and Advanced Addendums

The required workflow works with Antigravity, Codex, or Claude Code. Choose one for the main tutorial. You can try the others later.

- [Codex folder check](docs/addendums/addendum-a-link-codex.md)
- [Claude Code folder check](docs/addendums/addendum-b-link-claude-code.md)
- [GitHub CLI / Terminal authentication](docs/addendums/addendum-c-github-cli-login.md) - advanced only
- [VS Code folder check](docs/addendums/addendum-d-open-in-vscode.md) - optional editor only

## Troubleshooting

### I cloned the wrong folder.

In GitHub Desktop, choose **Repository > Show in Finder** or **Repository > Show in Explorer**.

The folder should be:

`Documents/GitHub/github-startup`

If you see the original `github-starter-tutorial` folder instead, go back to GitHub and make sure you created your own `github-startup` repo with **Use this template**.

### My AI coding tool cannot see my files.

Open the exact local folder:

`Documents/GitHub/github-startup`

You should see files such as `README.md`, `index.html`, and `style.css`. If not, close the folder in your AI coding tool and open it again from `Documents/GitHub`.

### GitHub Desktop shows too many changed files.

You may have opened the wrong folder, or your AI coding tool may have created extra hidden files.

First check that GitHub Desktop is using `github-startup`, not your whole `Documents` folder or desktop. Then look at the changed file list. For this tutorial, normal changes usually include `index.html`, `style.css`, or `README.md`.

If you are unsure, ask before committing.

### My GitHub Pages link is not updating.

GitHub Pages can take a few minutes.

Check these in order:

- Did you click **Commit to main** in GitHub Desktop?
- Did you click **Push origin**?
- On GitHub, does your repo show the new file changes?
- In **Settings > Pages**, is the source set to `main` and `/ (root)`?
- Wait 2-5 minutes, then refresh the live page.

### I edited files but do not know how to push.

Open GitHub Desktop.

1. Make sure the current repository is `github-startup`.
2. Review the changed files on the left.
3. Write a short summary, such as `Update dashboard`.
4. Click **Commit to main**.
5. Click **Push origin**.

## Final Submission Checklist

Submit what your instructor asks for in Canvas.

- [ ] GitHub repository link
- [ ] GitHub Pages link
- [ ] Screenshot of GitHub Desktop after pushing, if requested

## Why This Matters

GitHub gives your project one reliable online home. GitHub Desktop lets you work with that online project without Terminal. Antigravity, Codex, or Claude Code can help you edit the local files. GitHub Pages turns the project into a live website.

Once this loop works, you can use it again for future design, web, and AI+design projects.
