import Input from './Input';

/**
 * @function AddProductForm
 * @description Renders the product form.
 * @param {Object} props - Contains props passed to the form.
 * @returns {JSX} - The JSX for the product form.
 */
export default function AddProductForm(props) {
    const { onFormSubmit, productName, onNameChange, productDescription, onDescriptionChange, validationMessage } = props;

    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <Input 
                    id="name"
                    type="text" 
                    placeholder="Enter the name" 
                    className="textfield" 
                    value={productName}
                    onChange={onNameChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <Input 
                    id="description"
                    type="text" 
                    placeholder="Enter the description" 
                    className="textfield" 
                    value={productDescription}
                    onChange={onDescriptionChange}
                />
            </div>

            <div className="form-footer">
                {validationMessage && <div className="validation-message">{validationMessage}</div>}
                <Input type="submit" className="btn btn-primary" value="Add product" />
            </div>
        </form>
    )
}