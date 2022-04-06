# Ludicrumedia Portal 2022 remake
The new Ludicrumedia is made with react, sanity and sass. To run project for development, do as follows:
- clone/fork the repository to your computer
- open folder in VSCode
- in terminal, cd into folder "studio" and run `sanity start` (requires access to sanity project as collaborator)
- in new terminal, cd into folder "portal" and run `npm install`
- after installation, in terminal, run `npm start`

The project is running on http://localhost:3000. The database admin studio is running on http://localhost:3333.

# Material UI
The projects uses components from [Material UI v5](https://mui.com/getting-started/usage/). It also has [Material Icons](https://mui.com/components/material-icons/) installed for icon use.

# Custom components
The project has some readily made custom components:

## Modals
Built around Material UIs Dialog, a multiple modal handler is built utilizing context to handle several modals in one scope. To use, import `src/components/utility/modals/Modal` and structure the Modal code as such:
```
<Modal>
    <ModalOpenButton>
        <button>open modal</button>
    </ModalOpenButton>
    <ModalContents>
        <p>{project.customer.clientname}</p>
    </ModalContents>
</Modal>
```

# CSS
Sass is used to shape CSS. The file main.css in the portal/src/css-folder should never be directly edited, as sass-compilation will overwrite any changes made in it.
Use main.scss for importing partials from the sass-folder. The following commands will compile the CSS-changes and display in the running app:
- `npm run css:compile` : One-time compilation of the main CSS-file
- `npm run css:watch` : Watch-process to recompile main CSS-file on any saved changes in sass-folder (prerequisite: files are imported into main.scss)