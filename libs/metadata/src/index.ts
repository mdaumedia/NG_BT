export interface DsComponentMetadata {
  name: string;
  category: string;
  tokensUsed: string[];
  variants: string[];
  states: string[];
  props: Array<{ name: string; type: string; required?: boolean }>;
  figmaExport: true;
}
