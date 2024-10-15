// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import NavColumn from '../components/NavColumn';

const DashboardPage = () => {
  const chartData = [
    { day: 'Mon', hours: 5 },
    { day: 'Tue', hours: 2 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 2.5 },
    { day: 'Fri', hours: 1.5 },
    { day: 'Sat', hours: 1 },
    { day: 'Sun', hours: 0.5 },
  ];

  const leaderboardData = [
    { rank: 1, name: 'Shadrack Anyona', course: 'Data Structures and Algorithms', points: 80 },
    { rank: 2, name: 'Sharon Chang\'ach', course: 'Data Structures and Algorithms', points: 75 },
    { rank: 3, name: 'David Maigwa', course: 'Data Structures and Algorithms', points: 70 },
  ];

  return (
    <div className="flex h-screen bg-[#FBF8F6] text-gray-800">
      {/* Sidebar */}
      <NavColumn />
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">DASHBOARD</h1>
        
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Points and Active Courses */}
          <div className="space-y-6">
            {/* Points */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🏆</span>
                <span className="text-lg">Points</span>
              </div>
              <div className="text-4xl font-bold">70</div>
            </div>

            {/* Active Courses */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">📈</span>
                <span className="text-lg">Active Courses</span>
              </div>
              <div className="text-4xl font-bold">2/8</div>
            </div>
          </div>

          {/* Chart */}
          <div className="col-span-2 bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Today</span>
              <select className="bg-transparent">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#F2C0C0" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">Performance</span>
              <select className="bg-transparent">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="h-48 flex items-center justify-center">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold">40 Hrs</span>
                </div>
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#F2C0C0"
                    strokeWidth="2"
                    strokeDasharray="75, 100"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center text-sm">YOUR PROGRESS: 40 Hrs</div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Leader Board 🏅</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th>Rank</th>
                <th>Name</th>
                <th>Course</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((item) => (
                <tr key={item.rank} className="border-t">
                  <td className="py-2">{item.rank}</td>
                  <td className="py-2 flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                    {item.name}
                  </td>
                  <td className="py-2">{item.course}</td>
                  <td className="py-2">
                    <span className="bg-[#F2C0C0] rounded-full px-2 py-1">{item.points}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;