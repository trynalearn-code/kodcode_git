from soldier_manager import *
from duty_manager import *
from Utils import *
def show_menu() -> None:
    """
Displays menu to user    
Keeps menu separate from logic
    """
    
    print("Please choose what action you would like to take: \n 1.Add Soldier" \
    "\n 2. Remove soldier \n 3. View Current Soldiers \n 4. Add Duty \n 5. Uptate Duty Status \n" \
    "6. View Duties \n 7. Exit")


def get_user_choice() -> str:
    """
Takes user's choice
Later can replace with GUI or website without changic logic
    """
    return input("What action would you like to take?")

def handle_add_soldier() -> None:
    """
Handles adding a soldier   
Asks for ID, name, calls add_soldier(), catches exceptions, and prints whether it was successful or not    
   
    """
    try:
        id=int(input("what is the soldier's ID?"))
        name=input("what is the soldier's name?")
        add_soldier(id,name)
        print("soldier successfully added")
    except ValueError as e:
        print(f"Error: {e}")
def handle_remove_soldier() -> None:
    """
Deals with removing sodiers. 
Takes user input, and calls the right function
    """
    try:
        id=int(input("what is the soldier's ID?"))
        remove_soldier(id)
    except ValueError as e:
        print(f"Error: {e}")


def handle_view_soldiers() -> None:
    """
    Handles the process of displaying all soldiers.
    Calls the appropriate function and displays the result.
    Receives: Nothing
    Returns: Nothing
    Why this function exists:
    Separation between retrieving data and displaying it.
    """

    soldiers=get_all_soldiers()
    if not soldiers:
        print("There aren't any soldiers in the program")
        return
    for soldier in soldiers:
        print(f"ID: {soldier['id']}")
        print(f"Name: {soldier['name']}")
        print(f"Duties: {len(soldier['duties'])}")


def handle_add_duty() -> None:
    """
    Handles the process of adding a duty to a soldier.
    Receives user input and calls the appropriate functions.
    Receives: Nothing
    Returns: Nothing
    Why this function exists:
    Separation between UI and business logic.
    """
    try:
        id=int(input("enter soldier ID"))
        d_name=(input("Enter duty name: "))
        day=input("Enter day of duty")
        add_duty_to_soldier(id, d_name, day)
        print("success!")
    except ValueError as e:
        print(f"Error: {e}")
    except KeyError as e:
        print(f"Error: {e}")

def handle_update_duty_status() -> None:
    """
    Handles the process of updating duty status.
    Receives user input and calls the appropriate functions.
    
    Receives: Nothing
    Returns: Nothing
    
    Why this function exists:
    Separation between UI and business logic.
    """
    try:
        id=int(input("what is the soldier's ID?"))
        name=input("what is the soldier's name?")
        new_status= input("Enter new status: ")
        update_duty_status(id, name, new_status)
        print("Duty status updated")
    except ValueError as e:
        print(f"Error: {e}")
    except KeyError as e:
        print(f"Error: {e}")

def handle_view_soldier_duties() -> None:
    """
    Handles the process of displaying a soldier's duties.
    Receives user input and calls the appropriate functions.
    
    Receives: Nothing
    Returns: Nothing
    
    Why this function exists:
    Separation between UI and business logic.
    """
    try:
        id=int(input("Enter soldier id"))
        duties=get_soldier_duties(id)
        if not duties:
            print("This soldier doesn't have no duties")
            return
        for duty in duties:
            print(f"Name: {duty['name']}")
            print(f"Day:{duty['day']}")
            print(f"status: {duty['status']}")
    except ValueError as e:
        print(f"Error: {e}")
    except KeyError as e:
        print(f"Error: {e}")


def main() -> None:
    """
    The main function of the program.
    Runs a main loop that displays a menu, gets a choice, and executes an action.
    
    Receives: Nothing
    Returns: Nothing
    
    Why this function exists:
    Entry point of the program. Manages the main flow.
    """
    while True:
        show_menu()
        action=get_user_choice()
        if action== "1":
            handle_add_soldier()
        elif action=="2":
            handle_remove_soldier()
        elif action =="3":
            handle_view_soldiers()
        elif action == "4":
            handle_add_duty()
        elif action == "5":
            handle_update_duty_status()
        elif action == "6":
            handle_view_soldier_duties()
        elif action == "7":
            print("bye")
            break
        else:
            print("invalid input")

if __name__== "__main__":
    main()