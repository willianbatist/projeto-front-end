export function validarEmail(email: string): boolean {
  const expresion_regular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return expresion_regular.test(email);
}