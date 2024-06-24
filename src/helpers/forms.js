import DatePicker from "react-datepicker";
import Form from 'react-bootstrap/Form';
import { classes } from "@/helpers";

import "react-datepicker/dist/react-datepicker.css";
import styles from './styles/forms.module.css';

export const CustomTextField = ({ type= "text", onChange, controlParams, ...props }) => {
    return (
        <Form.Group className={ styles.input } controlId={ props.controlId }>
            { props.label && <Form.Label>{ props.label }</Form.Label> }
            <Form.Control type={ type }
                          placeholder={ props?.placeholder }
                          onChange={ onChange }
                          {...controlParams} />
        </Form.Group>
    )
}

export const CustomPasswordField = ({ ...props }) => (
    <CustomTextField type={ "password" } { ...props } />
)

export const CustomTextArea = ({ onChange, controlParams, ...props }) => {
    return (
        <Form.Group className={ classes(styles.input, styles.textarea) } controlId={ props.controlId }>
            { props.label && <Form.Label>{ props.label }</Form.Label> }
            <Form.Control as="textarea"
                          rows={ props.rowsCount || 5 }
                          onChange={ onChange }
                          {...controlParams} />
        </Form.Group>
    )
}

export const CustomDataPicker = ({ startDate, setStartDate, ...props }) => {
    return (
        <DatePicker selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    // wrapperClassName={styles.datePicker}
                    // { ...props }
        />
    )
}