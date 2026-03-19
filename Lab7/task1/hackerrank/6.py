n_eng = int(input().strip())
eng_students = set(map(int, input().strip().split()))

n_fre = int(input().strip())
fre_students = set(map(int, input().strip().split()))

only_english = eng_students.difference(fre_students)

print(len(only_english))