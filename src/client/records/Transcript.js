// @flow strict

type WordTimingInput = {
  startTime: string,
  endTime: string,
  word: string,
};

type WordTiming = {
  startTime: number,
  endTime: number,
  word: string,
};

export type TranscriptInput = {
  transcript_text: string[],
  word_timings: WordTimingInput[][],
};

export type Transcript = {
  paragraphs: WordTiming[][],
};
