import { Client } from "@hiveio/dhive";

const client = new Client([
  "https://api.hive.blog",
  "https://api.hivekings.com",
  "https://anyx.io",
  "https://api.openhive.network",
]);

export const getAccount = async (username: string) => {
  try {
    const account = await client.database.getAccounts([username]);
    return account[0];
  } catch (error) {
    console.error("Error fetching account:", error);
    throw error;
  }
};

export const getAccountHistory = async (
  username: string,
  start = -1,
  limit = 100
) => {
  try {
    const history = await client.database.getAccountHistory(
      username,
      start,
      limit
    );
    return history;
  } catch (error) {
    console.error("Error fetching account history:", error);
    throw error;
  }
};

export const transfer = async (
  from: string,
  to: string,
  amount: string,
  memo: string
) => {
  // This is a placeholder for the actual transfer implementation
  // The actual implementation will require integration with Hive Keychain or Hivesigner
  console.log("Transfer:", { from, to, amount, memo });
  throw new Error("Transfer functionality not implemented yet");
};

export default client;