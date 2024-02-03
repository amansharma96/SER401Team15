class ReportObject {
  constructor() {
    this._dbID = "";
    this._reportType = "";
    this._startTime = "";
    this._groupName = "";
    this._squadName = "";
    this._visitNumber = "";
    this._roadAccess = "";
    this._locationAddress = "";
    this._streetAddress = "";
    this._city = "";
    this._state = "";
    this._zip = "";
    this._certSearched = "";
    this._lat = "";
    this._long = "";
    this._alt = "";
    this._accuracy = "";
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
    this._deceasedPeople = "";
    this._deceasedPeopleLocation = "";
    this._peopleTrapped = "";
    this._peopleNeedShelter = "";
    this._neighborhoodNeedFirstAid = "";
    this._neighborhoodNeedShelter = "";
    this._anyAnimals = "";
    this._animalStatus = "";
    this._animalNotes = "";
    this._hazardType = "";
    this._finishTime = "";
    this._notes = "";
  }

  get dbID() {
    return this._dbID;
  }
  set dbID(value) {
    this._dbID = value;
  }

  get reportType() {
    return this._reportType;
  }
  set reportType(value) {
    this._reportType = value;
  }

  get StartTime() {
    return this._startTime;
  }
  set StartTime(value) {
    this._startTime = value;
  }

  get GroupName() {
    return this._groupName;
  }
  set GroupName(value) {
    this._groupName = value;
  }

  get SquadName() {
    return this._squadName;
  }
  set SquadName(value) {
    this._squadName = value;
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

  get CERTSearched() {
    return this._certSearched;
  }
  set CERTSearched(value) {
    this._certSearched = value;
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

  get Alt() {
    return this._alt;
  }
  set Alt(value) {
    this._alt = value;
  }

  get Accuracy() {
    return this._accuracy;
  }
  set Accuracy(value) {
    this._accuracy = value;
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

  get NeighborhoodNeedFirstAid() {
    return this._neighborhoodNeedFirstAid;
  }
  set NeighborhoodNeedFirstAid(value) {
    this._neighborhoodNeedFirstAid = value;
  }

  get NeighborhoodNeedShelter() {
    return this._neighborhoodNeedShelter;
  }
  set NeighborhoodNeedShelter(value) {
    this._neighborhoodNeedShelter = value;
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

  get HazardType() {
    return this._hazardType;
  }
  set HazardType(value) {
    this._hazardType = value;
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
}

export default ReportObject;
