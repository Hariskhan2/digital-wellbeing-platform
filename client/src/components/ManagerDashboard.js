import React from 'react';
import { Button, Card, Table } from 'flowbite-react';

const ManagerDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>

      <Card>
        <h2 className="text-xl font-semibold mb-4">Assign Mindfulness Exercises</h2>
        <Button color="primary" className="mb-4">Assign New Exercise</Button>

        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>Staff Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Activity</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {/* Render list of assigned staff */}
            <Table.Row>
              <Table.Cell>Jane Smith</Table.Cell>
              <Table.Cell>jane@example.com</Table.Cell>
              <Table.Cell>Meditation</Table.Cell>
              <Table.Cell>
                <Button color="failure" size="xs">Remove</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card>

      <Card className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Track Staff Activity</h2>
        {/* List of mindfulness exercises tracked by staff */}
      </Card>
    </div>
  );
};

export default ManagerDashboard;
