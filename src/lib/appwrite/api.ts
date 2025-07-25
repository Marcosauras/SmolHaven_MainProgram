import { ID } from "appwrite";

import { account, appwriteConfig, avatars, databases} from "./config";
import type { NewUser } from "@/types";

export async function createUserAccount(user: NewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.username);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function saveUserToDatabase(user: NewUser) {
    const userData = {
        accountId: user.id,
        email: user.email,
        username: user.username,
        imageUrl: URL,
    };
    try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      userData
    );
    return newUser;
  } catch (error) {
    console.error("Error saving user to database:", error);
    throw error;
  }
}