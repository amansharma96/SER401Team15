class MYNReportObject {
  constructor() {
    this._dbID = "";
    this._startTime = "";
    this._lat = "";
    this._long = "";
    this._accuracy = "";
    this._mynGroupName = "";
    this._visitNumber = "";
    this._roadAccess = "";
    this._locationAddress = "";
    this._streetAddress = "";
    this._city = "";
    this._state = "";
    this._zip = "";
    this._structureType = "";
    this._structureCondition = "";
    this._fireHazards = "";
    this._propaneOrGasHazards = "";
    this._waterHazards = "";
    this._electricalHazards = "";
    this._chemicalHazards = "";
    this._rescuedPeopleGreen = "";
    this._rescuedPeopleYellow = "";
    this._rescuedPeopleRed = "";
    this._peopleTrapped = "";
    this._peopleNeedShelter = "";
    this._deceasedPeople = "";
    this._deceasedPeopleLocation = "";
    this._anyAnimals = "";
    this._animalStatus = "";
    this._animalNotes = "";
    this._finishTime = "";
    this._notes = "";
  }
  get dbID() {
    return this._dbID;
  }
  set dbID(value) {
    this._dbID = value;
  }

  get StartTime() {
    return this._startTime;
  }
  set StartTime(value) {
    this._startTime = value;
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
  get MYNGroupName() {
    return this._mynGroupName;
  }
  set MYNGroupName(value) {
    this._mynGroupName = value;
  }

  get VisitNumber() {
    return this._visitNumber;
  }
  set VisitNumber(value) {
    this._visitNumber = value;
  }

  get RoadAccess() {
    return this._roadAccess;
  }
  set RoadAccess(value) {
    this._roadAccess = value;
  }

  get LocationAddress() {
    return this._locationAddress;
  }
  set LocationAddress(value) {
    this._locationAddress = value;
  }
  get StreetAddress() {
    return this._streetAddress;
  }
  set StreetAddress(value) {
    this._streetAddress = value;
  }

  get City() {
    return this._city;
  }
  set City(value) {
    this._city = value;
  }

  get State() {
    return this._state;
  }
  set State(value) {
    this._state = value;
  }

  get Zip() {
    return this._zip;
  }
  set Zip(value) {
    this._zip = value;
  }
  get StructureType() {
    return this._structureType;
  }
  set StructureType(value) {
    this._structureType = value;
  }

  get StructureCondition() {
    return this._structureCondition;
  }
  set StructureCondition(value) {
    this._structureCondition = value;
  }

  get FireHazards() {
    return this._fireHazards;
  }
  set FireHazards(value) {
    this._fireHazards = value;
  }

  get PropaneOrGasHazards() {
    return this._propaneOrGasHazards;
  }
  set PropaneOrGasHazards(value) {
    this._propaneOrGasHazards = value;
  }

  get WaterHazards() {
    return this._waterHazards;
  }
  set WaterHazards(value) {
    this._waterHazards = value;
  }

  get ElectricalHazards() {
    return this._electricalHazards;
  }
  set ElectricalHazards(value) {
    this._electricalHazards = value;
  }

  get ChemicalHazards() {
    return this._chemicalHazards;
  }
  set ChemicalHazards(value) {
    this._chemicalHazards = value;
  }

  get RescuedPeopleGreen() {
    return this._rescuedPeopleGreen;
  }
  set RescuedPeopleGreen(value) {
    this._rescuedPeopleGreen = value;
  }

  get RescuedPeopleYellow() {
    return this._rescuedPeopleYellow;
  }
  set RescuedPeopleYellow(value) {
    this._rescuedPeopleYellow = value;
  }

  get RescuedPeopleRed() {
    return this._rescuedPeopleRed;
  }
  set RescuedPeopleRed(value) {
    this._rescuedPeopleRed = value;
  }

  get PeopleTrapped() {
    return this._peopleTrapped;
  }
  set PeopleTrapped(value) {
    this._peopleTrapped = value;
  }

  get PeopleNeedShelter() {
    return this._peopleNeedShelter;
  }
  set PeopleNeedShelter(value) {
    this._peopleNeedShelter = value;
  }

  get DeceasedPeople() {
    return this._deceasedPeople;
  }
  set DeceasedPeople(value) {
    this._deceasedPeople = value;
  }
  get DeceasedPeopleLocation() {
    return this._deceasedPeopleLocation;
  }
  set DeceasedPeopleLocation(value) {
    this._deceasedPeopleLocation = value;
  }
  get AnyAnimals() {
    return this._anyAnimals;
  }
  set AnyAnimals(value) {
    this._anyAnimals = value;
  }

  get AnimalStatus() {
    return this._animalStatus;
  }
  set AnimalStatus(value) {
    this._animalStatus = value;
  }

  get AnimalNotes() {
    return this._animalNotes;
  }
  set AnimalNotes(value) {
    this._animalNotes = value;
  }

  get FinishTime() {
    return this._finishTime;
  }
  set FinishTime(value) {
    this._finishTime = value;
  }

  get Notes() {
    return this._notes;
  }
  set Notes(value) {
    this._notes = value;
  }
  assignTestData() {
    this._startTime = "2024-01-18T00:00:00";
    this._lat = "38.8951";
    this._long = "-77.0364";
    this._mynGroupName = "Test1";
    this._visitNumber = "1";
    this._roadAccess = "Road Clear";
    this._locationAddress = "123 Test, Scottsdale AZ 85254";
    this._streetAddress = "123 Main St";
    this._city = "Sample City";
    this._state = "CA";
    this._zip = "12345";
    this._structureType = "Duplex";
    this._structureCondition = "Habitable";
    this._fireHazards = "No Fire";
    this._propaneOrGasHazards = "No propane or gas on site";
    this._waterHazards = "Water is off";
    this._electricalHazards = "Power ON";
    this._chemicalHazards = "No Leaks";
    this._rescuedPeopleGreen = "1";
    this._rescuedPeopleYellow = "0";
    this._rescuedPeopleRed = "0";
    this._peopleTrapped = "1";
    this._peopleNeedShelter = "0";
    this._deceasedPeople = "0";
    this._deceasedPeopleLocation = "Unknown";
    this._anyAnimals = "Yes, and require action or documenting";
    this._animalStatus = "Farm Animals";
    this._animalNotes = "There's a lot of cattle that needs help.";
    this._finishTime = "2024-01-18T06:00:00";
    this._notes =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, mi ornare convallis semper, ligula felis elementum dui, quis rutrum nibh metus ut metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a orci molestie, aliquet lorem id, blandit magna. Vivamus ac mauris in lacus egestas faucibus. Vivamus sodales ex sit amet vehicula venenatis. Praesent sodales nisl ac diam cursus molestie quis et purus. Ut efficitur lobortis ultricies. Quisque egestas aliquam ipsum, a aliquet velit sollicitudin non. Phasellus vel ligula nisl. Nunc porttitor blandit nunc, ac pretium sem dictum in. Nam ipsum diam, faucibus eget lacus sit amet, suscipit dapibus ipsum. Aenean congue euismod erat, sit amet commodo diam condimentum a. Integer eget ullamcorper arcu. Ut sollicitudin dolor sit amet lacus dapibus, ut elementum nisl dapibus. Sed rhoncus eget lorem vitae elementum. Nam a quam magna. ";
  }

  getInitialData() {
    return {
      startTime: this._startTime,
      lat: this._lat,
      long: this._long,
      accuracy: this._accuracy,
      mynGroupName: this._mynGroupName,
      visitNumber: this._visitNumber,
      roadAccess: this._roadAccess,
      locationAddress: this._locationAddress,
      streetAddress: this._streetAddress,
      city: this._city,
      state: this._state,
      zip: this._zip,
      structureType: this._structureType,
      structureCondition: this._structureCondition,
      fireHazards: this._fireHazards,
      propaneOrGasHazards: this._propaneOrGasHazards,
      waterHazards: this._waterHazards,
      electricalHazards: this._electricalHazards,
      chemicalHazards: this._chemicalHazards,
      rescuedPeopleGreen: this._rescuedPeopleGreen,
      rescuedPeopleYellow: this._rescuedPeopleYellow,
      rescuedPeopleRed: this._rescuedPeopleRed,
      peopleTrapped: this._peopleTrapped,
      peopleNeedShelter: this._peopleNeedShelter,
      deceasedPeople: this._deceasedPeople,
      deceasedPeopleLocation: this._deceasedPeopleLocation,
      anyAnimals: this._anyAnimals,
      animalStatus: this._animalStatus,
      animalNotes: this._animalNotes,
      finishTime: this._finishTime,
      notes: this._notes,
    };
  }

  updateReportData(newData) {
    this._startTime = newData.startTime || this._startTime;
    this._lat = newData.lat || this._lat;
    this._long = newData.long || this._long;
    this._accuracy = newData.accuracy || this._accuracy;
    this._mynGroupName = newData.mynGroupName || this._mynGroupName;
    this._visitNumber = newData.visitNumber || this._visitNumber;
    this._roadAccess = newData.roadAccess || this._roadAccess;
    this._locationAddress = newData.locationAddress || this._locationAddress;
    this._streetAddress = newData.streetAddress || this._streetAddress;
    this._city = newData.city || this._city;
    this._state = newData.state || this._state;
    this._zip = newData.zip || this._zip;
    this._structureType = newData.structureType || this._structureType;
    this._structureCondition =
      newData.structureCondition || this._structureCondition;
    this._fireHazards = newData.fireHazards || this._fireHazards;
    this._propaneOrGasHazards =
      newData.propaneOrGasHazards || this._propaneOrGasHazards;
    this._waterHazards = newData.waterHazards || this._waterHazards;
    this._electricalHazards =
      newData.electricalHazards || this._electricalHazards;
    this._chemicalHazards = newData.chemicalHazards || this._chemicalHazards;
    this._rescuedPeopleGreen =
      newData.rescuedPeopleGreen || this._rescuedPeopleGreen;
    this._rescuedPeopleYellow =
      newData.rescuedPeopleYellow || this._rescuedPeopleYellow;
    this._rescuedPeopleRed = newData.rescuedPeopleRed || this._rescuedPeopleRed;
    this._peopleTrapped = newData.peopleTrapped || this._peopleTrapped;
    this._peopleNeedShelter =
      newData.peopleNeedShelter || this._peopleNeedShelter;
    this._deceasedPeople = newData.deceasedPeople || this._deceasedPeople;
    this._deceasedPeopleLocation =
      newData.deceasedPeopleLocation || this._deceasedPeopleLocation;
    this._anyAnimals = newData.anyAnimals || this._anyAnimals;
    this._animalStatus = newData.animalStatus || this._animalStatus;
    this._animalNotes = newData.animalNotes || this._animalNotes;
    this._finishTime = newData.finishTime || this._finishTime;
    this._notes = newData.notes || this._notes;
  }
}

export default MYNReportObject;
