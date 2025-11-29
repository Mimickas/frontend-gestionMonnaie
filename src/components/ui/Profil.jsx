import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Profil({ notifOn, setNotifOn }) {
  const menuItems = [
    { id: 1, name: "Notifications", icon: faBell },
    { id: 2, name: "Profil", icon: faUser },
  ];

  return (
    <div className="p-1 flex space-x-6">
      {menuItems.map((item) => (
        <div key={item.id} className="flex items-center">
          {item.icon === faUser ? (
            <div className="backdrop-blur-sm mr-10 bg-white/30 rounded-full p-2">
              <FontAwesomeIcon icon={faUser} className="text-text-primary text-lg" />
            </div>
          ) : (
            <div
              className="cursor-pointer p-2 hover:bg-white/10 rounded-full transition"
              onClick={() => setNotifOn(!notifOn)}
            >
              <FontAwesomeIcon icon={faBell} className="text-text-primary text-lg" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
