import MoreTimeIcon from "@mui/icons-material/MoreTime";
import BadgeIcon from "@mui/icons-material/Badge";
import { IconButton, Tooltip} from "@mui/material";
import { Modal, ModalContents, ModalOpenButton } from "./utility/modals/Modal";
import CustomerInfo from "./utility/CustomerInfo";

export default function ProjectCard({project}) {
    return(
        <>
        <article className="card projectCard">
            <h3><small>{project.customer.clientname}</small>{project.title}</h3>
            <p>{project.description}</p>
            <div className="cardActions">
            <Tooltip title="Registrer timer" arrow placement="top">
                <IconButton variant="contained" href={'/prosjekter/' + project.slug + '#registrer'} aria-label="Registrer timer">
                    <MoreTimeIcon color="action" />
                </IconButton>
            </Tooltip>
            <Modal>
                <ModalOpenButton>
                    <Tooltip title="Se kundeinformasjon" arrow placement="top">
                        <IconButton variant="contained">
                            <BadgeIcon color="action" />
                        </IconButton>
                    </Tooltip>
                </ModalOpenButton>
                <ModalContents>
                    <CustomerInfo customer={project.customer} />
                </ModalContents>
            </Modal>
            </div>
        </article>
        </>
    )
}