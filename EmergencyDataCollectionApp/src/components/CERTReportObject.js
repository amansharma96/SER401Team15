class CERTReportObject {
  constructor() {
    this._startTime = "";
    this._lat = "";
    this._long = "";
    this._certGroupNumber = "";
    this._squadName = "";
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
    this._neighborhoodNeedShelter = "";
    this._neighborhoodNeedFirstAid = "";
    this._deceasedPeople = "";
    this._deceasedPeopleLocation = "";
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

  get CERTGroupNumber() {
    return this._certGroupNumber;
  }
  set CERTGroupNumber(value) {
    this._certGroupNumber = value;
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

  get NeighborhoodNeedShelter() {
    return this._neighborhoodNeedShelter;
  }
  set NeighborhoodNeedShelter(value) {
    this._neighborhoodNeedShelter = value;
  }

  get NeighborhoodNeedFirstAid() {
    return this._neighborhoodNeedFirstAid;
  }
  set NeighborhoodNeedFirstAid(value) {
    this._neighborhoodNeedFirstAid = value;
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
}

export default CERTReportObject;
