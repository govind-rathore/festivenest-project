import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function VolnteerForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Gupta"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Other"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="Email"
            placeholder="Enter Email"
            defaultValue="Mark@gmail.com"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            required
            type="Number"
            placeholder="Mobile Number"
            defaultValue="123"
          />
        </Form.Group>
      </Row>
      <div className="mt-10">
        <h5>Emergency Contact Information :</h5>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ex. Excellent,Intermediate, or poor"
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="Email"
              placeholder="Enter Email"
              defaultValue="Mark@gmail.com"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              required
              type="Number"
              placeholder="Mobile Number"
              defaultValue="123"
            />
          </Form.Group>
        </Row>
      </div>

      <div className="mt-10">
        <h5>Project Information :</h5>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Select Project Event :</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ex. Excellent,Intermediate, or poor"
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Project start date :</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Project end date :</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Gupta"
            />
          </Form.Group>
        </Row>
      </div>

      <div className="mt-10">
        <h5>Other Information :</h5>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Level of English</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ex. Excellent,Intermediate, or poor"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Your current medical condition</Form.Label>
          <Form.Control required type="text" placeholder="Enter Here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            What has motivated you to apply volunteer in event ?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Any questions ?</Form.Label>
          <Form.Control required type="text" placeholder="Enter Here" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>
            Please specify your availability for the event
          </Form.Label>
          <Form.Control required type="text" placeholder="Enter Here" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Skills and Experience:</Form.Label>
          <Form.Control required type="text" placeholder="Enter Here" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>How did you hear about this opportunity?</Form.Label>
          <Form.Control required type="text" placeholder="Enter Here" />
        </Form.Group>
      </div>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default VolnteerForm;
