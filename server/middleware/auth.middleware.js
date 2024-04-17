import jwt from 'jsonwebtoken';

export const verifyToken = async ( req, res, next ) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}