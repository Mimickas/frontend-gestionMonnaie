import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faChartBar, faCheck, faCalendar, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

const NotifBar = () => {
  const menuItems = [
    { id: 1, name: 'Tableau de bord', icon: faChartBar, active: true },
    { id: 2, name: 'Finances', icon: faCreditCard, active: false },
    { id: 3, name: 'Tâches', icon: faCheck, active: false },
    { id: 4, name: 'Calendrier', icon: faCalendar, active: false },
    { id: 5, name: 'Équipe', icon: faUsers, active: false },
    { id: 6, name: 'Paramètres', icon: faCog, active: false },
  ];

  return (
    <div className="w-96 mr-0 bg-background-dark shadow-lg h-screen">
      <div className="p-6">
        <h2 className=" font-bold text-text-primary">Notifications</h2>
      </div>

      <nav className="p-4 mt-2">
        <p className="text-sm font-medium text-text-secondary">Tools</p>
        <ul className="space-y-2 mt-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-button text-text-primary border-accent' 
                    : 'text-text-secondary hover:bg-background-card hover:text-text-primary' 
                }`}
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className={`mr-3 ${item.active ? 'text-text-primary' : 'text-text-secondary'}`} 
                />
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NotifBar;