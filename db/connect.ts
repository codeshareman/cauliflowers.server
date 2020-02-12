// mac-pro
// export const config: DBConnectConfig = {
//   host: 'localhost',
//   user: 'root',
//   password: 'ZyPyc1314',
//   database: 'cauliflowers',
// };

// mac-air
export const config: DBConnectConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root@home',
  database: 'cauliflowers',
};

export type DBConnectConfig = {
  host: string;
  user: string;
  password: string;
  database: string;
};
