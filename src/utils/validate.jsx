export const checkEmail = (email) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) {
    return "Invalid email format";
  }
  return null;
};
export const checkPassword = (password) => {
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );
  if (!isPasswordValid) {
    return "Password must be at least 8 characters long and contain at least one letter and one number";
  }
  return null;
};
