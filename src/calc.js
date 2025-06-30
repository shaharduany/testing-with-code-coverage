export function analyzePassword(password) {
  if (typeof password !== "string" || password.length === 0) return "Invalid";

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isCommon = ["password", "123456", "qwerty"].includes(
    password.toLowerCase()
  );

  let result;
  if (isCommon) {
    result = "Terrible";
  } else if (password.length < 6) {
    result = "Weak";
  } else if (
    password.length >= 12 &&
    hasUpper &&
    hasLower &&
    hasNumber &&
    hasSpecial
  ) {
    result = "Excellent";
  } else if (hasUpper + hasLower + hasNumber + hasSpecial >= 3) {
    result = "Strong";
  } else {
    result = "Fair";
  }

  return result;
}
