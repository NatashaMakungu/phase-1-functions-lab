function distanceFromHqInBlocks(block) {
  const hq = 42;  
  const distance = Math.abs(hq - block);  
  return distance;
}

function distanceFromHqInFeet(block) {
  const hq = 42;  
  const feetPerBlock = 264;  
  const distance = Math.abs(block - hq) * feetPerBlock;
  return distance;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;  
  const distance = Math.abs(endBlock - startBlock) * feetPerBlock;
  return distance;
}

function calculatesFarePrice(startBlock, endBlock) {
  const feetPerBlock = 264;  
  const freeSampleDistance = 400;  
  const minChargeableDistance = 400;  
  const maxChargeableDistance = 2000;  
  const flatRateCharge = 25;  
  const distance = Math.abs(endBlock - startBlock) * feetPerBlock;
  let farePrice;
  if (distance <= freeSampleDistance) {
      farePrice = 0;  
  } else if (distance <= maxChargeableDistance) {
      farePrice = (distance - freeSampleDistance) * 0.02;  
  } else if (distance > maxChargeableDistance && distance <= 2500) {
      farePrice = flatRateCharge;  
  } else {
      farePrice = "cannot travel that far";  
  }

  return farePrice;
}
