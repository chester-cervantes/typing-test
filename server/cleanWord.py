with open('words.txt') as reader:
    # Further file processing goes here
    lines = reader.readlines()
    for line in lines:
        if len(line) <= 1 or len(line) >= 5:
            lines.remove(line)
    with open('cleanedWords.txt', 'w') as f:
        f.write(lines)