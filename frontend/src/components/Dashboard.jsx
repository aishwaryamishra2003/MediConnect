import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Sample data
  const stats = [
    { title: 'Total Patients', value: 245, icon: 'fas fa-user-injured', trend: 'up' },
    { title: 'Appointments', value: 32, icon: 'fas fa-calendar-check', trend: 'down' },
    { title: 'Prescriptions', value: 18, icon: 'fas fa-prescription-bottle-alt', trend: 'up' },
    { title: 'Revenue', value: '$12,450', icon: 'fas fa-dollar-sign', trend: 'up' },
  ];

  const recentPatients = [
    { id: 1, name: 'John Doe', lastVisit: '2023-05-10', status: 'active' },
    { id: 2, name: 'Jane Smith', lastVisit: '2023-05-08', status: 'active' },
    { id: 3, name: 'Robert Johnson', lastVisit: '2023-05-05', status: 'inactive' },
    { id: 4, name: 'Emily Davis', lastVisit: '2023-05-03', status: 'active' },
  ];

  const upcomingAppointments = [
    { id: 1, patient: 'John Doe', date: '2023-05-15', time: '10:00 AM', type: 'Follow-up' },
    { id: 2, patient: 'Sarah Wilson', date: '2023-05-16', time: '2:30 PM', type: 'Consultation' },
    { id: 3, patient: 'Michael Brown', date: '2023-05-17', time: '9:15 AM', type: 'Check-up' },
  ];

  return (
    <div className="dashboard">
      <h2 className="page-title">Dashboard Overview</h2>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
            <div className={`stat-trend ${stat.trend}`}>
              <i className={`fas fa-arrow-${stat.trend}`}></i>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="recent-patients card">
          <h3 className="card-title">Recent Patients</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Visit</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentPatients.map(patient => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.lastVisit}</td>
                  <td>
                    <span className={`status-badge ${patient.status}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="upcoming-appointments card">
          <h3 className="card-title">Upcoming Appointments</h3>
          <ul>
            {upcomingAppointments.map(appointment => (
              <li key={appointment.id}>
                <div className="appointment-info">
                  <h4>{appointment.patient}</h4>
                  <p>{appointment.type}</p>
                </div>
                <div className="appointment-time">
                  <p>{appointment.date}</p>
                  <p>{appointment.time}</p>
                </div>
                <button className="btn btn-primary">Details</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;