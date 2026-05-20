# ============================================================================
# soldier_manager.py
# Responsibility: Business logic for soldier management
# ============================================================================
import data as dt

def add_soldier(soldier_id: int, name: str) -> None:
    """
    Adds a new soldier to the system.
    Type: Business Logic
    Receives:
        soldier_id (int): Soldier's ID number
        name (str): Soldier's name
    Returns:
        None - the function adds the soldier or raises an exception
    Raises:
        ValueError: If the ID already exists in the system
        ValueError: If the name is empty or invalid
    Why this function exists:
    Pure business logic for adding a soldier.
    Performs validation checks and adds the soldier to the data.
    Does not handle input/output - only logic.
    Raises exceptions in case of errors instead of returning False.
    """


    for soldier in dt.soldiers:
        if soldier["id"] == soldier_id:
            raise ValueError("Soldier ID already exists")
    if name.strip()=="":
        raise ValueError("Invalid Name")
    new_soldier= {
        "id": soldier_id,
        "name": name,
        "duties":[]
    }
    dt.soldiers.append(new_soldier)


def remove_soldier(soldier_id: int) -> None:
    """
    Removes a soldier from the system by ID.
    Receives:
        soldier_id (int): Soldier's ID number
    Returns:
        None - the function removes the soldier or raises an exception
    Raises:
        KeyError: If a soldier with this ID is not found in the system
    Why this function exists:
    Business logic for removing a soldier.
    Checks existence and removes from data.
    Raises an exception if the soldier does not exist.
    """
    for soldier in dt.soldiers:
        if soldier["id"] == soldier_id:
            dt.soldiers.remove(soldier)
            return
    raise KeyError("Can't find ID in soldier list")


def get_all_soldiers() -> list:
    """
    Returns the list of all soldiers in the system.
    Type: Data Access
    Receives: Nothing
    Returns:
        list: A list of dictionaries, each dictionary represents a soldier
              Empty list if there are no soldiers
    Raises: Nothing - always returns a list (empty or full)
    Why this function exists:
    Controlled access to data.
    Allows retrieving data without directly accessing the global variable.
    """
    pass
