groupmates = [
    {
        "name" : "Nikita",
        "surname" : "Shirokov",
        "exams" : ["Web", "Math", "OS"],
        "marks" : [5, 5, 4]
    },
    {
        "name" : "Egor",
        "surname" : "Rozhkov",
        "exams" : ["Web", "History", "OS"],
        "marks" : [5, 4, 4]
    },
    {
        "name" : "Tim",
        "surname" : "Utkin",
        "exams" : ["Physics", "Web", "OS"],
        "marks" : [5, 5, 5]
    },
    {
        "name" : "Artem",
        "surname" : "Armizonov",
        "exams" : ["English", "Math", "Web"],
        "marks" : [5, 3, 4]
    },
    {
        "name" : "Roman",
        "surname" : "Danilenko",
        "exams" : ["Web", "Math", "OS"],
        "marks" : [5, 3, 4]
    }
]

def print_students(students):
    print(u"Имя".ljust(15), u"Фамилия".ljust(10), u"Экзамены".ljust(30), u"Оценки".ljust(20))
    for student in students:
        print(student["name"].ljust(15), student["surname"].ljust(10), str(student["exams"]).ljust(30), str(student["marks"]).ljust(20))
print_students(groupmates)

mid = input("Средняя оценка: ")

def print_students_l(students):
    print(u"Имя".ljust(15), u"Фамилия".ljust(10), u"Экзамены".ljust(30), u"Оценки".ljust(20))
    for student in students:
        if sum(student["marks"]) / len(student["marks"]) > float(mid):
            print(student["name"].ljust(15), student["surname"].ljust(10), str(student["exams"]).ljust(30), str(student["marks"]).ljust(20))
print_students_l(groupmates)