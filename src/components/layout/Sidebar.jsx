// src/components/layout/Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faChartBar,
  faFileContract,
  faArrowsRotate,
  faCalendar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
  const location = useLocation();

  const menuCategories = [
    {
      id: 1,
      name: 'Tableau de bord',
      items: [
        
        { id: 1, name: 'Aperçu', icon: faChartBar, link: '/' }

      ],
    },
    {
      id: 2,
      name: 'Gestion',
      items: [

        { id: 1, name: 'Mouvement', icon: faArrowsRotate, link: '/mouvement' },
        { id: 2, name: 'Categorie', icon: faFileContract, link: '/ss' },

      ],
    },
   
  ];

  return (
    <div className="w-96 bg-background-dark shadow-lg h-screen">
      <div className="p-6">
        <h2 className="font-bold text-text-primary">Mon App</h2>
      </div>

      <nav className="p-4 mt-2">
        {menuCategories.map((category) => (
          <div key={category.id} className="mb-6">
            <p className="text-sm font-medium text-text-secondary">{category.name}</p>
            <ul className="space-y-2 mt-2">
              {category.items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.link
                        ? 'bg-gradient-to-r from-teal-600 to-emerald-500 text-text-primary'
                        : 'text-text-secondary hover:bg-background-card hover:text-text-primary'
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
