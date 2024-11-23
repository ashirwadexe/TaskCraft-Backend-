import jwt from "jsonwebtoken";

// Middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
    try {
        // Get the token from cookies
        const token = req.cookies.token;

        // Check if the token is missing
        if (!token) {
            return res.status(404).json({
                message: "User is not authenticated", // User is not authenticated
                success: false
            });
        }

        // Verify and decode the token
        const decode = await jwt.verify(token, process.env.SECRET_KEY);

        // Check if decoding failed (i.e., token is invalid or expired)
        if (!decode) {
            return res.status(400).json({
                message: "Invalid token", // Token verification failed
                success: false
            });
        }

        // Attach the userId to the request object for use in subsequent middlewares or route handlers
        req.id = decode.userId;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.log(error);

        // Handle errors (token verification, etc.)
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
}

export default isAuthenticated;
