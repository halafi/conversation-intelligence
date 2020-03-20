// @flow strict
import mapperTranscript from '..';

describe('#mapperTranscript', () => {
  it('works', () => {
    const input = {
      transcript_text: ['Baba Yaga', 'can do spells'],
      word_timings: [
        [
          {
            startTime: '2.400s',
            endTime: '2.800s',
            word: 'Baba',
          },
          {
            startTime: '2.800s',
            endTime: '3s',
            word: 'Yaga',
          },
        ],
        [
          {
            startTime: '3s',
            endTime: '3.400s',
            word: 'can',
          },
          {
            startTime: '3.400s',
            endTime: '3.900s',
            word: 'do',
          },
          {
            startTime: '3.900s',
            endTime: '4.100s',
            word: 'spells',
          },
        ],
      ],
    };

    expect(mapperTranscript(input)).toEqual({
      paragraphs: [
        [
          {
            startTime: 2400,
            endTime: 2800,
            word: 'Baba',
          },
          {
            startTime: 2800,
            endTime: 3000,
            word: 'Yaga',
          },
        ],
        [
          {
            startTime: 3000,
            endTime: 3400,
            word: 'can',
          },
          {
            startTime: 3400,
            endTime: 3900,
            word: 'do',
          },
          {
            startTime: 3900,
            endTime: 4100,
            word: 'spells',
          },
        ],
      ],
    });
  });
});
