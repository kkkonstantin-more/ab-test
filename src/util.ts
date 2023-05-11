import { PreparedUser } from './components/UserCard/interface';
import { User } from './types';

export function formatUserData(users: User[]): PreparedUser[] {
  return users.map(
    ({ first_name, last_name, profession, age, favorite, image, id }: User) => {
      return {
        first_name,
        last_name,
        profession,
        age,
        favorite,
        image,
        id,
      };
    },
  );
}
