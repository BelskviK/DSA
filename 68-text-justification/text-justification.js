/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let currentLine = [];
    let numLetters = 0;

    for (let word of words) {
        if (numLetters + currentLine.length + word.length > maxWidth) {
            // Calculate spaces
            let totalSpaces = maxWidth - numLetters;
            let spaces = Array(currentLine.length - 1).fill(0);

            if (currentLine.length === 1) {
                // If only one word, left justify
                result.push(currentLine[0] + " ".repeat(totalSpaces));
            } else {
                for (let i = 0; i < totalSpaces; i++) {
                    spaces[i % (currentLine.length - 1)]++;
                }

                let line = "";
                for (let i = 0; i < currentLine.length; i++) {
                    line += currentLine[i];
                    if (i < spaces.length) {
                        line += " ".repeat(spaces[i]);
                    }
                }
                result.push(line);
            }

            currentLine = [];
            numLetters = 0;
        }

        currentLine.push(word);
        numLetters += word.length;
    }

    // Handle the last line (left justified)
    let lastLine = currentLine.join(" ");
    lastLine += " ".repeat(maxWidth - lastLine.length);
    result.push(lastLine);

    return result;
};
