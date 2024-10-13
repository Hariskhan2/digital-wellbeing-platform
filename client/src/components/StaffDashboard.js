import React from 'react';
import { Button, Card } from 'flowbite-react';

const StaffDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Staff Dashboard</h1>

      <Card>
        <h2 className="text-xl font-semibold mb-4">Your Mindfulness Exercises</h2>
        {/* List of exercises assigned to the staff */}
        <ul>
          <li>Meditation Session - 10 min</li>
          <li>Focus Timer - 25 min</li>
          <li>Stress Relief Breathing</li>
        </ul>
      </Card>

      <Card className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Log Your Activity</h2>
        <Button color="primary">Log Activity</Button>
      </Card>

      <Card className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Focus Timer</h2>
        <Button color="primary">Start Focus Timer</Button>
      </Card>
    </div>
  );
};

export default StaffDashboard;
