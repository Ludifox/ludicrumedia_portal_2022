import PhoneIcon from '@mui/icons-material/Phone'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'

export default function CustomerInfo({customer}) {
    return (
        <>
        <h3>{customer.clientname}</h3>
        <dl className="tablelist">
            <dt>Org.nr.:</dt>
            <dd>{customer.clientid}</dd>
            <dt><PersonIcon /></dt>
            <dd>{customer.contact}</dd>
            <dt><PhoneIcon /></dt>
            <dd>{customer.phone}</dd>
            <dt><EmailIcon /></dt>
            <dd>{customer.email}</dd>
        </dl>
        </>
    )
}