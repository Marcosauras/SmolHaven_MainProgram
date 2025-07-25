import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export  const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL || 'http://localhost/v1', // Default to localhost if not set
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    bookmarkedCollectionId: import.meta.env.VITE_APPWRITE_BOOKMARKED_COLLECTION_ID,
    storageBucketId: import.meta.env.VITE_APPWRITE_STORAGE_BUCKET_ID,

}

export const client = new Client()
client
    .setProject(appwriteConfig.projectId) // Your Appwrite Project ID
    .setEndpoint(appwriteConfig.url) // Your Appwrite Endpoint
export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)