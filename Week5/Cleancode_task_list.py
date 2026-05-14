from Cleancode_main import *

tasks=[
Task("go to shul", "HIGH", True),
Task("pack lunch", "Medium", False),
Task("go to school", "HIGH", True),
Task("do homework", "Medium", False),
Task("play piano", "Low", False),
Task("go to sleep", "HIGH", True)
]

def task_status(complete):
    if complete:
        return "completed task!"
    return "not completed"


def task_stats(task):
    print(task.name)
    print(task.priority)
    print(task_status(task.complete))


def count_completed_tasks():
    count=0
    for task in tasks:
        if task.complete:
            count+=1
    return count


def urgent_task_count():
    count=0
    for task in tasks:
        if task.priority=="HIGH":
            count+=1
    return count
