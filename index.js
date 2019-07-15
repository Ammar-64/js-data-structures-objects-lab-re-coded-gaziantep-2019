// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key ,value){
  return driver.assign({},driver,{[key]: value});
}

function updateDriverWithKeyAndValue(driver, key, value){
  return driver[key] = value;
}

