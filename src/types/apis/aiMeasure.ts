export type ReadAiMeasure = {
  message?: string;
  resultImage: {
    left: string;
    right: string;
  };
  resultText: {
    left: string;
    right: string;
  };
};
