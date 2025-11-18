import jwt from "jsonwebtoken"

function authenticateToken(req, res, next) {
    try {
        // Obtener el token de la cookie
        const token = req.cookies.authToken;

        if (!token) {
            return res.status(401).json({
                message: "Acceso denegado. No se proporcionó un token de autenticación.",
                code: 401
            });
        }

        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Adjuntar los datos del usuario al request
        req.user = {
            id: decoded.id,
            username: decoded.username,
            email: decoded.email
        };

        // Continuar con el siguiente middleware o controlador
        next();
    } catch (err) {
        // Token inválido o expirado
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: "El token ha expirado. Por favor, inicia sesión nuevamente.",
                code: 401
            });
        }
        
        return res.status(403).json({
            message: "Token inválido: " + err.message,
            code: 403
        });
    }
}

export default authenticateToken;