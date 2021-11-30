function myFunction(character, sentence) {
    let count = 0;
    let SpelledSentence = sentence.split('');

    for (let i = 0; i < sentence.length; i++) {
        if (character === SpelledSentence[i] || character === SpelledSentence[i].toLowerCase() || character === SpelledSentence[i].toUpperCase()) {
            count += 1;
        }
    }

    return count;
}
