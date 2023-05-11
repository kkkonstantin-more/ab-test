import { UserCardProps, UserCharacteristic } from './interface';

import './style.css';

const UserCard = ({
  id,
  age,
  favorite,
  first_name,
  last_name,
  image,
  profession,
  isSelected,
  onSelect,
}: UserCardProps) => {
  const characteristics: UserCharacteristic[] = [
    { label: 'Full name', value: `${first_name} ${last_name}` },
    { label: 'Profession', value: profession },
    { label: 'Age', value: age },
    { label: 'Favorite song', value: favorite.song },
  ];

  function onSelectUser(id: number): () => void {
    return () => {
      onSelect(id);
    };
  }

  return (
    <div className={`user-card ${isSelected ? 'user-card--selected' : ''}`}>
      {characteristics.map(({ label, value }: UserCharacteristic) => {
        return (
          <div className="user-card__characteristic" key={label}>
            <b>{label}: </b>
            {value}
          </div>
        );
      })}

      <div className="user-card__image-container">
        <img
          className="user-card__image"
          src={image}
          alt="user's avatar"
          width={100}
          height={100}
        />
      </div>

      <button className="user-card__button" onClick={onSelectUser(id)}>
        {!isSelected && 'Activate'}

        {isSelected && 'Deactivate'}
      </button>
    </div>
  );
};

export default UserCard;
