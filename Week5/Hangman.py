import random
list_of_words=["hey", "we", "are", "playing", "hangman", "super", "random" "banana", "tornado", "railroad", "delete"]

chosen_word=random.choice(list_of_words)
hidden_word=len(chosen_word)*["?"]

print(f"The word you need to guess is {hidden_word}")

remaining_lives=7
letter_bank=[]

def check_letter_validity(guessed_letter):
    if guessed_letter.lower() not in "qwertyuiopasdfghjklzxcvbnm":
        return "Please enter a valid letter"
    elif guessed_letter in letter_bank:
        print(f"You've guessed {guessed_letter} already")


def does_letter_match(guessed_letter):
    global remaining_lives
    global letter_bank
    if guessed_letter not in letter_bank:
        letter_bank.append(guessed_letter)
    if guessed_letter in chosen_word:
        letter_matches(guessed_letter)
    else:
        print("Wrong guess!")
        remaining_lives-=1

def letter_matches(guessed_letter):
    print("You got a letter right!")
    for index in range(len(hidden_word)):
        if chosen_word[index]==guessed_letter:
            hidden_word[index]= guessed_letter

def win():
    return "".join(hidden_word) == chosen_word
      

def lose():
    return remaining_lives==0

while remaining_lives>0:
    print(f"Used letters: {letter_bank}")
    guessed_letter=input("Guess a letter ").lower()
    error=check_letter_validity(guessed_letter)
    if error:
        print(error)
        continue
    does_letter_match(guessed_letter)
    if win():
        print("YOU WIN!")
        break
    print(f"You have {remaining_lives} tries left")
    print(hidden_word)
    if lose():
        print("YOU LOSE!")
        print(f"the word was {chosen_word}")
        break



