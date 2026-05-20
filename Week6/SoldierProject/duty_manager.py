
# ============================================================================
# duty_manager.py
# Responsibility: Business logic for duty management
# ============================================================================
import data as dt
def add_duty_to_soldier(soldier_id: int, duty_name: str, day: str) -> None:
    """
    Adds a new duty to a soldier.
    Type: Business Logic
    Receives:
        soldier_id (int): Soldier's ID number
        duty_name (str): Duty name
        day (str): Day of the week (sunday/monday/tuesday/wednesday/thursday)
    Returns:
        None - the function adds the duty or raises an exception
    Raises:
        KeyError: If a soldier with this ID is not found in the system
        ValueError: If a duty with this name already exists for the soldier
        ValueError: If the day is invalid (friday/saturday or invalid value)
    Why this function exists:
    Business logic for adding a duty.
    Performs checks and adds the duty to the soldier.
    Raises exceptions in case of errors instead of returning False.
    """
    if day.lower()=="friday" or day.lower()=="saturday":
        raise ValueError("Aint gonna work on Saturdays")
    for soldier in dt.soldiers:
        if soldier["id"]==soldier_id:
            for duty in soldier["duties"]:
                if duty["name"]==duty_name:
                    raise ValueError("A duty with this name already exists")
            new_duty={
                "name": duty_name,
                "day": day,
                "status" : "pending"
            }
            soldier["duties"].append(new_duty)
            return
    raise KeyError("Soldier ID not found")



def update_duty_status(soldier_id: int, duty_name: str, new_status: str) -> None:
    """
    Updates the status of a duty. 
    Type: Business Logic 
    Receives:
        soldier_id (int): Soldier's ID number
        duty_name (str): Duty name
        new_status (str): New status (pending/completed/missed)
    Returns:
        None - the function updates the status or raises an exception
    Raises:
        KeyError: If a soldier with this ID is not found in the system
        KeyError: If a duty with this name is not found for the soldier
        ValueError: If new_status is invalid (not pending/completed/missed)
    Why this function exists:
    Business logic for updating status.
    Performs checks and updates the status.
    Raises exceptions in case of errors instead of returning False.
    """
    if new_status not in ["pending", "completed", "missed"]:
        raise ValueError("new status is invalid")
    for soldier in dt.soldiers:
        if soldier["id"]==soldier_id:
            for duty in soldier["duties"]:
                if duty["name"]==duty_name:
                    duty["status"]==new_status
                    return
            raise KeyError("Duty not found")
    raise KeyError("Soldier not found")



def get_soldier_duties(soldier_id: int) -> list:
    """
    Returns the list of duties for a soldier.
    
    Type: Data Access
    
    Receives:
        soldier_id (int): Soldier's ID number
    
    Returns:
        list: List of duties (dictionaries)
              Empty list if there are no duties
    
    Raises:
        KeyError: If a soldier with this ID is not found in the system
    
    Why this function exists:
    Controlled access to a soldier's duties.
    Separates the data from access to it.
    Raises an exception if the soldier does not exist (instead of returning an empty list).
    """
    pass
