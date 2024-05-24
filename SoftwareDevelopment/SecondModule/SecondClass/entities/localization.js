export class Localization {
  constructor(latitud, longitud) {
    this.latitud = latitud;
    this.longitud = longitud;
  }

  distanceUp(other) {
    const difAbsAmongLat = Math.pow(Math.abs(this.latitud - other.latitud), 2);
    const difAbsAmongLong = Math.pow(
      Math.abs(this.longitud - other.longitud),
      2
    );

    return Math.sqrt(difAbsAmongLat + difAbsAmongLong);
  }
}
