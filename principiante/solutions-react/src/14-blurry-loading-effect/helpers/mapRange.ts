/**
 * Mapea un número de un rango a otro.
 * @param num El número de entrada a escalar.
 * @param inMin El límite inferior del rango de entrada.
 * @param inMax El límite superior del rango de entrada.
 * @param outMin El límite inferior del rango de salida.
 * @param outMax El límite superior del rango de salida.
 * @returns El número escalado al nuevo rango.
 */
export const mapRange = (
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};