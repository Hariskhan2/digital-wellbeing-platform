import React from 'react';
import { Button, Card, Table } from 'flowbite-react';

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <Card>
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        <Button color="primary" className="mb-4">Add New User</Button>

        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {/* Render list of users */}
            <Table.Row>
              <Table.Cell>John Doe</Table.Cell>
              <Table.Cell>john@example.com</Table.Cell>
              <Table.Cell>Manager</Table.Cell>
              <Table.Cell>
                <Button color="failure" size="xs">Remove</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card>

      <Card className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Managedddddddddddd Wellbeing Content</h2>
        <Button color="primary" className="mb-4">Add New Content</Button>
        {/* Here Admin can manage meditation sessions, reminders, etc. */}
      </Card>
    </div>
  );
};

export default AdminDashboard;
