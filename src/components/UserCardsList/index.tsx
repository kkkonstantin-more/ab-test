import { useCallback, useEffect, useState } from 'react';
import { fetchUsersData } from '../../api';
import UserCard from '../UserCard';

import './style.css';
import { User } from '../../types';
import { PreparedUser } from '../UserCard/interface';
import { formatUserData } from '../../util';

const UserCardsList = () => {
  const [isFetchingUsersData, setIsFetchingUsersData] = useState(false);
  const [usersData, setUsersData] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsFetchingUsersData(true);

    try {
      const data = await fetchUsersData();
      setUsersData(data);
    } catch (e) {
      setUsersData([]);
    }

    setIsFetchingUsersData(false);
  }

  function isUserSelected(id: number) {
    return selectedUsers.some((user: User) => user.id === id);
  }

  function onSelectUser(id: number) {
    const selectedUser = usersData.find((user) => user.id === id);

    if (!selectedUser) return;

    const isDuplicate = selectedUsers.some((user) => user.id === id);

    if (isDuplicate) {
      setSelectedUsers((prevState: User[]) => {
        return prevState.filter((user) => user.id !== id);
      });

      return;
    }

    setSelectedUsers((prevState: User[]) => {
      return [...(prevState ?? []), selectedUser];
    });
  }

  return (
    <div>
      {selectedUsers.length !== 0 && (
        <div className="selected-users">
          <h3>Active Oompas</h3>

          {selectedUsers?.map(({ first_name, id }: User) => {
            return <div key={id}>{first_name}</div>;
          })}
        </div>
      )}

      <div className="cards-list">
        {isFetchingUsersData && <span>Loading...</span>}

        {formatUserData(usersData).map((user: PreparedUser) => {
          const isSelected = isUserSelected(user.id);

          return (
            <UserCard
              key={user.id}
              {...user}
              isSelected={isSelected}
              onSelect={onSelectUser}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserCardsList;
