import { User } from '../../types';

export type PreparedUser = Pick<
  User,
  | 'first_name'
  | 'last_name'
  | 'id'
  | 'image'
  | 'favorite'
  | 'profession'
  | 'age'
>;

export interface UserCardProps extends PreparedUser {
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export interface UserCharacteristic {
  label: string;
  value: string | number;
}
