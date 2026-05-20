# ============================================================================
# utils.py
# Responsibility: Reusable helper functions
# ============================================================================
import data as dt
def find_soldier_by_id(soldier_id: int) -> dict | None:
    """
    Searches for a soldier by ID and returns it.
    Type: Helper Function
    Receives:
        soldier_id (int): Soldier's ID number
    Returns:
        dict | None: Soldier dictionary if found, None if not found
    Raises: Nothing - returns None if not found
    Why this function exists:
    This function is used in many places in the system (DRY).
    Instead of repeating a search loop in every function,
    there is one function that does it.
    Returns None instead of raising an exception - allows flexibility.
    """
    for soldier in dt.soldiers:
        if soldier["id"] == soldier_id:
            return soldier
    return None


def find_duty_by_name(duties: list, duty_name: str) -> dict | None:
    """
    Searches for a duty by name in a duty list.
    
    Type: Helper Function
    
    Receives:
        duties (list): List of duties
        duty_name (str): Duty name to search for
    
    Returns:
        dict | None: Duty dictionary if found, None if not found
    
    Raises: Nothing - returns None if not found
    
    Why this function exists:
    This function is used in multiple places (adding duties, updating status).
    Separates search logic into one place.
    Returns None instead of raising an exception - allows flexibility.
    """
    pass


def is_valid_status(status: str) -> bool:
    """
    Checks whether a status is valid.
    
    Type: Validation Function
    
    Receives:
        status (str): Status to validate
    
    Returns:
        bool: True if the status is valid (pending/completed/missed)
              False if invalid
    
    Raises: Nothing - always returns bool
    
    Why this function exists:
    Status validation is used in multiple places.
    Instead of repeating the validation, there is one function.
    Also makes it easier to change valid statuses in the future.
    Validation functions return bool and do not raise exceptions.
    """
    pass


def is_valid_name(name: str) -> bool:
    """
    Checks whether a name is valid (not empty).
    
    Type: Validation Function
    
    Receives:
        name (str): Name to validate
    
    Returns:
        bool: True if the name is valid (not empty)
              False if empty
    
    Raises: Nothing - always returns bool
    
    Why this function exists:
    Name validation is used in multiple places.
    Separates validation logic into one place.
    In the future, additional checks can be added (minimum length, valid characters).
    Validation functions return bool and do not raise exceptions.
    """
    pass


def soldier_has_duty(soldier: dict, duty_name: str) -> bool:
    """
    Checks whether a soldier has a duty with a certain name.
    
    Type: Validation Function
    
    Receives:
        soldier (dict): Soldier dictionary
        duty_name (str): Duty name to check
    
    Returns:
        bool: True if the duty exists for the soldier
              False if it does not exist
    
    Raises: Nothing - always returns bool
    
    Why this function exists:
    This check is used when adding duties (to prevent duplicates).
    Separates the logic into one place.
    Validation functions return bool and do not raise exceptions.
    """
    pass


def is_valid_day(day: str) -> bool:
    """
    Checks whether a day is valid (not Friday or Saturday).
    
    Type: Validation Function
    
    Receives:
        day (str): Day to validate
    
    Returns:
        bool: True if the day is valid (sunday-thursday)
              False if invalid or forbidden (friday/saturday or invalid value)
    
    Raises: Nothing - always returns bool
    
    Why this function exists:
    Day validation is used when adding duties.
    Separates validation logic into one place.
    In the future, valid days can be changed in one place.
    Validation functions return bool and do not raise exceptions.
    """
    pass
