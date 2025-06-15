# Developer Notes

## Recommended Tools

- Python 3.12 (used to build & serve MkDocs)
- Git for version control
- VS Code for editing

## Build MkDocs Locally

### 1. Create Virtual Environment (First Time)

In PowerShell, create and manage virtual environment and install necessary packages. 

```pwsh
py -m venv .venv
.venv\Scripts\activate
py -m pip install --upgrade pip setuptools wheel
py -m pip install --upgrade -r requirements.txt 
```

### 2. Activate Virtual Environment (Daily Use)

In PowerShell terminal, activate .venv first (if not active).

```pwsh
.venv\Scripts\activate
```

### 3. Serve MkDocs Locally

In PowerShell terminal, generate the documentation. 

```pwsh
.venv\Scripts\mkdocs.exe serve
```

Use CTRL c to stop the server.

## Before Editing (Always Pull Latest)

```pwsh
git pull
```

## After Successful Editing

```pwsh
git add .
git commit -m "describe your change"
git push -u origin main
```