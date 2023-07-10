import React from "react";
import { User } from "../../types";

//User Props imported User Interface from types passing the user model and onclick as props
interface UserListProps {
  user: User;
  onClick: () => void;
}

const Users: React.FC<UserListProps> = ({ user, onClick }) => {
  return (
    <li className="pb-3 pt-3 mb-3 cursor-pointer" onClick={onClick}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full bg-[#f2f2f2]"
            src={user.image}
            alt={user.firstName}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.company.title}
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.company.name}
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.phone}
          </p>
        </div>
      </div>
    </li>
  );
};
export default Users;
