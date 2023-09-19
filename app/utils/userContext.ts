import React, { useContext } from 'react';
import { Profile } from 'passport-google-oauth';

declare global {
  interface Window {
    user?: Profile;
  }
}

export type User = Partial<Profile>;

export const UserContext = React.createContext<Partial<Profile>>({});

export const useUserContext = (): User => useContext(UserContext);
