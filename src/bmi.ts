/**
 * BMI Calculator
 */

export const BmiStatus = {
  Underweight: 0,
  HealthyWeight: 1,
  Overweight: 2,
  Obesity: 3,
}

export let WeightUnits = {
  KG: 0, // kilograms
  G: 1, // grams
  Pound: 2, // lbs
}

export const HeightUnits = {
  CM: 0, // centimeter
  M: 1, // meter
  In: 2, // inch
  Ft: 3, // feet
}

export interface BmiInput {
  weight: number
  weightUnit: number
  height: number
  heightUnit: number
}

export interface BmiOutput {
  bmi: number
  status: number
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
// convert all weight to KG and height to CM
 function convertInput(input: BmiInput) {
    let weight: Number = 0
    let height: Number = 0

    if (WeightUnits.G) {
         weight = WeightUnits.G/1000
    }
    if (WeightUnits.Pound) {
         weight = WeightUnits.Pound* 0.45359237
    }
    if (HeightUnits.Ft) {
         height = HeightUnits.Ft/30.48
    }
    if (HeightUnits.In) {
         height = HeightUnits.In/2.54
    }
    if (HeightUnits.M) {
         height = HeightUnits.M*100
    }
    let bmi: Number = weight/height*height
    return bmi
}


async function fetchStatusBMI(params:type) {
    const response = await fetch('http://localhost:3001/bmi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }})
    return await response.json()
}
async function fetchStatusBMI(params:type) {
    const response = await fetch('http://localhost:3001/bmi', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }})
    return await response.json()
}


 
export default function bmi(input: BmiInput): BmiOutput {
    convertInput(input: BmiInput)
    fetchStatusBMI()



    let status = 0
    let bmi = 0
  // TODO: implement me
  if (bmi < 18.5) {
    status = 0
}
  if (bmi >= 18.5 && bmi < 25) {
    status = 1
}
  if (bmi >= 25 && bmi < 30) {
    status = 2
}
  if (bmi > 30) {
    status = 3
}
  return {`status: ${status}, bmi: ${bmi}` }
}
