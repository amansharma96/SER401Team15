export const calculateAverageLocationAndAccuracy = (locations) => {
  const validLocations = locations.filter((loc) => loc.coords.accuracy <= 10);

  const averageData = validLocations.reduce(
    (acc, loc) => {
      acc.latitude += loc.coords.latitude;
      acc.longitude += loc.coords.longitude;
      acc.accuracy += loc.coords.accuracy;
      return acc;
    },
    { latitude: 0, longitude: 0, accuracy: 0 },
  );

  if (validLocations.length > 0) {
    averageData.latitude /= validLocations.length;
    averageData.longitude /= validLocations.length;
    averageData.accuracy /= validLocations.length;
  }

  return averageData;
};

const calculateStandardDeviation = (values, mean) => {
  const squareDiffs = values.map((value) => {
    const diff = value - mean;
    return diff * diff;
  });
  const avgSquareDiff =
    squareDiffs.reduce((sum, diff) => sum + diff, 0) / values.length;
  console.log("avgSquareDiff: ", avgSquareDiff);
  return Math.sqrt(avgSquareDiff);
};

export const filterOutliers = (locations) => {
  const accuracies = locations.map((loc) => loc.coords.accuracy);
  const meanAccuracy =
    accuracies.reduce((sum, acc) => sum + acc, 0) / accuracies.length;
  const standardDeviation = calculateStandardDeviation(
    accuracies,
    meanAccuracy,
  );
  const upperThreshold = meanAccuracy + standardDeviation;
  console.log("upperThreshold: ", upperThreshold);
  return locations.filter((loc) => loc.coords.accuracy <= upperThreshold);
};
