// var two_line = /\n\n/g;
// var one_line = /\n/g;

export function capitalizeText(text) {
    var first_char = /\S/;

    return text.replace(first_char, function (m) {
        return m.toUpperCase();
    });
}

export function insertLineBreaks(text, maxLineLength = 40) {
    if (!text) return ''; // Handle empty text input
  
    const words = text.split(' ');
    let currentLine = '';
    const lines = [];
  
    for (const word of words) {
      if (currentLine.length + word.length > maxLineLength) {
        lines.push(currentLine);
        currentLine = '';
      }
      currentLine += word + ' ';
    }
  
    lines.push(currentLine.trim()); // Add the last line
  
    return lines.join('\n'); // Join lines with newline characters
  }
  