export interface Report {
  extraAdvantages: ExtraAdvantages;
  financing: Financing;
  floorInsulation: FloorInsulation;
  heating: Heating;
  myHome: MyHome;
  roofInsulation: RoofInsulation;
  solarPanels: SolarPanels;
  wallInsulation: WallInsulation;
  windowInsulation: SolarPanels;
}

export interface ExtraAdvantages {
  currentEnergyLabel: string;
  prospectedCo2Reduction: number;
  prospectedEnergyLabel: string;
  prospectedHomeValueIncrease: number;
}

export interface Financing {
  financingAmount: number;
  financingPeriod: number;
  interestRate: number;
  monthlyEnergySavings: number;
  monthlyFinancingCosts: number;
  monthlyTotalSavings: number;
  selectedFinancingType: number;
  totalInvestment: number;
}

export interface FloorInsulation {
  currentUsage: number;
  displayedCostsPerSquareMeter: number;
  prospectedSavings: number;
  prospectedUsage: number;
  questionnaire: FloorInsulationQuestionnaire;
  selected: boolean;
  surfaceArea: number;
  totalInstallationCosts: number;
}

export interface FloorInsulationQuestionnaire {
  floorSurfaceArea: PuneHedgehog;
  hasAccessToCrawlSpace: PuneHedgehog;
  hasFloorInsulation: PuneHedgehog;
}

export interface PuneHedgehog {
  editable: boolean;
  placeholder: boolean | number | null;
  required: boolean;
  user_input: boolean | number | null | string;
}

export interface Heating {
  questionnaire: HeatingQuestionnaire;
  selected: boolean;
}

export interface HeatingQuestionnaire {
  cvOriginYear: PuneHedgehog;
  hasFloorHeating: PuneHedgehog;
  houseHeatingType: PuneHedgehog;
  houseVentilationType: PuneHedgehog;
  solarBoiler: PuneHedgehog;
}

export interface MyHome {
  questionnaire: { [key: string]: PuneHedgehog };
}

export interface RoofInsulation {
  currentUsage: number;
  displayedCostsPerSquareMeter: number;
  prospectedSavings: number;
  prospectedUsage: number;
  questionnaire: RoofInsulationQuestionnaire;
  selected: boolean;
  surfaceArea: number;
  totalInstallationCosts: number;
}

export interface RoofInsulationQuestionnaire {
  hasRoofInsulation: PuneHedgehog;
  insulationDate: PuneHedgehog;
  insulationMaterialThickness: PuneHedgehog;
  roofSurfaceArea: PuneHedgehog;
  roofType: PuneHedgehog;
}

export interface SolarPanels {
  costPerPanel?: number;
  currentUsage: number;
  prospectedSavings: number;
  prospectedUsage: number;
  questionnaire: SolarPanelsQuestionnaire;
  selected: boolean;
  solarPanelsEligible?: boolean;
  surfaceArea: number;
  totalInstallationCosts: number;
  displayedCostsPerSquareMeter?: number;
}

export interface SolarPanelsQuestionnaire {
  hasDoubleGlazing: PuneHedgehog;
  hasDoubleGlazingInLivingRoom: PuneHedgehog;
  totalWindowSurfaceArea: PuneHedgehog;
}

export interface WallInsulation {
  currentUsage: number;
  displayedCostsPerSquareMeter: number;
  prospectedSavings: number;
  prospectedUsage: number;
  questionnaire: WallInsulationQuestionnaire;
  selected: boolean;
  surfaceArea: number;
  totalInstallationCosts: number;
}

export interface WallInsulationQuestionnaire {
  cavityWallThickness: PuneHedgehog;
  hasWallInsulation: PuneHedgehog;
  wallSurfaceArea: PuneHedgehog;
}

import mock from './mock.json';

export const report: Report = mock;
