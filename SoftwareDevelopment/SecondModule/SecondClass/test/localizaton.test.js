import { Localization } from "../entities/localization.js";

test("ingreso distancia entre 2 alumnos y deben estar alrededor de 1", () => {
  const firstLocalization = new Localization(10, 2);
  const secondLocalization = new Localization(9, 1);

  // redondeo distancia obtenida
  const getDistance = Math.round(
    firstLocalization.distanceUp(secondLocalization)
  );

  const getDistanceExpected = 1;
  expect(getDistance).toBe(getDistanceExpected);
});
