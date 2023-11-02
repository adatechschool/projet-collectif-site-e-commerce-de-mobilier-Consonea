import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi'; // Importez le logo loupe depuis react-icons/bi
function SearchBar() {
    return (
        <Form inline>
            <InputGroup>
                <FormControl
                    style={{ backgroundColor: '#FEFAE0' }}
                    placeholder="Recherche"
                    aria-label="Recherche"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    <BiSearch />
                </Button>
            </InputGroup>
        </Form>
    );
}
export default SearchBar;