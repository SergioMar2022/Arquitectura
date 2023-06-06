const isAdmin = (req, res, next) => {
  // Verificar si el usuario es administrador
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Acceso denegado. Se requieren privilegios de administrador.' });
  }
};

const isUser = (req, res, next) => {
  // Verificar si el usuario es un usuario normal
  if (req.user && req.user.role === 'user') {
    next();
  } else {
    res.status(403).json({ message: 'Acceso denegado. Se requiere ser usuario.' });
  }
};

module.exports = {
  isAdmin,
  isUser,
};
