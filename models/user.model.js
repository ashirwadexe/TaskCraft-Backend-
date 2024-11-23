// Importing the Mongoose library
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. 
// It allows you to define schemas for your MongoDB documents and provides a 
// way to interact with MongoDB using models.
import mongoose from "mongoose";

// Defining the schema for the "User" collection in MongoDB
// A schema defines the structure of documents in a MongoDB collection.
// The schema specifies what fields a document should have, their data types, and any constraints.
const userSchema = new mongoose.Schema(
    {
        // "name" field: stores the user's name
        // - type: Specifies the data type (String)
        // - required: true ensures this field is mandatory when creating a document
        name: {
            type: String, // Data type is String
            required: true // Field is mandatory
        },

        // "email" field: stores the user's email address
        // - type: Specifies the data type (String)
        // - required: true ensures this field is mandatory
        email: {
            type: String, // Data type is String
            required: true // Field is mandatory
        },

        // "password" field: stores the user's hashed password
        // - type: Specifies the data type (String)
        // - required: true ensures this field is mandatory
        password: {
            type: String, // Data type is String
            required: true // Field is mandatory
        }
    },
    {
        // Schema options (second argument to mongoose.Schema)
        // timestamps: true automatically adds two fields to the schema:
        // - createdAt: stores the timestamp when the document was created
        // - updatedAt: stores the timestamp when the document was last updated
        timestamps: true
    }
);

// Creating a Mongoose model based on the schema
// A model is a wrapper for the schema, providing an interface to interact with the database.
// - The first argument ("User") is the singular name of the collection. Mongoose automatically 
//   pluralizes it to create the collection name ("users") in the database.
// - The second argument (userSchema) is the schema defining the structure of documents in the collection.
export const User = mongoose.model("User", userSchema);

// Key Concepts Recap:
// 1. **Mongoose Schema**: Defines the structure, data types, and constraints for documents in a MongoDB collection.
// 2. **Fields in Schema**:
//    - Each field has a `type` to specify the data type (e.g., String, Number, etc.).
//    - `required: true` ensures the field is mandatory.
// 3. **Schema Options**:
//    - `{ timestamps: true }`: Adds `createdAt` and `updatedAt` fields automatically.
// 4. **Mongoose Model**: 
//    - Provides an interface for interacting with the database (e.g., creating, reading, updating, deleting documents).
//    - Maps to a MongoDB collection (e.g., "users" for the "User" model).
