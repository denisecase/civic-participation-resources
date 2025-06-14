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
py -m pip install --upgrade mkdocs mkdocs-material pymdown-extensions
```

In PowerShell terminal, generate the documentation.

```pwsh
.venv\Scripts\mkdocs.exe serve
```