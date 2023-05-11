import { UsersDataResponse, User } from './types';

export async function fetchUsersData(): Promise<User[]> {
  const data = await fetch(
    'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1',
  );

  const { results }: UsersDataResponse = await data.json();

  return results;
}
