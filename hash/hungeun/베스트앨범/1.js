function solution(genres, plays) {
  let answer = [];

  const table = {};

  genres.forEach((data, i) => {
    if (!table[data]) {
      table[data] = {
        playSum: 0,
        songs: [],
      };
    }
    table[data].playSum += plays[i];
    table[data].songs.push({
      number: i,
      played: plays[i],
    });
  });

  let temp = Object.values(table).sort((a, b) => b.playSum - a.playSum);
  temp.forEach((data) => {
    data.songs.sort((a, b) => b.played - a.played);
  });

  temp.forEach((data) => {
    data.songs.slice(0, 2).forEach((a) => {
      answer.push(a.number);
    });
  });

  return answer;
}
