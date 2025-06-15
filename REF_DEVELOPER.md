# Developer Notes

## Recommended Tools

- Python for generating documentation
- Git for version control
- VS Code for editing

## To build MK Docs

In PowerShell, create and manage virtual environment with necessary tools. 

```pwsh
py -m venv .venv
.venv\Scripts\activate
py -m pip install --upgrade pip setuptools wheel
py -m pip install --upgrade -r requirements.txt 
```

In PowerShell terminal, generate the documentation. Activate .venv first (if not active).

```pwsh
.venv\Scripts\mkdocs.exe serve
```

CTRL c a couple times or other will usually stop the server.

## Before Editing

```pwsh
git pull
```

## After Successful Editing

```pwsh
git add .
git commit -m "describe your change"
git push -u origin main
```