class ReportObject {
  get StartTime() {
    return this._startTime;
  }
  set StartTime(value) {
    this._startTime = value;
  }

  get Zip() {
    return this._zip;
  }
  set Zip(value) {
    this._zip = value;
  }

  get Lat() {
    return this._lat;
  }
  set Lat(value) {
    this._lat = value;
  }

  get Long() {
    return this._long;
  }
  set Long(value) {
    this._long = value;
  }

  get Accuracy() {
    return this._accuracy;
  }
  set Accuracy(value) {
    this._accuracy = value;
  }

  get Notes() {
    return this._notes;
  }
  set Notes(value) {
    this._notes = value;
  }
}

export default ReportObject;
