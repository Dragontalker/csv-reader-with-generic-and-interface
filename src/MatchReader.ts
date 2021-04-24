import { dateStringToDate } from './utils'; 
import { MatchResult } from './MatchResult';

interface DataReader {
  read(): void;
  data: string[][];
}

class MatchReader {
  constructor(public reader: DataReader) {}
}