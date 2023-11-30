class MYNReportObject {
  constructor(data = {}) {
    this._dbID = data.dbID || "";
    this._startTime = data.startTime || "";
    this._lat = data.lat || "";
    this._long = data.long || "";
    this._accuracy = data.accuracy || "";
    this._mynGroupName = data.mynGroupName || "";
    this._visitNumber = data.visitNumber || "";
    this._roadAccess = data.roadAccess || "";
    this._locationAddress = data.locationAddress || "";
    this._streetAddress = data.streetAddress || "";
    this._city = data.city || "";
    this._state = data.state || "";
    this._zip = data.zip || "";
    this._structureType = data.structureType || "";
    this._structureCondition = data.structureCondition || "";
    this._fireHazards = data.fireHazards || "";
    this._propaneOrGasHazards = data.propaneOrGasHazards || "";
    this._waterHazards = data.waterHazards || "";
    this._electricalHazards = data.electricalHazards || "";
    this._chemicalHazards = data.chemicalHazards || "";
    this._rescuedPeopleGreen = data.rescuedPeopleGreen || "";
    this._rescuedPeopleYellow = data.rescuedPeopleYellow || "";
    this._rescuedPeopleRed = data.rescuedPeopleRed || "";
    this._peopleTrapped = data.peopleTrapped || "";
    this._peopleNeedShelter = data.peopleNeedShelter || "";
    this._deceasedPeople = data.deceasedPeople || "";
    this._deceasedPeopleLocation = data.deceasedPeopleLocation || "";
    this._anyAnimals = data.anyAnimals || "";
    this._animalStatus = data.animalStatus || "";
    this._animalNotes = data.animalNotes || "";
    this._finishTime = data.finishTime || "";
    this._notes = data.notes || "";
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
    this._startTime = "00:59";
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
    this._finishTime = "01:10";
    this._notes =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, mi ornare convallis semper, ligula felis elementum dui, quis rutrum nibh metus ut metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a orci molestie, aliquet lorem id, blandit magna. Vivamus ac mauris in lacus egestas faucibus. Vivamus sodales ex sit amet vehicula venenatis. Praesent sodales nisl ac diam cursus molestie quis et purus. Ut efficitur lobortis ultricies. Quisque egestas aliquam ipsum, a aliquet velit sollicitudin non. Phasellus vel ligula nisl. Nunc porttitor blandit nunc, ac pretium sem dictum in. Nam ipsum diam, faucibus eget lacus sit amet, suscipit dapibus ipsum. Aenean congue euismod erat, sit amet commodo diam condimentum a. Integer eget ullamcorper arcu. Ut sollicitudin dolor sit amet lacus dapibus, ut elementum nisl dapibus. Sed rhoncus eget lorem vitae elementum. Nam a quam magna. ";
  }
}

export default MYNReportObject;
