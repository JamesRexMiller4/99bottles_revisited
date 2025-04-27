import { downTo } from './helpers';

export class Bottles {
  constructor() {}

  song() {
    return this.verses(99, 0);
  }

  verses(verseMax, verseMin) {
    const verseArr = downTo(verseMax, verseMin);
    let verses = "";

    for (let bottleVerse of verseArr) {
      if (verses.length > 0) {
        verses += "\n" + this.verse(bottleVerse);
      } else {
        verses += this.verse(bottleVerse);
      }
    }

    return verses
  }

  verse(bottles) {
    switch (bottles) {
      case 0:
        return 'No more bottles of beer on the wall, ' +
        'no more bottles of beer.\n' +
        'Go to the store and buy some more, ' +
        '99 bottles of beer on the wall.\n';
      case 1:
        return `${bottles} bottle of beer on the wall, ` +
        `${bottles} bottle of beer.\n` +
        'Take it down and pass it around, ' +
        'no more bottles of beer on the wall.\n'
      case 2:
        return `${bottles} bottles of beer on the wall, ` +
        `${bottles} bottles of beer.\n` +
        'Take one down and pass it around, ' +
        `${bottles - 1} bottle of beer on the wall.\n`;
      default:
        return `${bottles} bottles of beer on the wall, ` +
        `${bottles} bottles of beer.\n` +
        'Take one down and pass it around, ' +
        `${bottles - 1} bottles of beer on the wall.\n`;
    }
  }
}
