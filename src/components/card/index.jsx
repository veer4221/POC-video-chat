import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
function ScreenCard() {
  return (
    <Card className="m-3">
      <Card.Header>Customer</Card.Header>
      <Card.Body>
        <div>
          <input />
        </div>
        <Table>
          <Thead>
            <Tr>
              <Th>Event</Th>
              <Th>Date</Th>
              <Th>Location</Th>
              <Th>Organizer</Th>
              <Th>Theme</Th>
              <Th>Agent</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Tablescon</Td>
              <Td>9 April 2019</Td>
              <Td>East Annex</Td>
              <Td>Super Friends</Td>
              <Td>Data Tables</Td>
              <Td>Coston Perkins</Td>
            </Tr>
            <Tr>
              <Td>Capstone Data</Td>
              <Td>19 May 2019</Td>
              <Td>205 Gorgas</Td>
              <Td>Data Underground</Td>
              <Td>Data Scence</Td>
              <Td>Jason Phillips</Td>
            </Tr>
            <Tr>
              <Td>Tuscaloosa D3</Td>
              <Td>29 June 2019</Td>
              <Td>Github</Td>
              <Td>The Contributors Consortium</Td>
              <Td>Data Viz</Td>
              <Td>Coston Perkins</Td>
            </Tr>
          </Tbody>
        </Table>
        {/* <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ScreenCard;
