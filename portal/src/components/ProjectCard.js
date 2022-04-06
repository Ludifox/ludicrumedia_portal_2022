import { Modal, ModalContents, ModalOpenButton } from "./utility/modals/Modal";

export default function ProjectCard({project, isOpen, setIsOpen}) {
    return(
        <>
        <article className="card projectCard">
        <Modal>
        <ModalOpenButton>
            <button>open modal</button>
        </ModalOpenButton>
        <ModalContents>
           <p>{project.customer.clientname}</p>
        </ModalContents>
        </Modal>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </article>
        </>
    )
}