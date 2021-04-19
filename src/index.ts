import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');

// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

const printMatchResult = (): MatchResult => {
  if (match[5] === 'H') {
    return MatchResult.HomeWin;
  }
}

let manUnitedWinds = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWinds++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWinds++;
  }
}

console.log(`Man United wond ${manUnitedWinds} games`);