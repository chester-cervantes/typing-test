import sys 
with open(sys.argv[0], "r") as f:
    lines = f.readlines()
with open(sys.argv[1], "w") as f:
    for line in lines:
        word = line.strip("\n")
        if len(word) > 1 and word.isalnum():
            f.write(line)