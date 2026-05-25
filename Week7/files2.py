#1.
def create_grades_file(filename):
    students = [
    ("Dan", [85, 90, 78]),
    ("MOMO", [92, 88, 95]),
    ("Yoni", [70, 65, 80]),
    ("Avi", [100, 95, 98]),
    ("Sara", [60, 72, 68]),
    ]
    with open("grades.txt","w", encoding= "utf-8") as f:
        for name, grades in students:
            f.write(name)
            f.write(",")
            for i in range(len(grades)):
                f.write(str(grades[i]))
                if i !=len(grades)-1:
                    f.write(",")
            f.write("\n")
create_grades_file("grades.txt")
#2.
def calculate_averages(filename):
    averages={}
    with open(filename,"r",encoding="utf-8") as f:
        for line in f:
            total=0
            parts=line.strip().split(",")
            name=parts[0]
            grades=parts[1:]
            for grade in grades:
                total+=int(grade)
            average=total/len(grades)
            averages[name]=average
    return averages

#3.
def save_results(averages, output_filename):
    class_total=0
    with open(output_filename, "w", encoding="utf-8") as f:
        f.write("=== Student Resulsts ===\n")
        sorted_averages=sorted(averages.items(),key=lambda item:item[1], reverse=True)
        for i, (name,average) in enumerate(sorted_averages,1):
            f.write(f"{i}. {name}:{average:.1f}\n")
#4.:        
            class_total+=average
        f.write("=== Statistics ===\n")
        f.write(f"Class average: {class_total//len(sorted_averages)}\n")
        f.write(f"Highest:{sorted_averages[0][0]} {sorted_averages[0][1]}\n")
        f.write(f"Loswest:{sorted_averages[-1][-2]} {sorted_averages[-1][-1]}\n")
        f.write(f"Passing (>=60):{sum([1 for name , ave in sorted_averages if ave >= 60])}/ {len(sorted_averages)} ")

save_results(calculate_averages("grades.txt"),"results.txt")
