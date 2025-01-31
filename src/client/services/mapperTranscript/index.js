// @flow strict
import type { TranscriptInput, Transcript } from '../../records/Transcript';

export default function mapperTranscript(input: TranscriptInput): Transcript {
  return {
    paragraphs: input.word_timings.map(wordTiming =>
      wordTiming.map(word => {
        const startTime = Number(word.startTime.substring(0, word.startTime.length - 1));
        const endTime = Number(word.endTime.substring(0, word.endTime.length - 1));
        return {
          word: word.word,
          // convert to millis
          startTime: startTime * 1000,
          endTime: endTime * 1000,
        };
      }),
    ),
  };
}
