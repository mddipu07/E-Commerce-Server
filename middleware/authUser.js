import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ success: false, message: 'Not Authorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid Token' });
    }
};

export default authUser;


