# Advanced Flag in ForgeX

The `--advanced` flag in ForgeX serves as a switch to enable additional features during project creation. It is applied with the `create` command and unlocks the following features:

- **HTMX Support using Templ:**  
  Enables the integration of HTMX support for dynamic web pages using Templ.

- **CI/CD Workflow Setup using GitHub Actions:**  
  Automates the setup of a CI/CD workflow using GitHub Actions.

- **Websocket Support:**  
  WebSocket endpoint that sends continuous data streams through the WS protocol.

- **Tailwind:**  
  Adds Tailwind CSS support to the project.

- **Docker:**  
  Docker configuration for Go projects.

- **React:**  
  Frontend written in TypeScript, including an example fetch request to the backend.

## Using the `--advanced` Flag

To utilize the `--advanced` flag, use the following command:

```bash
forgex create --name <project_name> --framework <selected_framework> --driver <selected_driver> --advanced
```

By including the --advanced flag, users can choose one or all of the advanced features. The flag enhances the simplicity of ForgeX while offering flexibility for users who require additional functionality.

Recreating the Project Semi-Interactively
To recreate the project using the same configuration semi-interactively, use the following command:

```bash
forgex create --name my-project --framework chi --driver mysql --advanced
```

Non-Interactive Setup
Non-Interactive setup is also possible:
```bash
forgex create --name my-project --framework chi --driver mysql --advanced --feature htmx --feature githubaction --feature websocket --feature tailwind

```
