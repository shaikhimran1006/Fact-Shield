// src/lib/appwrite.js
import { Client, Storage, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('6786b37a000e1a5e8c68'); // Replace with your Project ID

const storage = new Storage(client);

export { client, storage, ID };
