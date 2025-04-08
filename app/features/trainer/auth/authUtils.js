// Save token to localStorage
export const saveToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Get token from localStorage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Clear token from localStorage
  export const clearToken = () => {
    localStorage.removeItem('token');
  };
  
  // Check user roles (RBAC utility)
  export const hasRole = (user, requiredRole) => {
    return user?.roles?.includes(requiredRole);
  };
  