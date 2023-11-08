class MYNReportObject {
    constructor() {
      this._startTime = "";
      this._lat = "";
      this._long = "";
      this._mynGroupName = "";
      this._visitNumber = "";
      this._roadAccess = "";
      this._locationAddress = "";
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
      this._anyAnimals = "";
      this._animalStatus = "";
      this._animalNotes = "";
      this._finishTime = "";
      this._notes = "";
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
      this._anyAnimals = "Yes, and require action or documenting";
      this._animalStatus = "Farm Animals";
      this._animalNotes = "There's a lot of cattle that needs help.";
      this._finishTime = "01:10";
      this._notes =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, mi ornare convallis semper, ligula felis elementum dui, quis rutrum nibh metus ut metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a orci molestie, aliquet lorem id, blandit magna. Vivamus ac mauris in lacus egestas faucibus. Vivamus sodales ex sit amet vehicula venenatis. Praesent sodales nisl ac diam cursus molestie quis et purus. Ut efficitur lobortis ultricies. Quisque egestas aliquam ipsum, a aliquet velit sollicitudin non. Phasellus vel ligula nisl. Nunc porttitor blandit nunc, ac pretium sem dictum in. Nam ipsum diam, faucibus eget lacus sit amet, suscipit dapibus ipsum. Aenean congue euismod erat, sit amet commodo diam condimentum a. Integer eget ullamcorper arcu. Ut sollicitudin dolor sit amet lacus dapibus, ut elementum nisl dapibus. Sed rhoncus eget lorem vitae elementum. Nam a quam magna. ";
    }
  }
  
  export default MYNReportObject;
  