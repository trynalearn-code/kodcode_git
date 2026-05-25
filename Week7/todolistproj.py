with open("tasks.txt","w", encoding="utf-8") as f:
    f.write("1|Learning Python Files| PENDING \n"
            "2|1 Write Targil|DONE\n"
            "3|Finish the project|PENDING")

def load_tasks(filename):
    tasks=[]
    try:
        with open(filename,"r",encoding="utf-8") as f:
            for line in f:
                line=line.strip()
                line=line.split("|")
                task_dic={}
                task_dic["id"]=int(line[0])
                task_dic["desc"]=line[1]
                task_dic["status"]=line[2]
                tasks.append(task_dic)
    except FileNotFoundError:
        return []
    return tasks

def save_tasks(filename, tasks):
    with open(filename,"w",encoding="utf-8") as f:
        for task in tasks:
            f.write(f"{task['id']}||={task['desc']}|{task['status']}\n")


def add_task(filename,description):
    with open(filename, "a",encoding="utf-8") as f:
        tasks=load_tasks(filename)
        next=len(tasks)+1
        tasks.append({
            "id":next,
            "desc":description,
            "status":"PENDING"
        })
        save_tasks(filename,tasks)

def complete_task(filename, task_id):
    tasks=load_tasks(filename)
    for task in tasks:
        if task["id"]==task_id:
            task["status"]="DONE"
            save_tasks(filename,tasks)
            return
    print(f"Error: ID not found")

def list_tasks(filename):
    tasks=load_tasks(filename)
    for task in tasks:
        if task["status"]=="DONE":
            sign="✓"
        else:
            sign="✗"
        print(f"{sign}{task['id']}|{task['desc']}")

def main():
    FILENAME = "tasks.txt"

    while True:
        print("\n=== To-Do List Manager ===")
        print("1. Show tasks")
        print("2. Add task")
        print("3. Mark as completed")
        print("4. Exit")

        choice = input("Choice: ")

        if choice == "1":
            list_tasks(FILENAME)

        elif choice == "2":
            desc = input("Task description: ")
            add_task(FILENAME, desc)
            print("Task added!")

        elif choice == "3":
            task_id = int(input("Task number: "))
            complete_task(FILENAME, task_id)

        elif choice == "4":
            print("Goodbye!")
            break

        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()