// Components
import Input from './Input';

// Icons
import { FaCircle } from 'react-icons/fa';

export default function Switch(props) {
    const {checked, onSwitchToggle, children, ...restProps} = props;

    return (
        <Input type="checkbox" checked={checked} onChange={onSwitchToggle} inputSwitch {...restProps}>
            <span className="custom-switch-input-button">{children ? children : <FaCircle />}</span>
        </Input>
    );
}
