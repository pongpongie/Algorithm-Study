x = int(input())
n = int(input())

for _ in range(n):
  p = list(map(int, input().split()))
  x -= p[0]*p[1]

if x == 0:
  print("Yes")
else:
  print("No")